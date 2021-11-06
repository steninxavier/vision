import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';


function Vision() {

    const[image,setImage]= useState(null)

      const imageSelector= (e)=>{
          console.log(e.target.value)
          setImage(e.target.value)
      }

       
    return (
        <div>
            <form  method="post" encType="multipart/form-data">
            <input type="file" placeholder="upload an image" onChange={imageSelector} id="image" required/>
            <Button variant="outline-success" type="submit" >UPLOAD</Button>
            {image}
            </form>
        </div>
    )
}

export default Vision
