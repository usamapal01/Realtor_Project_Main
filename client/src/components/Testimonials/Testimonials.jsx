import React from "react";

function Testimonials() {

  const testimonials = [
    {
      name: "Peter",
      state: "Anaheim, California",
      description: "I had an amazing experience working with Donna. he is very knowledgeable and always responds quickly when I have aquestion. I would recommend her to anyone. "
    },
    {
      name: "Emma",
      state: "Cerritos, California",
      description: "Pankaj was very helpful in getting us a home. Gave us many options and also kept in mind what we were looking for, very professional at what he was doing, highly recommend."
    },
    {
      name: "John",
      state: "Lakewood, California",
      description: "Donna has been such an essential figure in helping me look for homes in Lakewood. She is very much acquainted with the area and her positive attitude makes me feel confident."
    },
    {
      name: "Ramirez",
      state: "Long Beach, California",
      description: "We originally were looking to rent a home and never thought in a million years that we would be purchasing a home instead. Kevin was able to get us qualified and now we will be buying our first home."
    },
  ]

  return (
    <div>
      <h1 className="heading">- OUR CLIENT SPEAK VOLUMES. -</h1>
      <div>
        
      </div>
      <div>
        <div className="testimonials">
          <div className="container-md">
          <h2 className="sub-heading mb-5">
          Our client testimonials describe what has been, and our promise of
          what is to come.
        </h2>
            <div className="row d-flex gy-3">
              {testimonials.map((testimonial, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{testimonial.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {testimonial.state}
                      </h6>
                      <p className="card-text">{testimonial.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

        </div>
        <div className="sub-heading mb-5">...and more! </div>
      </div>
      );
}

      export default Testimonials;
