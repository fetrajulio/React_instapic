import React from 'react';
import ReactDOM from 'react-dom';
import './index2.css';
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
import km5 from'./img/km5.jpg';



class Apl2 extends React.Component{
    state = {
        joueurs :[
            {id:1, nom:"Kimmich", img :[km1,km2,km3,km4,km5]},
            {id:2, nom:"Halland", img :[hl1,hl2,hl3,hl4,hl5]},
            {id:3,nom: "Hazard", img :[hz1,hz2,hz3,hz4,hz5]},
            {id:4, nom:"Goretzka", img :[gz1,gz2,gz3,gz4,gz5]},
            {id:5, nom:"davies", img :[dv1,dv2,dv3,dv4,dv5]}
        ]
    }
    render(){
        
       const imgs= 
        this.state.joueurs.map((j)=>{
           return   <div>
                        <h5>Rang:{j.id} _{j.nom}</h5>
                        {j.img.map((x)=><div class="gallery-item"><div ><img  src={x}   alt="fireSpot"/></div></div>)}
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Commentaire</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                            <button type="button" class="btn btn-outline-success">Valider</button>
                        </div>
                    </div>
       }            
       )
        return   <div class="gallery" id="gallery">
                    {imgs}
        </div>
    }
}
const rootElement = document.getElementById("root2");
ReactDOM.render(<Apl2 />,rootElement);
export default Apl2;