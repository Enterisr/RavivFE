import React from 'react';
import NbaScores from './components/NbaScores';
import Navbar from './components/layout/Navbar';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TableUsers from './components/TableUsers/TableUsers';
import { SelectPlayers } from './components/SelectPlayers/SelectPlayers';
import AddUser from './components/AddUser/AddUser';
import EditUser from './components/EditUser/EditUser';
import ViewUser from './components/ViewUser/ViewUser';
import LoginPage from './components/LoginPage/LoginPage';
import TablePlayers from './components/TablePlayers/TablePlayers'
import ImageGif from './components/images/logoGif.gif';

function App() {
  
  return (
    <div className='touch-manipulation'
    style={{

      backgroundImage: "url(" + ImageGif + ")",
      backgroundSize: "cover",
      height: "100vh"
    }}
    >
        <Navbar></Navbar>

        <Routes >
          <Route path='/' element ={ <HomePage /> } />
          <Route path='/home' element ={ <SelectPlayers /> } />
          <Route path='/users' element ={ <TableUsers /> } />
          <Route path='signup' element ={<AddUser/>}/>
          <Route path='/login' element ={<LoginPage/>}/>
          <Route path='/edituser/:id' element ={<EditUser/>}/>
          <Route path='/viewuser/:id' element ={<ViewUser/>}/>
          <Route path='/tableplayers' element ={<TablePlayers/>}/>

        </Routes>
    </div>
    );
}


export default App;