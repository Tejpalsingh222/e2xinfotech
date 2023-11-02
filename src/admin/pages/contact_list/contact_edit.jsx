import "./contact_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/contact_update/';

class Pdd_edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
     content: null,
    icon:null,
    branch:null,
    };
  }

  componentDidMount() {
    const service_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit-contact/${service_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data)
        this.setState({ content: data[0].content});
        this.setState({ icon: data[0].icon });
        this.setState({branch:data[0].branch});
      });
  }
  handleInputChangedHeading(event) {
    this.setState({
      content: event.target.value
    });
  }
  handleInputChangedParagraph(event) {
    this.setState({
      icon: event.target.value
    });
  }
  handleInputChangedbranch(event) {
    this.setState({
      branch: event.target.value
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
    const { branch, content, icon } = this.state;
    console.log(this.state);
    e.preventDefault();
 

    const formData = new FormData();

    formData.append('branch',branch);
    formData.append('content', content);
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
    const { handleResponse,  branch, content, icon } = this.state;
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
                    <label>Icon</label>

                    <input type="text"  name="icon" defaultValue={icon} placeholder=" icon" onChange={this.handleInputChangedParagraph.bind(this)} />
                  </div>

                  <div className="formInput" >
                    <label>Content</label>

                    <input type="text"  name="content" defaultValue={content} placeholder="content" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Branch</label>

                    <input type="text"  name="branch" defaultValue={branch} placeholder=" paragraph" onChange={this. handleInputChangedbranch.bind(this)} />
                  </div>
                  
                  <button value="button" onClick={this.handleUpload} style={{ margin: 'auto', height: '45px', padding: '5px' }}>edit </button>
                  {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}
                </form>

              </div>
            </div>
       
        </div>

      </div>

    )

  }
}

export default Pdd_edit;