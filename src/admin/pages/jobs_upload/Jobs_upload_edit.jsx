import "./jobs_upload_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/Jobs_upload_update/';
const img='http://localhost:5000/uploads'

class Jobs_upload_edit extends Component {


  constructor(props) {

    super(props);

    this.state = {
     
      handleResponse: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      title:null,
      jobtitle:null,
      joblocation:null,
      date:null,
      about_company:null,
    job_description:null,
    open_positions:null,
    skills_required:null,

    education:null,
    desirable_skills:null,
    experience:null,
    };
  }

  componentDidMount() {
    const about_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit_jobs_upload/${about_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data)
        this.setState({ title: data[0].title});
        this.setState({jobtitle:data[0].jobtitle})
        this.setState({joblocation:data[0].joblocation})
        this.setState({date:data[0].date})
        this.setState({ about_company: data[0].about_company});
        this.setState({ job_description: data[0].job_description });
        this.setState({open_positions:data[0].open_positions});
        this.setState({skills_required:data[0].skills_required});
        this.setState({education:data[0].education});
        this.setState({desirable_skills:data[0].desirable_skills});
        this.setState({experience:data[0].experience});
      });
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
  handleInputChangedButton(event) {
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

  // handle click event of the upload button
  handleUpload = (e) => {
    const  { title,jobtitle,joblocation,date,about_company ,job_description ,open_positions,skills_required,education,desirable_skills,experience } = this.state;
    console.log(this.state);
    e.preventDefault();
    

    const formData = new FormData();

    formData.append('title', title);
    formData.append('jobtitle', jobtitle);
    formData.append('joblocation',joblocation);
    formData.append('date',date);

    formData.append('about_company', about_company);
    formData.append('job_description', job_description);
    formData.append('open_positions', open_positions);
    formData.append('skills_required',skills_required);
 
    formData.append('education',education);
    formData.append('desirable_skills',desirable_skills);
    formData.append('experience',experience);
  
    const carousel_id = window.location.href.split('/')[5]
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);


    axios({
      method: "post",
      url: BASE_URL + carousel_id,
      data: json,
      headers: { "Content-Type": "application/json" },
    }).then(response => {

      toast.success("Update Successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }).catch(err => {
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  }
  render() {
    const head = this.props;
    const { handleResponse,title,jobtitle,joblocation,date,about_company, job_description, open_positions,skills_required,education,desirable_skills,experience} = this.state;
    const chec = this;
    return (

      <div className="new">
        <Sidebar />

        <div className="newContainer">
          <Navbar />

          <div className="top">

            <h1>{head.title}</h1>
          </div>
         
            <div className="bottom">
            
              <div className="right">
                <form >
                <div className="formInput" >
                    <label> Title</label>

                    <input type="text"  name="title" defaultValue={title} placeholder="title" onChange={this.handleInputChangedTitle.bind(this)} />
                  </div>
                  <div className="formInput" >
              <label>Job Title</label>
               
              <input type="text" name="jobtitle"defaultValue={jobtitle}  onChange={this.handleInputChangedJobTitle.bind(this)} />
            </div>

            <div className="formInput" >
              <label>Job Location</label>
               
              <input type="text" name="joblocation" defaultValue={joblocation} onChange={this.handleInputChangedjoblocation.bind(this)} />
            </div>

            <div className="formInput" >
              <label>Date</label>
               
              <input type="text" name="date" defaultValue={date}  onChange={this.handleInputChangedjobDate.bind(this)} />
            </div>

                  <div className="formInput" >
                    <label>Heading</label>

                    <textarea id="w3review"  name="page_link"  defaultValue={about_company} placeholder="title" onChange={this.handleInputChangedHeading.bind(this)}  rows="4" cols="50" />
                  </div>
                  <div className="formInput" >
                    <label>Description</label>
                    <textarea id="w3review"  name="page_link" defaultValue={job_description} placeholder="history name" onChange={this.handleInputChangedParagraph.bind(this)} rows="4" cols="50"/>
                  </div>

                  <div className="formInput" >
              <label>Skills</label>
               
              <textarea id="w3review"  name="page_link" defaultValue={skills_required} placeholder="skills_required" onChange={this.handleInputChangedSkills.bind(this)} rows="4" cols="50"/>
            </div>
            
            
            
            <div className="formInput" >
              <label>Education</label>
              <textarea id="w3review"  name="page_link" defaultValue={education} placeholder="education" onChange={this.handleInputChangededucation.bind(this)} rows="4" cols="50" />
            </div> 
            
            <div className="formInput" >
              <label>Desirable Skills</label>
                 <textarea id="w3review"  name="page_link" defaultValue={desirable_skills} placeholder="desirable_skills" onChange={this.handleInputChangeddesirableskills.bind(this)}  rows="4" cols="50" />
            </div>

             <div className="formInput" >
                    <label>Positions</label>

                    <input type="text"  name="open_positions" defaultValue={open_positions} placeholder="icons" onChange={this.handleInputChangedButton.bind(this)} />
                  </div>

            <div className="formInput" >
              <label>Experience</label>
             <input type="text" name="Experience"  defaultValue={experience} placeholder="experience" onChange={this.handleInputChangedExperience.bind(this)} />
            </div>
            
            <button value="button" onClick={this.handleUpload} > Edit </button>
                  <ToastContainer />
                    </form>

              </div>
            </div>
       
        </div>

      </div>

    )

  }
}

export default Jobs_upload_edit;