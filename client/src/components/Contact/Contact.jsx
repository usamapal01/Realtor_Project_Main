import React from "react";

function Contact() {
  return (
    <div>
      <section class="module" id="about">
        <div class="container">
          <div class="row">
            <p>&nbsp;</p>
            <h2 className="heading" class="module-title font-alt">
              - Contact Us -
            </h2>
            <h1 className="sub-heading" align="center">
              Got a question? We are available …
            </h1>
          </div>
          <div class="row">
            <div class="col-sm-2 col-sm-offset-5">
              <div class="large-text align-center">
                <a class="section-scroll" href="#services">
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a class="section-scroll" href="#services">
        <hr class="divider-w" />
      </a>

      <section class="module" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <a class="section-scroll" href="#services">
                {" "}
              </a>
              <form
                method="post"
                id="form"
                action="/el/cgi/eFormsNew.asp"
                onsubmit="return valida(this))"
                class="wrapper"
              >
                <a class="section-scroll" href="#services">
                  <div class="form-group">
                    <label class="sr-only" for="name">
                      Name
                    </label>
                    <input
                      name="FirstName"
                      type="text"
                      id="FirstName"
                      class="form-control"
                      placeholder="First Name"
                    />
                    <p class="help-block text-danger"></p>
                  </div>

                  <div class="form-group">
                    <label class="sr-only" for="email">
                      Last Name
                    </label>
                    <input
                      name="LastName"
                      class="form-control"
                      type="text"
                      placeholder="Last Name"
                    />
                    <p class="help-block text-danger"></p>
                  </div>

                  <div class="form-group">
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      name="Email"
                      class="form-control"
                      type="text"
                      placeholder="Email"
                    />
                    <p class="help-block text-danger"></p>
                  </div>

                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="7"
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      required="required"
                      data-validation-required-message="Please enter your message."
                    ></textarea>
                    <p class="help-block text-danger"></p>
                  </div>

                  <div class="form-group">
                    <a href="BuyersVirtual.shtml" class="buyerVitrual-btn">
                      Buyers virtual appointment
                    </a>
                    <a href="SellersVirtual.shtml" class="SellersVitrual-btn">
                      Sellers virtual appointment
                    </a>
                  </div>

                  <div class="col-sm-4">
                    <div class="alt-features-item mt-0">
                      <div class="alt-features-icon">
                        <span class="icon-map"></span>
                      </div>
                      <h3 class="alt-features-title font-alt">Where to meet</h3>
                      Address
                    </div>
                    <div class="alt-features-item mt-xs-60">
                      <div class="alt-features-icon">
                        <span class="icon-envelope"></span>
                      </div>
                      <h3 class="alt-features-title font-alt">Say Hello</h3>
                      Email: Phone:
                    </div>
                    <div class="alt-features-item mt-xs-60">
                      <div class="alt-features-icon">
                        <span class=" icon-chat"></span>
                      </div>
                      <h3 class="alt-features-title font-alt">Languages</h3>
                      English
                    </div>
                  </div>
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
