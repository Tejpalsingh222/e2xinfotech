import "./jobs_upload.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
const BASE_URL = 'http://localhost:5000/add_jobs_upload/';
 
class Jobs_upload extends Component {
constructor(props) {
  
  super(props);

 
  
  this.state = {
    // selectedFile: null, // to store selected file
    handleResponse: null, // handle the API response
    imageUrl: null ,// to store uploaded image path
    title:null,
    jobtitle:null,
    joblocation:null,
    date:null,
    link:null,
    about_company:null,
    job_description:null,
    open_positions:null,
    skills_required:null,
    education:null,
    desirable_skills:null,
    experience:null,
  };
}

handleInputChangedTitle(event) {
  this.setState({
    title: event.target.value
  });
}

handleInputChangedJobTitle(event) {
  this.setState({
    jobtitle: event.target.value
  });
}

handleInputChangedjoblocation(event) {
  this.setState({
    joblocation: event.target.value
  });
}

handleInputChangedjobDate(event) {
  this.setState({
    date: event.target.value
  });
}

handleInputChangedjoblink(event) {
  this.setState({
    link: event.target.value
  });
}

handleInputChangedHeading(event) {
  this.setState({
    about_company: event.target.value
  });
}
handleInputChangedParagraph(event) {
  this.setState({
    job_description: event.target.value
  });
}

handleInputChangedIcons(event) {
  this.setState({
    open_positions: event.target.value
  });
}
handleInputChangedSkills(event) {
  this.setState({
    skills_required: event.target.value
  });
}

handleInputChangededucation(event) {
  this.setState({
    education: event.target.value
  });
}

handleInputChangeddesirableskills(event) {
  this.setState({
    desirable_skills: event.target.value
  });
}
handleInputChangedExperience(event) {
  this.setState({
    experience: event.target.value
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
  const  { title,jobtitle,joblocation,date,link,about_company ,job_description ,open_positions,skills_required,location,education,desirable_skills,experience } = this.state;
  console.log(this.state);
  e.preventDefault();
 
  const formData = new FormData();
 
  // formData.append('home_header_image', selectedFile, selectedFile.name);
  formData.append('title', title);
  formData.append('jobtitle', jobtitle);
  formData.append('joblocation',joblocation);
  formData.append('date',date);
  formData.append('link',link);

  formData.append('about_company', about_company);
  formData.append('description', job_description);
  formData.append('open_positions',open_positions);
  formData.append('skills_required',skills_required);
  formData.append('education',education);
  formData.append('desirable_skills',desirable_skills);
  formData.append('experience',experience);

  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);

  axios({
    method: "POST",
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
      <Sidebar
       sticky
       />
  
    <div className="newContainer">
      <Navbar/>
      <div className="top">
        <h1>{title.title}</h1>
      </div>
      <div className="bottom">
       
        <div className="right">
          <form>
          <div className="formInput" >
              <label>Title</label>
               
              <input type="text" name="title" placeholder="title" onChange={this.handleInputChangedTitle.bind(this)} />
            </div>
            <div className="formInput" >
              <label>Job Title</label>
               
              <input type="text" name="jobtitle" placeholder="jobtitle" onChange={this.handleInputChangedJobTitle.bind(this)} />
            </div>

            <div className="formInput" >
              <label>Job Location</label>
               
              <input type="text" name="joblocation" placeholder="joblocation" onChange={this.handleInputChangedjoblocation.bind(this)} />
            </div>

            <div className="formInput" >
              <label>Date</label>
               
              <input type="date" name="date" placeholder="date" onChange={this.handleInputChangedjobDate.bind(this)} />
            </div>
            
            <div className="formInput" >
              <label>Company</label>
               
              <input type="text" name="about_company" placeholder="about_company" onChange={this.handleInputChangedHeading.bind(this)} />
            </div>
            <div className="formInput" >
              <label>Description</label>
               
              <input type="text" name="job_description" placeholder="job_description" onChange={this.handleInputChangedParagraph.bind(this)} />
            </div>

            <div className="formInput" >
              <label>Positions</label>
               
              <input type="text" name="open_positions" placeholder="open_positions" onChange={this.handleInputChangedIcons.bind(this)} />
            </div>
            <div className="formInput" >
              <label>Skills</label>
               
              <input type="text" name="skills_required" placeholder="skills_required" onChange={this.handleInputChangedSkills.bind(this)} />
            </div>
            
            
            <div className="formInput" >
              <label>Education</label>
              <input type="text" name="education" placeholder="education" onChange={this.handleInputChangededucation.bind(this)} />
            </div> 
            
            <div className="formInput" >
              <label>Desirable Skills</label>
                <input type="text" name="desirable_skills" placeholder="desirable_skills" onChange={this.handleInputChangeddesirableskills.bind(this)} />
            </div>

            <div className="formInput" >
              <label>Experience</label>
                <input type="text" name="experience" placeholder="experience" onChange={this.handleInputChangedExperience.bind(this)} />
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

export default Jobs_upload;
