import React, { useEffect, useState } from "react";

const Homeservice = () => {
  const [cares, setCares] = useState([]);

  useEffect(() => {
    fetch("/careData.json")
      .then((res) => res.json())
      .then((data) => setCares(data));
  }, []);
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-success"> Home services </h1>
        <p className="text-uppercase fw-bold ">
          We provide some home services, you can pick up later if you need
        </p>
      </div>
      <hr className="w-50 mx-auto" />

      <div className="row">
        {cares.map((care) => {
          return (
            <div key={care.id} className="col-lg-6 col-md-6 text-center col-12">
              <div className="m-3 p-3 border rounded">
                <img
                  width="100%"
                  className="rounded"
                  height="300"
                  src={care.img}
                  alt=""
                />
                <h3 className="text-primary">{care.care}</h3>
                <h4> $ {care.price}</h4>
                <button className="btn btn-success px-5"> Take service </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homeservice;
