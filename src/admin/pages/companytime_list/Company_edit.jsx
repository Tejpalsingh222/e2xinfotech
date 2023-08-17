import "./company_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/update_company_buss/';

class Company_edit extends Component {


  constructor(props) {




    super(props);

    this.state = {
    
      imageUrl: null,// to store uploaded image path
      year_in_bussiness: null,
      projects: null,
      happy_users: null,
      expert_team_member: null,

    };
  }

  componentDidMount() {
    const service_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit-company/${service_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        // console.log('hii',data)
        this.setState({ service: data });
      });
  }




  handleInputChangedyear_in_bussiness(event) {
    this.setState({
      year_in_bussiness: event.target.value
    });
  }
  handleInputChangedprojects(event) {
    this.setState({
      projects: event.target.value
    });
  }
  handleInputChangedhappy_users(event) {
    this.setState({
      happy_users: event.target.value
    });
  }
  handleInputChangedexpert(event) {
    this.setState({
      expert_team_member: event.target.value
    });
  }
 

 

  // handle change event of input file




  // handle click event of the upload button
  handleUpload = (e) => {
    const {  year_in_bussiness, projects,happy_users,expert_team_member } = this.state;
  
    e.preventDefault();
    
   const formData = new FormData();

    formData.append('year_in_bussiness', year_in_bussiness);
    formData.append('projects', projects);
    formData.append('happy_users', happy_users);
    formData.append('expert_team_member', expert_team_member);

    const ser_id = window.location.href.split('/')[5]
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);


    axios({
      method: "post",
      url: BASE_URL + ser_id,
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
  render() {




    const title = this.props;
    const { handleResponse, imageUrl } = this.state;
    const chec = this;
    return (

      <div className="new">
        <Sidebar />

        <div className="newContainer">
          <Navbar />

          <div className="top">

            <h1>{title.title}</h1>
          </div>
          {this.state.service && this.state.service.map((user, index) => (
            <div className="bottom">
              <div className="left">
                {/* <img src={'http://localhost:5000/uploads/${item.carousel_image}'}></img> */}
              </div>
              <div className="right">

                <form >
                

                  <div className="formInput" >
                    <label>Company years</label>

                    <input type="date" key={index} name="year_in_bussiness"  defaultValue={user.year_in_bussiness} placeholder="year" onChange={this.handleInputChangedyear_in_bussiness.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>No of Project </label>

                    <input type="text" key={index} name="projects" defaultValue={user.projects} placeholder="no of projects" onChange={this.handleInputChangedprojects.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Happy users</label>

                    <input type="text" key={index} name="happy_users" defaultValue={user.happy_users} placeholder="no of happy users" onChange={this.handleInputChangedhappy_users.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Expert Team Member</label>

                    <input type="text" key={index} name="expert_team_member" defaultValue={user.expert_team_member} placeholder="no. of TM" onChange={this.handleInputChangedexpert.bind(this)} />
                  </div>
                  
                  <button value="button" onClick={this.handleUpload} style={{ margin: 'auto', height: '45px', padding: '5px' }}>edit </button>
                  {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}
                </form>

              </div>
            </div>
          ))}
        </div>

      </div>

    )

  }
}

export default Company_edit;