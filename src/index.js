import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apl2 from './Apl2';
import App from './App';
import Apl3 from './Apl3'
import s1 from './img/home.png';
import s2 from './img/home2.png';
import s3 from './img/home3.png';
import s4 from './img/home4.png';
import zil from './img/zily.jpg';
import './avatar.css';
class Apl extends React.Component{
  
  
  render(){
    return <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark  bg-primary" >
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-2">
               <a class="navbar-brand" href="#">InstaPic</a>
            </div>
            <div class="col-7"></div>
            <div class="col-3">
              <div class="icon"> <img src={s1}></img><img src={s4}></img><img src={s2}></img><img src={s3}></img></div>
              
            </div>
          </div>
        </div>
        

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

      </div>
    </nav>
  </div>
  }



}
const rootElement = document.getElementById("root");
ReactDOM.render(<Apl />,rootElement);


