import {useEffect, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import React from 'react';   
import { getUserDetails } from '../api/api';
import '../App.css';

function Information() {
  const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        let userDetailsData;
        async function fetchData() {
            userDetailsData = await getUserDetails();
            setUserDetails(userDetailsData);
        }
        fetchData();
    }, []);
  return (
    <div>
      <div className="middleDiv">
      <h1>User card Details</h1> 
      <div style={{fontStyle: 'inherit', fontSize: '5rem'}}>
              <FaIcons.FaUser/>
            </div>
        <div style={{fontSize:30}}>
          <label>User Id: </label>
          {userDetails.userId}
          <br/>
          <label>User Name: </label> 
          {userDetails.userName}
          <br/>
          <label>User role: </label> 
          {userDetails.role}
          </div>
      </div>
    </div>
  );
}

export default Information;