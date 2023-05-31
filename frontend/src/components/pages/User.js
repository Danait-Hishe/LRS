import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Navbar.js';
import axios from 'axios';
import './User.css';


export default function User() {

    const [columns, setColumns] = useState([])
    const [records, setRecords] = useState([]) 
    const navigate = useNavigate()
   
    const logOut = () => {
      window.localStorage.clear();
      window.location.href = "/";
    };
    
    useEffect(() => {
      axios.get('http://localhost:5000/getAllCustomers')
      .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
      })
    },[])

  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div className='table-wrapper'>
      <div className="text-end"><Link to="/create" className="btn btn-primary">Register parcel</Link></div>
        <table className='table'>
         <thead>
          <tr>
            {columns.map((c,i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
          </thead>
            <tbody>
                {records.map((item) => (
                   <tr key={item}>
                      <td>{item.name}</td>
                      <td>{item.city}</td>
                      <td>{item.kebele}</td>
                      <td>
                         <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">Update</Link>
                         <button onClick={e=> handleSubmit(d.id)} className="btn btn-sm ms-1 btn-danger">Delete</button>
                      </td>
                   </tr>
                ))}
            </tbody>
        </table>
    </div>
    <div>
            <Button 
            onClick={logOut} 
            sx={{marginRight: 3, 
            marginTop:2,  marginLeft:50, marginBottom:5}}
            variant='contained'>Log Out</Button>
          </div>
    </div>
  )
  function handleSubmit(id) {
    const confirm = window.confirm("Do you want to delete?");
    if(confirm){
      axios.delete('http://localhost:5000/getAllCustomers/'+id)
      .then(res=> {
        alert('Data has deleted');
        navigate('/user')
      }).catch(err => console.log(err))
    }
  }
}
