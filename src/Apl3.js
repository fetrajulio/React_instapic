//APLL3 sy INDEX ian no MIASA APL aplication de ny index Navbar
import React from 'react';
import ReactDOM from 'react-dom';
import km5 from'./img/km5.jpg';
import zil from './img/zily.jpg';
import './sary.css';
import s4 from './img/home4.png';
import './avatar.css';

import hz1 from'./img/hz.jpeg';
import hz2 from'./img/hz2.jpg';
import hz3 from'./img/hz3.jpg';
import hz4 from'./img/hz4.jpg';
import hz5 from'./img/hz5.jpg';
import dv1 from'./img/dv1.jpg';
import dv2 from'./img/dv2.jpg';
import dv3 from'./img/dv3.jpg';
import dv4 from'./img/dv4.jpg';
import dv5 from'./img/dv5.jpg';
import gz1 from'./img/gz1.jpg';
import gz2 from'./img/gz2.jpg';
import gz3 from'./img/gz3.jpg';
import gz4 from'./img/gz4.jpg';
import gz5 from'./img/gz5.jpg';
import hl1 from'./img/hl1.jpg';
import hl2 from'./img/hl2.jpeg';
import hl3 from'./img/hl3.jpg';
import hl4 from'./img/hl4.jpg';
import hl5 from'./img/hl5.jpg';
import km1 from'./img/km1.jpg';
import km2 from'./img/km2.jpg';
import km3 from'./img/km3.jpg';
import km4 from'./img/km4.jpg';
import d from './img/down.png';
import com from './img/com.png'
import s1 from './img/home.png';
import s2 from './img/home2.png';
import s3 from './img/home3.png';

class Apl3 extends React.Component{
    state = {
        joueurs :[
            {id:1, nom:"Kimmich",coms:"#kimich 08 MIA SAN MIA", img :[km2,km1,km3,km4,km5]},
            {id:2, nom:"Halland",coms:"#Halland 09 King of Foot", img :[hl5,hl2,hl3,hl4,hl1]},
            {id:3,nom: "Hazard", coms:"#Hazard 10 Best Player",img :[hz4,hz2,hz3,hz1,hz5]},
            {id:4, nom:"Goretzka", coms:"#Gore 18 Plus Costo",img :[gz1,gz2,gz3,gz4,gz5]},
            {id:5, nom:"davies", coms:"#Davies 19 Plus Rapide",img :[dv1,dv2,dv3,dv4,dv5]}
        ]
    }
    render(){
        
        const imgs= 
        this.state.joueurs.map((j)=>{
           return   <div>
                        {j.img.map((x)=><div class="gallery-item"><div >
                        <div class="row">
                            <div class="col-1">
                            <div class="storie">
                                <img src={j.img.find(element => element)}></img>
                            </div>
                            </div>
                            <div class="col-10"><br></br><h5> __{j.nom} </h5></div>
                                
                            <p class="lead">{j.coms}</p>
                            <p>InstaPic a l'Instant</p>
                        </div>
                            <img  src={x}   alt="fireSpot"/>
                        
                        <br></br>
                            <div class="container">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="send"><img src={s3}></img><img src={com}></img><img src={d}></img> </div>
                                    </div>
                                    <div class="col-8"></div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-11"><textarea class="form-control" id="exampleTextarea" rows="2"></textarea></div>
                                <div class="col-1"> <div class="send"><a><img src={s4}></img></a> </div></div>
                            </div>
                        
                            
                            
                        
                        </div>
                        <br></br>
                        </div>
                        
                        )
                        }
                        
                    </div>
       }            
       )
        return(
            <div>

            <div class="countener">
                <br></br><br></br> <br></br>
            
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-8">
                    <div class="card bg-light mb-3">
                            <div class="card-header">
                            <div class="storie">
                                <img src={zil}></img><img src={gz1}></img><img src={km1}></img><img src={km2}></img><img src={km3}></img><img src={hz1}></img>
                                <img src={dv1}></img><img src={hl1}></img><img src={hl3}></img><img src={hl2}></img>
                             </div>
                            </div>
                            
                        </div>
                        <div class="card border-primary mb-3">
                            <div class="card-header">
                            <div class="storie">
                                {imgs}    
                             </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="col-3">
                        <div class="card bg-light mb-3" >
                            <div class="card-body">
                                <div class="avatar"> <img src={zil}></img></div>
                                <h5>RAKOTOARIMANANA</h5>
                                <p>Nanjaharifetra Julio</p>
                                <h5>MSI 5</h5>
                            </div>
                        </div>
                       
                    </div>
                </div>
               
            </div>
            </div>
        );
    }
}
const rootElement = document.getElementById("root3");
ReactDOM.render(<Apl3 />,rootElement);
export default Apl3;
