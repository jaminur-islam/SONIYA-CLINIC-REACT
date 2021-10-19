import { useParams } from "react-router";
import useData from "../../Hooks/useData";

const Details = () => {
  const { id } = useParams();
  const [doctors] = useData();
  const findObj = doctors.find((dt) => dt.id === parseInt(id));
  const { name, Address, img, stady, categories } = findObj || {};

  return (
    <div className="container mt-5">
      <div className="text-center border">
        <img src={img} width="300" alt="" />
        <h4> Name: {name} </h4>
        <h5> Categories: {categories}</h5>
        <h6> Qualifications : {stady}</h6>
        <h6> Home : {Address} </h6>
        <h6> Call: 00+ 223 3331 </h6>
      </div>
    </div>
  );
};

export default Details;
