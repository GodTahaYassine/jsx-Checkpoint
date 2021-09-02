import './App.css';
//import {Button, Form ,Col ,Row, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import myWonderfulImage from "./imageInSrc.jpg"
//import React, { useState } from "react";

function App() {

  return (
    
    <div style={{border:"solid 1px black",maxWidth:'100vw'}}>
        <h1 className="title red">Taha yassine Belhadj ammar</h1><br/>
        
        <center><img src={myWonderfulImage} alt="" width="320" height="240" controls/></center><br/>
        
        <center><img src="/imageInPublic.jpg"  alt="" width="320" height="240" controls/></center><br/>
        <center><video width="320" height="240" controls> 
            <source src="myVideo.mp4" type="video/mp4"/>
        </video></center>
   </div> 
   
   
  );
}

export default App;