import "./blog_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/update_blog/';

class Blog_edit extends Component {


  constructor(props) {
 super(props);
    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      image: null,// to store uploaded image path
      title: null,
      description: null,

    };
  }
  componentDidMount() {
    const carousel_id = window.location.href.split('/')[5] 
    fetch(`http://localhost:5000/edit-blog/${carousel_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data)
        this.setState({ title: data[0].title});
        this.setState({ description: data[0].description });
        this.setState({ selectedFile: data[0].image});
      });
  }
  handleInputChangedtitle(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleInputChangeddescription(event) {
    this.setState({
      description: event.target.value
    });
  }
  onChangeFile = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  // handle click event of the upload button
  handleUpload = (e) => {
    const { selectedFile, title, description } = this.state;
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
    const id = window.location.href.split('/')[5]
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    console.log('jsonkd',json)


    axios({
      method: "post",
      url: BASE_URL + id,
      data: formData,
    }).then(response => {

      this.setState({

        handleResponse: {
          isSuccess: response.status === 200,
          message: response.data.message
        },
        image: BASE_URL + response.data.url
      });
    }).catch(err => {
      alert(err.message);
    });

  }
  render() {

    const head = this.props;
    const { handleResponse, title,description,image } = this.state;
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
                  <div className="formInput">
                    <label htmlFor="file">
                      Image : <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" onChange={this.onChangeFile} />
                  </div>

                  <div className="formInput" >
                    <label>Expert title</label>

                    <input type="text"  name="title" defaultValue={title} placeholder=" title" onChange={this.handleInputChangedtitle.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Expert description</label>

                    <input type="text"name="description" defaultValue={description} placeholder=" description" onChange={this.handleInputChangeddescription.bind(this)} />
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

export default Blog_edit;