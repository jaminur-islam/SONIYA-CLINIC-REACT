import { useHistory } from "react-router";
import useData from "../../../Hooks/useData";

const Doctors = () => {
  const [doctors] = useData();
  const history = useHistory();
  const getId = (id) => {
    history.push(`/details/${id}`);
  };

  return (
    <div className="container product-container mt-5" id="service">
      <h1> Services </h1>
      <hr />
      <div className="row">
        {doctors.map((md) => {
          return (
            <div key={md.id} className="col-lg-4 col-md-5 col-12 product">
              <div
                className="border p-4 m-3 rounded"
                style={{ height: "440px" }}
              >
                <img
                  className="rounded"
                  width="280"
                  height="200px"
                  src={md.img}
                  alt=""
                />
                <h5> {md.name} </h5>
                <h6> {md.categories} </h6>
                <h6> {md.stady}</h6>

                <button onClick={() => getId(md.id)} className="mt-3">
                  Contact
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctors;
