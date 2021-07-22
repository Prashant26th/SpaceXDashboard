import {useEffect, useState} from 'react';
import React from 'react';   
import { getCapsules } from '../api/api';
import { Link } from 'react-router-dom';
import '../App.css';

function Capsules() {

    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
        let capsulesData;
        async function fetchData() {
            capsulesData = await getCapsules();
            setCapsules(capsulesData);
        }
        fetchData();
    }, []);

    function getCapsulesList (capsules){
        if(capsules != null){
            const capsuleList = capsules.map((item) => {
                return (
                    <tbody>
                        <tr className='table__row' key={item.capsule_serial}>
                        <Link to={{
                                pathname: `/capsules/${item.capsule_serial}`,
                                }}
                        >
                            <td className='table__cell'>{item.capsule_serial}</td>
                        </Link>
                            <td className='table__cell'>{item.capsule_id}</td>
                            <td className='table__cell'>{item.details ? item.details : 'Not available' }</td>
                            <td className='table__cell'>{item.status}</td>
                        </tr>
                    </tbody>
                );
            });
            return(
                <>
                    {capsuleList}
                </>
            );
        } else {
            return(
                null
            );
        }
    };

    return (
        <div className='view'>
        <h2>Capsules</h2>
        <table className='table-container'>
            <thead>
            <tr className='table__row'>
                <th>CapsuleId</th>
                <th>CapsuleSerial</th>
                <th>Details</th>
                <th>CurrentStatus</th>
            </tr>
            </thead>
            {getCapsulesList(capsules)}
        </table>
        </div>
    );
}

export default Capsules;