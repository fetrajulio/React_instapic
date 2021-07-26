import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apl2 from './Apl2';
import App from './App';

class Apl extends React.Component{
  
  
  render(){
    return <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">BestPlayeur In the world</a>
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


