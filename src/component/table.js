import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './style.css'
import { Link } from "react-router-dom";

export function Table() {


    const [tabledata, settabledata] = useState([])
    useEffect(() => {
        axios.get('http://localhost:2500/Personaldetails')
            .then((result) => {
                console.log(result);
                settabledata(result.data);
            });
    }, [])

    const data_del = (sno) => {
        var dataString = { sno: sno };
        var config = { headers: { "enctype": "multipart/form-data" } };

        axios.post('http://localhost:2500/Delete', dataString, config)
            .then(function (res) {
                if (res.data.status === 'error') {
                    alert('error');
                    window.location.reload();
                }
                else if (res.data.status === 'success') {
                    alert('deleted');
                    window.location.reload();
                }

            })
            .catch(function (error) {
                alert(error);
                window.location.reload();
            })


    }







    return (
        <>
            <div className=" col-12 align p-5 bgcl">
                
                <h3 className="text-center fw-bold fs-2">Admin Table</h3>

                <table className="">
                    <tr className="">
                        <th className="">Sno</th>
                        <th className="">Name</th>
                        <th className="">Address</th>
                        <th className="">City</th>
                        <th className="">Pincode</th>
                        <th className="">Country</th>
                        <th className="" colSpan={3}>Action</th>

                    </tr>

                    {tabledata.map((value, index) => (

                        <tr className="text-center">
                            <td className="">{value.sno}</td>
                            <td className="">{value.firstname}</td>
                            <td className="">{value.address}</td>
                            <td className="">{value.city}</td>
                            <td className="">{value.pincode}</td>
                            <td className="">{value.country}</td>
                            <td> <Link to={"/view/" + value.sno}> <FontAwesomeIcon icon={faEye} ></FontAwesomeIcon></Link></td>
                            <td> <Link to={"/updateform/" + value.sno}><FontAwesomeIcon icon={faPen} className="text-warning"></FontAwesomeIcon></Link></td>
                            <td><FontAwesomeIcon icon={faTrashCan} onClick={() => { data_del(value.sno) }} className="text-danger"></FontAwesomeIcon></td>
                        </tr>
                    ))}


                </table>
                
            </div>
        </>
    );
}