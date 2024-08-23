import React from "react";

const testimonialsData = [
  {
    name: "Samantha Adams",
    image: "/img/person1.png",
    alt: "Samantha Adams",
    rating: 4.1,
    feedback:
      "Little Lemon provided me with an unforgettable dining experience. The cozy atmosphere and flavorful dishes made with care left me wanting more. I can't wait to return to indulge in their fresh offerings again!",
  },
  {
    name: "Emily Hayes",
    image: "/img/person2.png",
    alt: "Emily Hayes",
    rating: 4.7,
    feedback:
      "Little Lemon is my go-to for delicious and nourishing meals. Their cozy spot and fresh, flavorful dishes always leave me satisfied. The care put evident in every bite. I highly recommend stopping by for a meal.",
  },
  {
    name: "George Adams",
    image: "/img/person3.png",
    alt: "George Adams",
    rating: 4.9,
    feedback:
      "Little Lemon is a hidden gem offering a cozy spot serving fresh and flavorful dishes made with care. From the warm ambiance to the delightful menu, every visit is a treat for the senses.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="serif primary-text-color">Testimonials</h2>
        <div className="grid">
          {testimonialsData.map((testimonial) => (
            <div
              className="testimonial primary-bg-color"
              key={testimonial.name}
            >
              <div className="row">
                <img
                  className="avatar"
                  src={testimonial.image}
                  alt={testimonial.alt}
                ></img>
                <div>
                  <h3 className="serif primary-text-color">
                    {testimonial.name}
                  </h3>
                  <div className="rating row">
                    <img src="/img/star.svg" alt="Star"></img>
                    <span>{testimonial.rating}</span>
                  </div>
                </div>
              </div>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
