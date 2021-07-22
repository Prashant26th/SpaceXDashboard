import {useEffect, useState} from 'react';
import React from 'react';   
import { getLandPads } from '../api/api';
import { Link } from 'react-router-dom';
import '../App.css';

function LandPads() {

    const [landPads, setLandPads] = useState([]);

    useEffect(() => {
        let landPadsData;
        async function fetchData() {
            landPadsData = await getLandPads();
            setLandPads(landPadsData);
        }
        fetchData();
    }, []);

    function getLandPadsList (landPads){
        if(landPads != null){
            const landPadsList = landPads.map((item) => {
                return (
                    <tbody>
                        <tr className='table__row' key={item.id}>
                        <Link to={{
                                pathname: `/landPads/${item.id}`,
                                }}
                        >
                            <td className='table__cell'>{item.id}</td>
                        </Link>
                            <td className='table__cell'>{item.full_name}</td>
                            <td className='table__cell'>{item.details ? item.details : 'Not available' }</td>
                            <td className='table__cell'>{item.status}</td>
                        </tr>
                    </tbody>
                );
            });
            return(
                <>
                    {landPadsList}
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
        <h2>Land pads</h2>
        <table className='table-container'>
            <thead>
            <tr className='table__row'>
                <th>Id</th>
                <th>fullName</th>
                <th>Details</th>
                <th>CurrentStatus</th>
            </tr>
            </thead>
            {getLandPadsList(landPads)}
        </table>
        </div>
    );
}

export default LandPads;