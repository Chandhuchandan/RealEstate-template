import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";

const ShowDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/realEstate/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <BackButton />
      <h1 className="mt-4 ml-4 text-3xl font-extrabold">Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center m-16  justify-center text-3xl text-black dark:text-white  mx-40 max-md:mx-0">
          <img src={data?.photos} className="mb-5" />
          <h3 className="text-4xl underline m-6 text-sky-800 font-bold">
            Address
          </h3>
          <p>
            <span className="text-sky-600">Street</span> :{" "}
            {data?.address?.street}
          </p>
          <p>
            <span className="text-sky-600">City</span> : {data?.address?.city}
          </p>
          <p>
            <span className="text-sky-600">State</span> : {data?.address?.state}
          </p>
          {data?.address?.zip ? (
            <p>
              <span className="text-sky-600">zip</span>: {data?.address?.zip}
            </p>
          ) : null}

          <h3 className="text-4xl text-sky-800  underline m-6 font-bold">
            Property Details
          </h3>
          {data?.typeOfProperty ? (
            <p>
              <span className="text-sky-600">Type of property</span>:{" "}
              {data?.typeOfProperty}
            </p>
          ) : null}
          {data?.price ? (
            <p>
              <span className="text-sky-600">price</span>: {data?.price}
            </p>
          ) : null}

          {data?.square_feet ? (
            <p>
              <span className="text-sky-600">Square feet</span>:{" "}
              {data?.square_feet}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
