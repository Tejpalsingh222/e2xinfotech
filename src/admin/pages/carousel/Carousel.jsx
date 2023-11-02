import "./carousel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
const BASE_URL = 'http://localhost:5000/upload-avatar/';
 
class Carousel extends Component {
constructor(props) {
  
  super(props);
  
  this.state = {
    selectedFile: null, // to store selected file
    handleResponse: null, // handle the API response
    imageUrl: null ,// to store uploaded image path
    carousel_heading:null,
    carousel_paragraph:null,
    carousel_button_name:null,
  };
}


handleInputChangedHeading(event) {
  this.setState({
    carousel_heading: event.target.value
  });
}
handleInputChangedParagraph(event) {
  this.setState({
    carousel_paragraph: event.target.value
  });
}
handleInputChangedButton(event) {
  this.setState({
    carousel_button_name: event.target.value
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
  const { selectedFile ,carousel_heading ,carousel_paragraph ,carousel_button_name } = this.state;
  console.log(this.state);
  e.preventDefault();
 
  const formData = new FormData();
 
  // formData.append('dataFile', selectedFile, selectedFile.name);
  formData.append('carousel_heading', carousel_heading);
  formData.append('carousel_paragraph', carousel_paragraph);
  formData.append('carousel_button_name', carousel_button_name);
  console.log(formData);
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
          <div className="formInput">
              {/* <label htmlFor="file"> 
               Image : <DriveFolderUploadOutlined className="icon"/>
              </label>
              <input type="file" onChange={this.onChangeFile} /> */}
            </div>
            
            <div className="formInput" >
              <label>title </label>
               
              <input type="text" name="carousel_heading" placeholder="carousel heading" onChange={this.handleInputChangedHeading.bind(this)} />
            </div>
            <div className="formInput" >
              <label>description</label>
               
              <input type="text" name="carousel_paragraph" placeholder="carousel paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
            </div>
            <div className="formInput" >
              <label>counter</label>
               
              <input type="text" name="carousel_paragraph" placeholder="carousel paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
            </div>


            {/* <div className="formInput" >
              <label>carousel button name</label>
               
              <input type="text" name="carousel_button_name" placeholder="carousel button name" onChange={this.handleInputChangedButton.bind(this)}/>
            </div> */}
            <button value="button" onClick={this.handleUpload} style={{margin:'auto',height:'50px'}}>Upload</button>
            {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}
          </form>
        </div>
      </div>
      </div>
      </div>
      
  )
 
}
}

export default Carousel;