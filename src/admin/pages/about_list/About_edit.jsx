import "./about_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/update_about/';

class About_edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      title:null,
      description: null,

    };
  }

  componentDidMount() {
    const service_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit-about-data/${service_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data[0].service_title)
        this.setState({ title: data[0].title });
        this.setState({ description: data[0].description });
        this.setState({ selectedFile: data[0].image});
      });
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
    const { selectedFile,title, description } = this.state;
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

    const ser_id = window.location.href.split('/')[5]
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);


    axios({
      method: "post",
      url: BASE_URL + ser_id,
      data: formData,
    
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
    const { handleResponse, selectedFile,title,description } = this.state;
    console.log('steate',this.state);
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
                  <div className="formInput">
                    <label htmlFor="file">
                      Image : <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" onChange={this.onChangeFile} />
                  </div>

                  <div className="formInput" >
                    <label> Heading</label>

                    <input type="text" name="title" defaultValue={title} placeholder="heading" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>

                  <div className="formInput" >
                    <label>Description</label>
                    <textarea id="w3review"  name="page_link" defaultValue={description} placeholder="history name" onChange={this.handleInputChangedParagraph.bind(this)} rows="4" cols="50"/>
                    </div>
                  
                  <button value="button" onClick={this.handleUpload} style={{ margin: '60px', height: '45px', padding: '5px' }}>Edit </button>
                  <ToastContainer />
                    </form>

              </div>
            </div>
          
        </div>

      </div>

    )

  }
}

export default About_edit;