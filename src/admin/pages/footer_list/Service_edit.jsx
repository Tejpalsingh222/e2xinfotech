import "./service_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { useState } from "react";
import axios from 'axios';
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/update_service/';

class Service_edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      service_title:null,
      service_para: null,

    };
  }

  componentDidMount() {
    const service_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit-service-data/${service_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data[0].service_title)
        this.setState({ service_title: data[0].service_title });
        this.setState({ service_para: data[0].service_para });
        this.setState({ selectedFile: data[0].image});
      });
  }

  handleInputChangedHeading(event) {
    this.setState({
      service_title: event.target.value
    });
  }
  handleInputChangedParagraph(event) {
    this.setState({
      service_para: event.target.value
    });
  }
 

  onChangeFile = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleUpload = (e) => {
    const { selectedFile, service_title, service_para } = this.state;
    console.log(this.state);
    e.preventDefault();

    const formData = new FormData();
    console.log("formData======>", formData);
    if (selectedFile) {
      if (selectedFile.name) {
        formData.append('service_image',selectedFile,selectedFile.name);
      }    
    }   
    formData.append('service_title', service_title);
    formData.append('service_para', service_para);

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


    const title = this.props;
    const { handleResponse, selectedFile, service_title,service_para } = this.state;
    console.log('steate',this.state);
    return (

      <div className="new">
        <Sidebar />

        <div className="newContainer">
          <Navbar />

          <div className="top">

            <h1>{title.title}</h1>
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
                    <label>Service Heading</label>

                    <input type="text" name="service_title" defaultValue={service_title} placeholder="carousel heading" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label> Description</label>
                    <textarea id="w3review"  name="page_link" defaultValue={service_para} placeholder="history name" onChange={this.handleInputChangedParagraph.bind(this)} rows="4" cols="50"/>
                  </div>
                  <button value="button" onClick={this.handleUpload} style={{ margin: '25px', height: 'auto', padding: '5px' }}>Edit </button>
                  <ToastContainer />
                </form>

              </div>
            </div>
          
        </div>

      </div>

    )

  }
}

export default Service_edit;