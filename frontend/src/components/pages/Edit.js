import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar.js";
import axios from "axios";

export default function Edit() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllCustomers/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleSubmit(e) {
    e.preventDefualt();
    axios
      .put("http://localhost:5000/getAllCustomers/" + id, data)
      .then((res) => {
        alert("Updated Successfully!");
        navigate("/User");
      });
  }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Id:
          <input type="text" disabled value={data.id} />
        </label>
        <label>
          Full Name:
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />
        </label>
        <label>
          Area:
          <input
            type="text"
            value={data.area}
            onChange={(e) => setData({ ...data, area: e.target.value })}
          />
        </label>
        <br />
        <label>
          Current City:
          <input
            type="text"
            value={data.currentCity}
            onChange={(e) => setData({ ...data, currentCity: e.target.value })}
          />
        </label>
        <label>
          Service Type:
          <input
            type="text"
            value={data.serviceType}
            onChange={(e) => setData({ ...data, serviceType: e.target.value })}
          />
        </label>
        <br />
        <label>
          Sub-City:
          <input
            type="text"
            value={data.subCity}
            onChange={(e) => setData({ ...data, subCity: e.target.value })}
          />
        </label>
        <label>
          North Boundary:
          <input
            type="text"
            value={data.northBoundary}
            onChange={(e) =>
              setData({ ...data, northBoundary: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Kebele:
          <input
            type="number"
            value={data.kebele}
            onChange={(e) => setData({ ...data, kebele: e.target.value })}
          />
        </label>
        <label>
          South Boundary:
          <input
            type="text"
            value={data.southBoundary}
            onChange={(e) =>
              setData({ ...data, southBoundary: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Marital Status:
          <select
            value={data.maritalStatus}
            onChange={(e) =>
              setData({ ...data, maritalStatus: e.target.value })
            }
          >
            <option selected disabled>
              click here
            </option>
            <option>Single</option>
            <option>Married</option>
          </select>
        </label>
        <label>
          East Boundary
          <input
            type="text"
            value={data.eastBoundary}
            onChange={(e) => setData({ ...data, eastBoundary: e.target.value })}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            value={data.gender}
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          >
            <option selected disabled>
              click here
            </option>
            <option>Female</option>
            <option>Male</option>
          </select>
        </label>
        <label>
          West Boundary
          <input
            type="text"
            value={data.westBoundary}
            onChange={(e) => setData({ ...data, westBoundary: e.target.value })}
          />
        </label>
        <br />
        <label>
          Registration Date:
          <input
            type="date"
            value={data.registrationDate}
            onChange={(e) =>
              setData({ ...data, registrationDate: e.target.value })
            }
          />
        </label>
        <label>
          Tenure Type:
          <input
            type="text"
            value={data.tenureType}
            onChange={(e) => setData({ ...data, tenureType: e.target.value })}
          />
        </label>
        <br />
        <label>
          Parcel Code:
          <input
            type="text"
            value={data.parcelCode}
            onChange={(e) => setData({ ...data, parcelCode: e.target.value })}
          />
        </label>
        <label>
          Encumbrance
          <input
            type="text"
            value={data.encumbrance}
            onChange={(e) => setData({ ...data, encumbrance: e.target.value })}
          />
        </label>
        <br />
        <label>
          Land Level:
          <input
            type="text"
            value={data.landLevel}
            onChange={(e) => setData({ ...data, landLevel: e.target.value })}
          />
        </label>
        <label>
          Occupation:
          <input
            type="text"
            value={data.occupation}
            onChange={(e) => setData({ ...data, occupation: e.target.value })}
          />
        </label>
        <button className="btn btn-info" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
