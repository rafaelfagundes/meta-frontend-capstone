import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api";
import { ReservationContext } from "../App";
import ReservationForm from "../components/ReservationForm";

// Mock the dependencies
jest.mock("../api");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);

describe("ReservationForm", () => {
  const mockSetReservationData = jest.fn();
  const mockReservationData = {
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "",
  };

  const renderComponent = () => {
    return render(
      <ReservationContext.Provider
        value={{
          reservationData: mockReservationData,
          setReservationData: mockSetReservationData,
        }}
      >
        <ReservationForm />
      </ReservationContext.Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);
    submitAPI.mockResolvedValue(true);
  });

  test("renders form fields", () => {
    renderComponent();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /make your reservation/i })
    ).toBeInTheDocument();
  });

  test("updates reservation data on input change", () => {
    renderComponent();
    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: "2023-08-01" } });
    expect(mockSetReservationData).toHaveBeenCalledWith(
      expect.objectContaining({ resDate: "2023-08-01" })
    );
  });

  test("fetches available times when date is selected", async () => {
    const { rerender } = renderComponent();

    // Simulate changing the date
    const newReservationData = {
      ...mockReservationData,
      resDate: "2023-08-01",
    };

    // Rerender the component with the new date
    rerender(
      <ReservationContext.Provider
        value={{
          reservationData: newReservationData,
          setReservationData: mockSetReservationData,
        }}
      >
        <ReservationForm />
      </ReservationContext.Provider>
    );

    // Wait for the API call to be made
    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    });

    // Check if the times are rendered
    expect(screen.getByText("17:00")).toBeInTheDocument();
    expect(screen.getByText("18:00")).toBeInTheDocument();
    expect(screen.getByText("19:00")).toBeInTheDocument();
  });

  test("displays error messages for empty fields on form submission", async () => {
    renderComponent();
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("Date is required")).toBeInTheDocument();
      expect(screen.getByText("Time is required")).toBeInTheDocument();
      expect(
        screen.getByText("Number of guests is required")
      ).toBeInTheDocument();
      expect(screen.getByText("Occasion is required")).toBeInTheDocument();
    });
  });
});
