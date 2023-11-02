import "./home_page_header_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/update_home_header_page/';

class Home_page_header_edit extends Component {


  constructor(props) {
   super(props);

    this.state = {
      selectedFile: null,
      handleResponse: null,
      imageUrl: null,
      title: null,
      description: null,

    };
  }

  componentDidMount() {
    const about_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit-home_page_config/${about_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data)
        this.setState({ title: data[0].title});
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

  // handle change event of input file




  // handle click event of the upload button
  handleUpload = (e) => {
    const { selectedFile, title, description } = this.state;
    console.log(this.state);
    e.preventDefault();
    

    const formData = new FormData();
    console.log("formData======>", formData);
    if (selectedFile) {
      if (selectedFile.name) {
        formData.append('home_image',selectedFile,selectedFile.name);
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
    console.log('flow',json)

    axios({
      method: "post",
      url: BASE_URL + ser_id,
      data: formData,

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

    const head = this.props;
    const { handleResponse, selectedFile, title,description} = this.state;
    console.log('hi ram ',selectedFile);
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
                    <label>Title</label>

                    <input type="text" name="title" defaultValue={title} placeholder="fill discription" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Description</label>

                    <input type="text" name="description" defaultValue={description} placeholder=" desc" onChange={this.handleInputChangedParagraph.bind(this)} />
                  </div>

                  <button value="button" onClick={this.handleUpload} style={{ margin: 'auto', height: '45px', padding: '5px' }}> Edit </button>
                  {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}
                </form>

              </div>
            </div>
  
        </div>

      </div>

    )

  }
}

export default Home_page_header_edit;