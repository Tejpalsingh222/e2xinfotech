import "./contact.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
const BASE_URL = 'http://localhost:5000/post_contact/';
 
class contact extends Component {
constructor(props) {
  
  super(props);
  
  this.state = {
    selectedFile: null, // to store selected file
    handleResponse: null, // handle the API response
    icon: null ,// to store uploaded image path
   content:null,
    branch:null,
  };
}
handleInputChangedHeading(event) {
  this.setState({
    content: event.target.value
  });
}
handleInputChangedParagraph(event) {
  this.setState({
    icon: event.target.value
  });
}
handleInputChangedbranch(event) {
  this.setState({
    branch: event.target.value
  });
}

onChangeFile = event => {
  this.setState({
     selectedFile: event.target.files[0]
  });
};


// handle click event of the upload button
handleUpload = (e) => {
  const { content ,icon, branch } = this.state;
  console.log(this.state);
  e.preventDefault();
  // if (!selectedFile) {
  //   this.setState({
  //     handleResponse: {
  //       isSuccess: false,
  //       message: "Please select image to upload."
  //     }
  //   });
  //   return false;
  // }
  const formData = new FormData();
 
  formData.append('content', content);
  formData.append('icon', icon);
  formData.append('branch', branch);

  
  axios.post(BASE_URL, formData).then(response => {
   
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
              <label>Contact Heading</label>
               
              <input type="text" name="content" placeholder=" content" onChange={this.handleInputChangedHeading.bind(this)} />
            </div>
            <div className="formInput" >
              <label>Icon</label>
               
              <input type="text" name="icon" placeholder=" icon" onChange={this.handleInputChangedParagraph.bind(this)} />
            </div>
            <div className="formInput" >
              <label>Branch </label>
               
              <input type="text" name="branch" placeholder=" branch" onChange={this.handleInputChangedbranch.bind(this)} />
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

export default contact;