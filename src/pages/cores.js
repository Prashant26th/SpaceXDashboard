import {useEffect, useState} from 'react';
import React from 'react';   
import { getCores } from '../api/api';
import { Link } from 'react-router-dom';
import '../App.css';

function Cores() {

    const [cores, setCores] = useState([]);

    useEffect(() => {
        let coresData;
        async function fetchData() {
            coresData = await getCores();
            setCores(coresData);
        }
        fetchData();
    }, []);

    function getCoresList (cores){
        if(cores != null){
            const coresList = cores.map((item) => {
                return (
                    <tbody>
                        <tr className='table__row' key={item.core_serial}>
                        <Link to={{
                                pathname: `/cores/${item.core_serial}`,
                                }}
                        >
                            <td className='table__cell'>{item.core_serial}</td>
                        </Link>
                            <td className='table__cell'>{item.missions[0].name}</td>
                            <td className='table__cell'>{item.details ? item.details : 'Not available' }</td>
                            <td className='table__cell'>{item.status}</td>
                        </tr>
                    </tbody>
                );
            });
            return(
                <>
                    {coresList}
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
        <h2>Cores</h2>
        <table className='table-container'>
            <thead>
            <tr className='table__row'>
                <th>CoreId</th>
                <th>Missions</th>
                <th>Details</th>
                <th>CurrentStatus</th>
            </tr>
            </thead>
            {getCoresList(cores)}
        </table>
        </div>
    );
}

export default Cores;