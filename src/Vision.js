import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';


function Vision() {

    axios({
        method: 'post',
        url: 'https://cors.bridged.cc/https://api.openvisionapi.com/api/v1/detection',
        data: {
          image: ''
        }
      }).then(Request=>{
          console.log(Request)
      })
    
    return (
        <div>
            <form  method="post" encType="multipart/form-data">
            <input type="file" placeholder="upload an image" id="image" required/>
            <Button variant="outline-success" type="submit" >UPLOAD</Button>
            </form>
        </div>
    )
}

export default Vision
