import axios from "axios";
import React from "react";

export function Form() {
    const handlesubmit = async (event) => {
        event.preventDefault();

        var config = { headers: { "enctype": "multipart/form-data" } };
        var firstname = document.getElementById("firstname").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var pincode = document.getElementById("pincode").value;
        var country = document.getElementById("country").value;

        if (firstname === '' || firstname === 'null') {
            alert("enter first name")
        } else if (address === '' || address === 'null') {
            alert("enter address")
        } else if (city === '' || city === 'null') {
            alert("enter city")
        } else if (pincode === '' || pincode === 'null') {
            alert("enter pincode")
        } else if (country === '' || country === 'null') {
            alert("enter country")

        } else {
            await axios.post("http://localhost:2500/AddUser", { firstname, address, city, pincode, country }, config)
                .then(function (res) {
                    if (res.data.status === 'error') {
                        alert('error')
                        window.location.reload();
                    } else if (res.data.status === 'success') {
                        alert('success')
                        window.location.reload();
                    }
                })
        }
    }

    return (
        <>
            <div className="p-3 bgcl">
                <div className="container-fluid mt-5 pt-5 vh-100 col-8">
                    <h3 className="text-center fw-bold fs-2">Registration Form</h3>
                    <form onSubmit={handlesubmit}>
                        <label className="form-label"> Name</label>
                        <input type="text" name="firstname" className="form-control" id="firstname" placeholder="Enter Your Name" />

                        <label className="form-label">Address</label>
                        <input type="text" name="address" className="form-control" id="address" placeholder="Enter Your Address" />

                        <label className="form-label">City</label>
                        <input type="text" name="city" className="form-control" id="city" placeholder="Enter Your City" />

                        <label className="form-label">Pin Code</label>
                        <input type="number" name="pincode" className="form-control" id="pincode" placeholder="Enter Your Pincode" />

                        <label className="form-label">Country</label>
                        <input type="text" name="country" className="form-control" id="country" placeholder="Enter Your country" />


                        <button type="submit" value="submit" className="rounded-3 mt-2" > submit</button>

                    </form>
                </div>
            </div>
        </>
    );
}