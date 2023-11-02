import "./media.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
const BASE_URL = 'http://localhost:5000/post_media/';
 
class Media extends Component {
constructor(props) {
  
  super(props);
  
  this.state = {
    // selectedFile: null, // to store selected file
    handleResponse: null, // handle the API response
    link:null,
    icon:null,
  
    
  };
}

handleInputChangedHeading(event) {
  this.setState({
    link: event.target.value
  });
}

handleInputChangedParagraph(event) {
  this.setState({
    icon: event.target.value
  });
}


handleUpload = (e) => {
  const { link ,icon  } = this.state;
  console.log(this.state);
  e.preventDefault();
 
  const formData = new FormData();

  formData.append('link', link);
  formData.append('icon', icon);


  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);

  axios({
    method: "post",
    url: BASE_URL,
    data: json,
    headers: { "Content-Type": "application/json" },
  }).then(response => {

    this.setState({

      handleResponse: {
        isSuccess: response.status === 200,
        message: response.data.message
      },
      imageUrl: BASE_URL + response.data.url
    });
  }).catch(err => {
    alert(err.message);
  });

}
render(){
  const title=this.props;
  const { handleResponse, imageUrl } = this.state;
  const chec=this;
  return (
  
    <div className="new">
      <Sidebar/>
  
    <div className="newContainer">
      <Navbar/>
      <div className="top">
        <h1>{title.title}</h1>
      </div>
      <div className="bottom">
       
        <div className="right">
          <form>
          {/* <div className="formInput">
              <label htmlFor="file"> 
               Image : <DriveFolderUploadOutlined className="icon"/>
              </label>
              <input type="file" onChange={this.onChangeFile} />
            </div> */}
            <div className="formInput" >
              <label>Icons</label>
               
              <input type="text" name="icon" placeholder="Icon" onChange={this.handleInputChangedParagraph.bind(this)} />
            </div>
            
            <div className="formInput" >
              <label>Link</label>
               
              <input type="text" name="link" placeholder="link" onChange={this.handleInputChangedHeading.bind(this)} />
            </div>
            
            <button value="button" onClick={this.handleUpload} style={{margin:'auto',height:'50px'}}>Upload </button>
            {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}
          </form>
        </div>
      </div>
      </div>
      </div>
      
  )
 
}
}

export default Media;