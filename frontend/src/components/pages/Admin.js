import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, Link, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import NavbarAdmin from "../NavbarAdmin";

const validationSchema = yup.object({
  username: yup.string().required("Enter your Username"),
  password: yup
    .string()
    .min(4, "Password must have at least 4 characters")
    .required("Password is required"),
});

function Admin() {
  const [show, setShow] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState(false);
  const [customerData, setCustomerData] = useState("");
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };

  const getAllCustomer = () => {
    fetch("http://localhost:5000/getAllCustomer", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((customerData) => {
        console.log(customerData, "customerData");
        setCustomerData(customerData.customerData);
      });
  };

  const getAllUser = () => {
    fetch("http://localhost:5000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((userData) => {
        console.log(userData, "userData");
        setUserData(userData.userData);
      });
  };

  const deleteUser = (idNo, fullName) => {
    if (window.confirm(`Are you sure you want to delete ${fullName}`)) {
      fetch("http://localhost:5000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          idNo: idNo,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
      <Link to="/create" className="btn btn-primary">
        Register parcel
      </Link>;
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        phoneNumber: "",
        username: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        axios
          .post("http://localhost:5000/createUser", values)
          .then((response) => {
            const data = response.data;
            console.log(data);
            if (data.user) {
              alert(data.message);
            } else {
              alert(data.message);
            }
            actions.setSubmitting(false);
          })
          .then((response) => {
            const data = response.data;
            console.log(data);
            if (data.user) {
              alert(data.message);
            } else {
              alert(data.message);
            }
            actions.setSubmitting(false);
          });
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        isSubmitting,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="container">
          <div>
            <NavbarAdmin />
          </div>
          <Typography variant="h2" align="center" fontFamily={"Helvetica Neue"}>
            Admin Dashboard
          </Typography>
          <div>
            <Button
              sx={{
                marginRight: 10,
                marginTop: 2,
                marginLeft: 50,
                marginBottom: 5,
              }}
              onClick={() => setShow(!show)}
              variant="contained"
            >
              {show === true ? "^" : "+"} Add a User
            </Button>

            {show && (
              <>
                <div
                  className="form1"
                  style={{ marginTop: 35, marginLeft: "30%", marginBottom: 20 }}
                >
                  <h1>Add a User</h1>
                  <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <br />
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your Full Name"
                      required
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.fullName && touched.fullName ? "error" : ""
                      }
                    />
                    <ErrorMessage
                      name="fullName"
                      style={{ color: "red", fontSize: "small" }}
                      className="error-message"
                      component="span"
                    />
                    <label>Phone Number</label>
                    <br />
                    <input
                      id="phoneNumber"
                      type="text"
                      placeholder="Enter your Phone Number"
                      required
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.phoneNumber && touched.phoneNumber ? "error" : ""
                      }
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      style={{ color: "red", fontSize: "small" }}
                      className="error-message"
                      component="span"
                    />
                    <label>Username</label>
                    <br />
                    <input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      required
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.username && touched.username ? "error" : ""
                      }
                    />
                    <ErrorMessage
                      name="username"
                      style={{ color: "red", fontSize: "small" }}
                      className="error-message"
                      component="span"
                    />
                    <br />
                    <label>Password</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your Password"
                      required
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.password && touched.password ? "error" : ""
                      }
                    />
                    <ErrorMessage
                      name="password"
                      style={{ color: "red", fontSize: "small" }}
                      className="error-message"
                      component="span"
                    />
                    <br />
                    <div className="login">
                      <button type="submit" disabled={isSubmitting}>
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
          <div>
            <Button
              sx={{
                marginRight: 10,
                marginTop: 2,
                marginLeft: 50,
                marginBottom: 5,
              }}
              onClick={() => setShowCustomer(!showCustomer)}
              variant="contained"
            >
              {showCustomer === true ? "^" : "↓"} See Customer Data
            </Button>
            {showCustomer && (
              <TableContainer
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  marginTop: 5,
                  marginBottom: 16,
                  boxShadow: "0px 0px 5px #ccc",
                }}
              >
                <Table>
                  <TableHead sx={{ backgroundColor: "rgb(125, 197, 141)" }}>
                    <TableRow>
                      <TableCell>FullName</TableCell>
                      <TableCell>city</TableCell>
                      <TableCell>kebele</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((i) => (
                      <TableRow key={i.idNo}>
                        <TableCell>{i.fullName}</TableCell>
                        <TableCell>{i.city}</TableCell>
                        <TableCell>{i.kebele}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
          <div>
            <Button
              sx={{
                marginRight: 10,
                marginTop: 2,
                marginLeft: 50,
                marginBottom: 5,
              }}
              onClick={() => setShowUser(!showUser)}
              variant="contained"
            >
              {showUser === true ? "^" : "↓"} See Admin Data
            </Button>
            {showUser && (
              <TableContainer
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  marginBottom: 16,
                  marginTop: 5,
                  boxShadow: "0px 0px 5px #ccc",
                }}
              >
                <Table>
                  <TableHead sx={{ backgroundColor: "rgb(125, 197, 141)" }}>
                    <TableRow>
                      <TableCell>FullName</TableCell>
                      <TableCell>Phone NO.</TableCell>
                      <TableCell>Username</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userData.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell>{a.fullName}</TableCell>
                        <TableCell>{a.phoneNumber}</TableCell>
                        <TableCell>{a.username}</TableCell>
                        <TableCell>
                          <PersonRemoveIcon
                            onClick={() =>
                              deleteUser(
                                a.id,
                                a.fullName,
                                a.phoneNumber,
                                a.username
                              )
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
          <div>
            <Button
              onClick={logOut}
              sx={{
                marginRight: 3,
                marginTop: 2,
                marginLeft: 50,
                marginBottom: 5,
              }}
              variant="contained"
            >
              Log Out
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
}
export default Admin;
