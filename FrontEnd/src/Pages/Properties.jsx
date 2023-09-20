import React, { useEffect, useState } from "react";
import Navigate from "../Components/Navigate";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";
const Properties = () => {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/realEstate")
      .then((response) => {
        console.log(response.data);
        setProperties(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navigate />
      <div>
        <form action="/" method="POST">
          <input
            type="search"
            className="w-30 p-1 outline-none bg-inherit border"
            placeholder="number of bed rooms"
          />

          <input
            type="search"
            placeholder="search by place"
            className="ml-4 w-30 p-1 outline-none bg-inherit border"
          />
          <button
            type="submit"
            onSubmit={() => {
              console.log("dslkj");
            }}
          >
            <FaSearch className="ml-5"> </FaSearch>
          </button>
        </form>
      </div>

      {/* // ------------------- cards ------------------- */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center flex-wrap max-md:gap-1 ">
          {properties.map((property) => (
            <div
              key={property._id}
              className="w-[50%] border rounded-md border-collapse   p-4"
              onClick={() => {
                navigate(`/showDetails/${property._id}`);
              }}
            >
              <img src={property.photos[0]} className="object-center rounded-xl" />
              <div className=" bottom-1 text-white text-3xl">
                {property.address?.street} {property.address?.city}{" "}
                {property.address?.state} {property.address.zip}{" "}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
