import React, { useState } from "react";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddNew = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [propertyType, setPropertyType] = useState(" ");
  const [price, setPrice] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [squreFeet, setSquareFeet] = useState();
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setLoading(true);
    const newProperty = {
      address,
      propertyType,
      price,
      bedrooms,
      bathrooms,
      squreFeet,
      photos,
    };

    console.log(newProperty);

    axios
      .post(`http://localhost:5000/realEstate`, newProperty)
      .then((response) => {
        console.log(response.status);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };
  return (
    <div>
      <BackButton />

      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="text-3xl my-6 mx-4 font-bold font-mono">
            Add new Property
          </h1>

          <div className=" flex justify-center items-center">
            <fieldset className="border border-sky-800 p-10">
              <legend> Address </legend>
              <div className="m-4">
                <label className="">street : </label>
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) =>
                    setAddress({ ...address, street: e.target.value })
                  }
                  className="bg-inherit border border-sky-800 outline-none focus:border-sky-100"
                />
              </div>
              <div className="m-4">
                <label className="">city : </label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                  className="bg-inherit border border-sky-800 outline-none focus:border-sky-100"
                />
              </div>
              <div className="m-4">
                <label className="">state : </label>
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) =>
                    setAddress({ ...address, state: e.target.value })
                  }
                  className="bg-inherit border border-sky-800 outline-none focus:border-sky-100"
                />
              </div>
              <div className="m-4">
                <label className="">zip : </label>
                <input
                  type="number"
                  value={address.zip}
                  onChange={(e) =>
                    setAddress({ ...address, zip: e.target.value })
                  }
                  className="bg-inherit border border-sky-800 outline-none focus:border-sky-100"
                />
              </div>
            </fieldset>

            <fieldset className="border border-collapse border-sky-800 p-10">
              <legend> Property details </legend>
              <div className="m-4">
                <label className="">property type : </label>
                <input
                  type="text"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="bg-inherit border border-sky-800 outline-none focus:border-sky-100"
                />
              </div>
              <div className="m-4">
                <label className="">price : </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="bg-inherit border border-sky-800 outline-none focus:border-sky-100"
                />
              </div>

              <div className="m-4">
                <label className=""> bedrooms : </label>
                <input
                  type="number"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="bg-inherit border border-sky-800 outline-none focus:border-sky-100"
                />
                <label className="ml-3"> Bathrooms : </label>
                <input
                  type="number"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                  className="bg-inherit border border-sky-800 outline-none focus:border-sky-100"
                />
              </div>

              <div className="m-4">
                <label className="">Square feet : </label>
                <input
                  type="number"
                  value={squreFeet}
                  onChange={(e) => setSquareFeet(e.target.value)}
                  className="bg-inherit border border-sky-800 outline-none focus:border-sky-100"
                />
              </div>
              <div className="m-4">
                <label className="">photos : </label>
                <input
                  type="text"
                  value={photos}
                  onChange={(e) => setPhotos(e.target.value)}
                  className="bg-inherit border border-sky-800 outline-none focus:border-sky-100"
                  placeholder="add link to photo"
                />
              </div>
            </fieldset>
          </div>
          <div className="flex justify-center mt-10 ">
            <button
              className=" px-3 py-1  bg-sky-900 hover:bg-sky-600 hover:text-black"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNew;
