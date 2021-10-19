import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Product.css";

const Products = () => {
  const [medicine, setMedicine] = useState([]);

  const history = useHistory();
  const getId = (id) => {
    history.push(`/order/${id}`);
  };

  useEffect(() => {
    fetch("./medicineData.json")
      .then((res) => res.json())
      .then((data) => setMedicine(data));
  }, []);

  return (
    <div id="medicine" className="container product-container mt-5">
      <h1 className="mt-5"> Our Medicine </h1>
      <hr />
      <div className="row">
        {medicine.map((md) => {
          return (
            <div key={md.id} className="col-lg-4 col-md-5 col-12 product">
              <div className="border p-4 m-3 rounded">
                <img
                  className="rounded"
                  width="280"
                  height="200px"
                  src={md.img}
                  alt=""
                />
                <h5> {md.name} </h5>
                <h3>price: $ {md.price} </h3>

                <button onClick={() => getId(md.id)}> Order </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
