const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const database = require('mysql');

const add = express();
add.use(cors());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static('public'));
// Database Connection
let a = database.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Sownthi@18",
        database: "crud"
    }
)

a.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Database Connected Successfully");
    }
}
)
// get all user details
add.get('/Personaldetails', (request, response) => {
    let sql = 'Select * from aagina ';
    a.query(sql, (error, result) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(result);
        }
    })
})
//add each user details
add.post('/AddUser',(request,response)=>{
    let {firstname,address,city,pincode,country} = request.body;
    let sql = 'insert into aagina(firstname,address,city,pincode,country) values (?,?,?,?,?)';
    a.query(sql,[firstname,address,city,pincode,country],(error,result)=>{
        if (error) {
            let s = {"status":"error"}
            response.send(s);
        }
        else{
            let s = {"status":"success"}
            response.send(s);
        }
    })
})
//delete single record
add.post('/Delete',(request,response)=>{
    let sno = request.body.sno;
    let sql = 'delete from aagina where sno = ?';

    a.query (sql,[sno],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"success"};
            response.send(s)
        }
    })
})


//update user details
add.get('/Update/:sno',(request,response)=>{
    let sno = request.params.sno;
    let sql = 'select * from aagina where sno=?';
    a.query(sql,[sno],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})
// view single record
add.get('/view/:sno',(request,response)=>{
    let sno = request.params.sno;
    let sql = 'select * from aagina where sno=?';
    a.query(sql,[sno],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})
// add updated user details
add.put('/Updateddata/:sno',(request,response)=>{
    let sno = request.params.sno;
    let {firstname,address,city,pincode,country} = request.body;
    
    let sql = 'update aagina set firstname=?,address=?,city=?,pincode=?,country=? where sno=?';
    a.query(sql,[firstname,address,city,pincode,country,sno],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"success"};
            response.send(s)
        }  

})
})

add.listen(2500, () => { console.log("Server running on 2500") });