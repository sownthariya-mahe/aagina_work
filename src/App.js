
import { Form } from './component/form';
import './App.css';
import { Nav } from './component/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Table } from './component/table';
import { UpdateData } from './component/updateform';
import { Userdetails } from './component/userdetails';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Nav />, <Table />]} />
          <Route path='/form' element={[<Nav />, <Form />]} />
          <Route path='/updateform/:sno' element={[<Nav />, <UpdateData />]} />
          <Route path='/view/:sno' element={[<Nav />, <Userdetails />]} />



        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;
