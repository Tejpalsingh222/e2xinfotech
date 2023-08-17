import "./pdd.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
const BASE_URL = 'http://localhost:5000/post_pdd/';
 
class Pdd extends Component {
constructor(props) {
  
  super(props);
  
  this.state = {
    selectedFile: null, // to store selected file
    handleResponse: null, // handle the API response
    imageUrl: null ,// to store uploaded image path
    pdd_heading:null,
    pdd_paragraph:null,
    
  };
}


handleInputChangedHeading(event) {
  this.setState({
    pdd_heading: event.target.value
  });
}
handleInputChangedParagraph(event) {
  this.setState({
    pdd_paragraph: event.target.value
  });
}

onChangeFile = event => {
  this.setState({
     selectedFile: event.target.files[0]
  });
};

// handle change event of input file




// handle click event of the upload button
handleUpload = (e) => {
  const { selectedFile ,pdd_heading ,pdd_paragraph  } = this.state;
  console.log(this.state);
  e.preventDefault();
  if (!selectedFile) {
    this.setState({
      handleResponse: {
        isSuccess: false,
        message: "Please select image to upload."
      }
    });
    return false;
  }
  const formData = new FormData();
 
  formData.append('pdd_image', selectedFile, selectedFile.name);
  formData.append('pdd_heading', pdd_heading);
  formData.append('pdd_paragraph', pdd_paragraph);

  
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
        <div className="left">
          <img ></img>
         </div>
        <div className="right">
          <form>
          <div className="formInput">
              <label htmlFor="file"> 
               Image : <DriveFolderUploadOutlined className="icon"/>
              </label>
              <input type="file" onChange={this.onChangeFile} />
            </div>
            
            <div className="formInput" >
              <label> Pdd Heading</label>
               
              <input type="text" name="pdd_heading" placeholder=" heading" onChange={this.handleInputChangedHeading.bind(this)} />
            </div>
            <div className="formInput" >
              <label>Pdd Paragraph</label>
               
              <input type="text" name="pdd_paragraph" placeholder=" paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
            </div>
            
            <button value="button" onClick={this.handleUpload} style={{margin:'auto',height:'50px'}}>upload </button>
            {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}
          </form>
        </div>
      </div>
      </div>
      </div>
      
  )
 
}
}

export default Pdd;