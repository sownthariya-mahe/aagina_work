import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function UpdateData() {
    const { sno } = useParams();
    const [firstname, setFirstname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');



    useEffect(() => {
        fetch("http://localhost:2500/Update/" + sno + "")
            .then(response => response.json())
            .then(function (res) {
                setFirstname(res[0].firstname);
                setAddress(res[0].address);
                setCity(res[0].city);
                setPincode(res[0].pincode);
                setCountry(res[0].country);

            })

            .catch(function (error) {
                alert(error);
                window.location.href = "/";
            })
    }, [])





    const handlesubmit = async (event) => {
        event.preventDefault();
        var config = { headers: { "enctype": "multipart/form-data" } };
        await axios.put('http://localhost:2500/Updateddata/' + sno + '', { firstname, address, city, pincode, country }, config)
            .then(function (res) {
                if (res.data.status === 'error') {
                    alert('error');
                    window.location.href = "/";
                }
                else if (res.data.status === 'success') {
                    alert('updated')
                    window.location.href = "/";
                }
            })
            .catch(function (err) {
                alert(err);
                window.location.href = "/";
            })

    }


    return (
        <>
            <div className="bgcl">
                <div className="container-fluid mt-5 pt-5 vh-100">
                    <h3 className="text-center fw-bold fs-2">Updation Form</h3>
                    <form onSubmit={handlesubmit}>
                        <label className="form-label"> Name</label>
                        <input type="text" name="firstname" className="form-control" id="firstname" placeholder="Enter Your FirstName" value={firstname} onChange={(e) => setFirstname(e.target.value)} />

                        <label className="form-label">Address</label>
                        <input type="text" name="address" className="form-control" id="address" placeholder="Enter Your Address" value={address} onChange={(e) => setAddress(e.target.value)} />

                        <label className="form-label">City</label>
                        <input type="text" name="city" className="form-control" id="city" placeholder="Enter Your City" value={city} onChange={(e) => setCity(e.target.value)} />

                        <label className="form-label">Pin Code</label>
                        <input type="number" name="pincode" className="form-control" id="pincode" placeholder="Enter Your Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />

                        <label className="form-label">Country</label>
                        <input type="text" name="country" className="form-control" id="country" placeholder="Enter Your country" value={country} onChange={(e) => setCountry(e.target.value)} />


                        <button type="submit" value="submit" className="rounded-3 mt-2" />Submit<button/>

                    </form>
                </div>
            </div>
        </>
    );
}