import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import SignIn from './components/SingIn';
import GridCoins from './components/GridCoins';
import './assets/nav.css';
import './assets/topNavData.css';
import './assets/singIn.css'
function App() {
 
  //Api
  const [coinsData, setCoins] = useState([]);
  useEffect(()=>{
  console.log('useEffect')
  obtenerDatos()
  },[]);

  const obtenerDatos = async () =>{
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    const coinsData = await data.json()
    console.log(coinsData) 
    setCoins(coinsData)
  }

  //user LocalStotage

  const [user, setUser] = useState(
    window.localStorage.getItem('user') //pedimos el item que tenemos en la key
  );

  const setLocalStorage = value =>{
    try{
      setUser(value)
      window.localStorage.setItem("user", value) //guardo el valor dentro de la key user
    } catch(error){
      console.log(error)
    }
  }

   //delete user
 function deleteUser() {
  localStorage.removeItem("user");
  window.location.href= "/"
  }


  return (
    <div>
    <Router>
      <Nav />
    <Routes>
      <Route path="/" element={<SignIn setLocalStorage={setLocalStorage} />}/>
      { user ? (
      <Route path="/GridCoins" element={<GridCoins coinsData={coinsData} deleteUser={deleteUser}/>}/>, 
      <Route path="*" element={<GridCoins coinsData={coinsData} deleteUser={deleteUser}/>} />
      ) :
      <Route path="*" element={<SignIn setLocalStorage={setLocalStorage} />} />
      //redirect en vez de route 
      }
    </Routes>
    </Router>

    </div>
  );
}

export default App;
