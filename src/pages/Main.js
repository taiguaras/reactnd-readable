import React, {Component} from 'react';
import {Card, Button, Img} from 'bootstrap';
class Main extends Component {

 
render() {
   

    return (
      <div className="main-page" >
        <p>Mounted Main</p>

        <div class="card" style={{width: '18rem'}}>         
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
                
      </div>
    );

  }
}

export default Main;