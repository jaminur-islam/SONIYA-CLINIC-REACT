import React, { useEffect, useState } from "react";

const Tips = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    fetch("/tipsData.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-primary"> Free Tips </h1>
        <p className="fs-bold">
          We are giving you some tips which means that if you do things, you
          will get some relief from the disease
        </p>
        <hr className="w-75 mx-auto" />
        <div className="row">
          {tips.map((tip) => {
            return (
              <div
                key={tip.id}
                className="col-lg-6 col-md-6 text-center col-12"
              >
                <div className="m-3 p-3 border rounded">
                  <img
                    width="100%"
                    className="rounded"
                    height="300"
                    src={tip.img}
                    alt=""
                  />
                  <h5 className="mt-3"> {tip.care}</h5>
                  <p className="text-primary">{tip.des}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tips;
