import "./team.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
const BASE_URL = 'http://localhost:5000/team-file/';
 
class Team extends Component {
constructor(props) {
  
  super(props);
  
 
  this.state = {
    selectedFile: null, // to store selected file
    handleResponse: null, // handle the API response
    imageUrl: null,// to store uploaded image path
    excutive_title: null,
    excutive_intro: null,
    team_position:null,
    
  };
}


handleInputChangedHeading(event) {
  this.setState({
    excutive_title: event.target.value
  });
}
handleInputChangedParagraph(event) {
  this.setState({
    excutive_intro: event.target.value
  });
}

handleInputChangedposition(event) {
  this.setState({
    team_position: event.target.value
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
  const { selectedFile ,excutive_title, excutive_intro ,team_position} = this.state;
  console.log(this.state);
  e.preventDefault();
 
  const formData = new FormData();
  console.log("formData======>", formData);
  if (selectedFile) {
    if (selectedFile.name) {
      formData.append('team_image',selectedFile,selectedFile.name);
    }    
  } 
 
  formData.append('excutive_title', excutive_title);
  formData.append('excutive_intro', excutive_intro);
  formData.append('team_position',team_position);

  
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
              <label>Excutive_Title</label>
               
              <input type="text" name="excutive_title" placeholder="team heading" onChange={this.handleInputChangedHeading.bind(this)} />
            </div>
            <div className="formInput" >
              <label>Team_Position</label>

                <input type="text" name="team_position" placeholder="heading" onChange={this.handleInputChangedposition.bind(this)} />
            </div>
            <div className="formInput" >
              <label>excutive_intro</label>
               
              <input type="text" name="excutive_intro" placeholder="paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
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

export default Team;