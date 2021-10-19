import React from "react";

const Services = () => {
  return (
    <section className="container mt-4" id="about">
      <div>
        <h1 className="text-center" style={{ color: "rgb(50, 150, 150)" }}>
          About us
        </h1>
        <hr style={{ width: "200px", margin: "0 auto" }} />

        <div
          className="row mt-3 mb-5 rounded  text-white"
          style={{ background: "#44B1D2" }}
        >
          <div className="col-12 col-md-6 col-lg-3">
            <div className="text-center m-3 p-3">
              <i className="fas fa-user-md fs-1 mb-2"></i>
              <h4> Qualified Doctors</h4>
              <p>
                We have a lot of good people here who can give you accurate
                information about your health care, they will check your health
                every day and give advice.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <div className="text-center m-3 p-3">
              <i className="fas fa-stethoscope fs-1  mb-2"></i>
              <h4>Regular Checkup</h4>
              Every day they will check your health and give advice, you must
              come to us for proper treatment of your health, We will give you
              proper treatment for your health
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <div className="text-center m-3 p-3">
              <i className="fas fa-vials fs-1  mb-2"></i>
              <h4> Lab Test </h4>
              <p>
                We have modern masign with which you will be checked up, any
                problem in your health can be detected immediately so if you
                want to get proper treatment then you must go to us.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <div className="text-center m-3 p-3">
              <i className="fas fa-clinic-medical fs-1  mb-2"></i>
              <h4> Clinic News </h4>
              <p>
                All our news is updated on our website, you can come and see
                anything about us on our website, and if you have any problems,
                be sure to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
