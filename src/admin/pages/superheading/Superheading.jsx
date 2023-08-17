
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
const BASE_URL = 'http://localhost:5000/super_heading_post/';
 
class Superheading extends Component {
constructor(props) {
  
  super(props);
  
  this.state = {
   
    handleResponse: null, // handle the API response
    imageUrl: null ,// to store uploaded image path
    page_heading:null,
    page_paragraph:null,
    
  };
}


handleInputChangedHeading(event) {
  this.setState({
    page_heading: event.target.value
  });
}
handleInputChangedParagraph(event) {
  this.setState({
    page_paragraph: event.target.value
  });
}


// handle change event of input file




// handle click event of the upload button
handleUpload = (e) => {
  const {  page_heading ,page_paragraph  } = this.state;
  console.log(this.state);
  e.preventDefault();
  if (!page_heading) {
    this.setState({
      handleResponse: {
        isSuccess: false,
        message: "Please select image to upload."
      }
    });
    return false;
  }
  const formData = new FormData();
 
 
  formData.append('page_heading', page_heading);
  formData.append('page_paragraph', page_paragraph);

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
          
            
            <div className="formInput" >
              <label> page heading</label>
               
              <input type="text" name="page_heading" placeholder=" page_heading" onChange={this.handleInputChangedHeading.bind(this)} />
            </div>
            <div className="formInput" >
              <label>page paragraph</label>
               
              <input type="text" name="page_paragraph" placeholder=" page_paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
            </div>
            
            <button value="button" onClick={this.handleUpload} style={{margin:'auto',height:'50px'}}>Add </button>
            {handleResponse && <p style={{color: '#0f5132',backgroundColor: '#d1e7dd',borderColor: '#badbcc',borderRadius:'12px',padding:'15px'}} className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}
          </form>
        </div>
      </div>
      </div>
      </div>
      
  )
 
}
}

export default Superheading;