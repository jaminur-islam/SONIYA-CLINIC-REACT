import { useEffect, useState } from "react";

const useData = () =>{
  const [doctors , setDoctors] = useState([])
  useEffect(()=>{
    fetch('/doctorData.json')
    .then(res=> res.json())
    .then(data => setDoctors(data));
  },[])

  return [doctors]
}

export default useData;