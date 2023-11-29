import "./media_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/media_update/';

class media_edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      // pdd_image: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      link: null,
      icon: null,

    };
  }

  componentDidMount() {
    const service_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit-media/${service_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data)
        this.setState({ link: data[0].link });
        this.setState({ icon: data[0].icon });
      });
  }
  handleInputChangedHeading(event) {
    this.setState({
      link: event.target.value
    });
  }
  handleInputChangedParagraph(event) {
    this.setState({
      icon: event.target.value
    });
  }
 

  // onChangeFile = event => {
  //   this.setState({
  //     pdd_image: event.target.value
  //   });
  // };

  // handle change event of input file

  // handle click event of the upload button
  handleUpload = (e) => {
    const { link, icon } = this.state;
    console.log(this.state);
    e.preventDefault();
 

    const formData = new FormData();

    formData.append('link', link);
    formData.append('icon', icon);

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
    const title = this.props;
    const { handleResponse, link,icon } = this.state;
    const chec = this;
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
                  <div className="formInput" >
                    <label>Links</label>

                    <input type="text" name="link" defaultValue={link} placeholder="link" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Icons</label>

                    <input type="text" name="icon" defaultValue={icon} placeholder="icon" onChange={this.handleInputChangedParagraph.bind(this)} />
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

export default media_edit;

