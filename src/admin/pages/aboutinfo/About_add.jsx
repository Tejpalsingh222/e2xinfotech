import "./about_add.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from 'axios';
import React, { Component } from 'react';
const BASE_URL = 'http://localhost:5000/upload-about-file/';

class About_add extends Component {
  constructor(props) {
  
    super(props);
    
    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null ,// to store uploaded image path
      title:null,
      description:null,
      
    };
  }
  
  
  handleInputChangedHeading(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleInputChangedParagraph(event) {
    this.setState({
      description: event.target.value
    });
  }
  
  onChangeFile = event => {
    this.setState({
       selectedFile: event.target.files[0]
    });
  };

  handleUpload = (e) => {
    const { selectedFile ,title ,description  } = this.state;
    console.log(this.state);
    e.preventDefault();
  
     const formData = new FormData();
    console.log("formData======>", formData);
    if (selectedFile) {
      if (selectedFile.name) {
        formData.append('image',selectedFile,selectedFile.name);
      }    
    } 
    formData.append('title', title);
    formData.append('description', description);
  
    
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
                <label htmlFor="file"> 
                 Image : <DriveFolderUploadOutlined className="icon"/>
                </label>
                <input type="file" onChange={this.onChangeFile} />
              </div>
              
              <div className="formInput" >
                <label>Title</label>
                 
                <input type="text" name="title" placeholder="heading" onChange={this.handleInputChangedHeading.bind(this)} />
              </div>
              <div className="formInput" >
                <label> Paragraph</label> 
                <input type="text" name="description" placeholder="Description" onChange={this.handleInputChangedParagraph.bind(this)} />
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
  

export default About_add;