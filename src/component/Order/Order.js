import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const Order = () => {
  const { id } = useParams();

  const [medicine, setMedicine] = useState([]);
  useEffect(() => {
    fetch("/medicineData.json")
      .then((res) => res.json())
      .then((data) => setMedicine(data));
  }, []);

  const findObj = medicine.find((md) => md.id === parseInt(id));
  const { name, img, price, delivery } = findObj || {};

  const history = useHistory();
  const orderDone = () => {
    history.push("/orderdone");
  };
  return (
    <div className="container mt-5">
      <div className="text-center border">
        <img src={img} alt="" />
        <h4> Name: {name} </h4>
        <h5> price : $ {price}</h5>
        <h6> Delivery cost : $ {delivery}</h6>
        <h5>Total cost :$ {price + delivery}</h5>
        <button onClick={orderDone} className="btn btn-success mb-4">
          Confirm order
        </button>
      </div>
    </div>
  );
};

export default Order;
