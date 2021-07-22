import {useEffect, useState} from 'react';
import React from 'react';   
import { getDragons } from '../api/api';
import { Link } from 'react-router-dom';
import '../App.css';

function Dragons() {

    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        let dragonsData;
        async function fetchData() {
            dragonsData = await getDragons();
            setDragons(dragonsData);
        }
        fetchData();
    }, []);

    function getDragonsList (dragons){
        if(dragons != null){
            const dragonsList = dragons.map((item) => {
                return (
                    <tbody>
                        <tr className='table__row' key={item.id}>
                        <Link to={{
                                pathname: `/dragons/${item.id}`,
                                }}
                        >
                            <td className='table__cell'>{item.id}</td>
                        </Link>
                            <td className='table__cell'>{item.name}</td>
                            <td className='table__cell'>{item.type}</td>
                            <td className='table__cell'>{item.active === true ? "Active" : "Deactive"}</td>
                        </tr>
                    </tbody>
                );
            });
            return(
                <>
                    {dragonsList}
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
        <h2>Dragons</h2>
        <table className='table-container'>
            <thead>
            <tr className='table__row'>
                <th>Id</th>
                <th>Name</th>
                <th>Type</th>
                <th>Status</th>
            </tr>
            </thead>
            {getDragonsList(dragons)}
        </table>
        </div>
    );
}

export default Dragons;