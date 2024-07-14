import React, { useEffect } from 'react';
import Main from './Main';
import './App.css';
import {gapi} from 'gapi-script'
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function App() {
  useEffect(()=>{
  function start() {
    gapi.client.init({
      clientId:CLIENT_ID,
      scope:""
    })
  }    
  gapi.load('client:auth2',start);
  })
  return (
    <div className="App">
     
     <Main />
    </div>
  );
}

export default App;
