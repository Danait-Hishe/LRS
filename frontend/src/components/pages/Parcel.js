import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function Parcel() {
      
      const [inputData , setInputData] = useState({
        fullName:'',
        currentCity:'',
        subCity:'',
        kebele:'',
        martialStatus:'',
        gender:'',
        westBoundary:'',
        registrationDate:'',
        parcelCode:'',
        landLevel:'',
        area:'',
        serviceType:'',
        northBoundary:'',
        southBoundary:'',
        eastBoundary:'',
        westBoundary:'',
        tenureType:'',
        encumbrance:'',
        occupation:''
      })

      const navigate = useNavigate();

      function handleSubmit(e) {
          e.preventDefualt()

          axios.post('http://localhost:5000/getAllCustomers', inputData)
          .then(res => {
            alert("Registered Successfully!");
            navigate('/User');
          }).catch(err => console.log(err));
      }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name:<input type = "text" name="fullName"
              onChange={e=> setInputData({...inputData, fullName: e.target.value})}/></label>
        <label>Area:<input type = "text" name="area" 
              onChange={e=> setInputData({...inputData, area: e.target.value})}/></label>
        <br/>
        <label>Current City:<input type = "text" name="currentCity"
              onChange={e=> setInputData({...inputData, currentCity: e.target.value})}/></label>
        <label>Service Type:<input type = "text" name="seviceType" 
              onChange={e=> setInputData({...inputData, serviceType: e.target.value})}/></label>
        <br/>
        <label>Sub-City:<input type = "text" name="subCity"
              onChange={e=> setInputData({...inputData, subCity: e.target.value})}/></label>
        <label>North Boundary:<input type = "text" name="northBoundary" 
              onChange={e=> setInputData({...inputData, northBoundary: e.target.value})}/></label>
        <br/>
        <label>Kebele:<input type = "number" name="kebele"
              onChange={e=> setInputData({...inputData, kebele: e.target.value})}/></label>
        <label>South Boundary:<input type = "text" name="southBoundary"
              onChange={e=> setInputData({...inputData, southBoundary: e.target.value})} /></label>
        <br/>
        <label>Marital Status:
        <select name="maritalStatus" onChange={e=> setInputData({...inputData, martialStatus: e.target.value})}>
            <option selected disabled>click here</option>
            <option>Single</option>
            <option>Married</option>
        </select>
        </label>
        <label>East BOundary<input type = "text" name="eastBoundary"
              onChange={e=> setInputData({...inputData, eastBoundary: e.target.value})}/></label>
        <br/>
        <label>Gender:
        <select name="gender" onChange={e=> setInputData({...inputData, gender: e.target.value})}> 
            <option selected disabled>click here</option>
            <option>Female</option>
            <option>Male</option>
        </select>
        </label>
        <label>West Boundary<input type = "text" name="westBoundary" 
              onChange={e=> setInputData({...inputData, westBoundary: e.target.value})}/></label>
        <br/>
        <label>Registration Date:<input type = "date" name="registrationDate" 
              onChange={e=> setInputData({...inputData, registrationDate: e.target.value})}/></label>
        <label>Tenure Type:<input type = "text" name="tenureType" 
              onChange={e=> setInputData({...inputData, tenureType: e.target.value})}/></label>
        <br/>
        <label>Parcel Code:<input type = "text" name="parcelCode" 
              onChange={e=> setInputData({...inputData, parcelCode: e.target.value})}/></label>
        <label>Encumbrance<input type = "text" name="encumbrance" 
              onChange={e=> setInputData({...inputData, encumbrance: e.target.value})}/></label>
        <br/>
        <label>Land Level:<input type = "text" name="landLevel" 
              onChange={e=> setInputData({...inputData, landLevel: e.target.value})}/></label>
        <label>Occupation:<input type = "text" name="occupation" 
              onChange={e=> setInputData({...inputData, occupation: e.target.value})}/></label>
            <br/>
            <button className='btn btn-info' type='submit'>Register</button>
        </form>
    </div>
  )
}
