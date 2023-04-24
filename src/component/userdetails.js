import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export function Userdetails() {
    const { sno } = useParams();
    const [firstname, setFirstname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');



    useEffect(() => {
        fetch("http://localhost:2500/view/" + sno + "")
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







    return (
        <>
            <div className="bgcl">
                <div className="container-fluid mt-5 pt-5 vh-100 col-6">
                    <h3 className="text-center fw-bold fs-2">User Details</h3>
                    <form >
                        <label className="form-label"> Name</label>
                        <input type="text" name="firstname" className="form-control" id="firstname" placeholder="Enter Your FirstName" value={firstname} />

                        <label className="form-label">Address</label>
                        <input type="text" name="address" className="form-control" id="address" placeholder="Enter Your Address" value={address} />

                        <label className="form-label">City</label>
                        <input type="text" name="city" className="form-control" id="city" placeholder="Enter Your City" value={city} />

                        <label className="form-label">Pin Code</label>
                        <input type="number" name="pincode" className="form-control" id="pincode" placeholder="Enter Your Pincode" value={pincode} />

                        <label className="form-label">Country</label>
                        <input type="text" name="country" className="form-control" id="country" placeholder="Enter Your country" value={country} />


                        <Link to='/'><input type="Button" value="Back" className="rounded-3 mt-2" /></Link>

                    </form>
                </div>
            </div>
        </>
    );
}