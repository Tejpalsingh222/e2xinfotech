import "./cardcarousel_temp_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/Cardtemp_update/';

class Cardcarousel_temp_edit extends Component {


 
  constructor(props) {




    super(props);

    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      title: null,
      description: null,

    };
  }

  componentDidMount() {
    const service_id = window.location.href.split('/')[5]
    console.log('susri',service_id);
    fetch(`http://localhost:5000/edit-Cardtemp/${service_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('kitanapayara',data)
        this.setState({ service: data });
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
    e.preventDefault();
    if (!selectedFile) {
      this.setState({
        handleResponse: {
          isSuccess: false,
          message: "Please select image to upload."
        }
      });
      return false;
    }

    const formData = new FormData();

    formData.append('card_temp_image', selectedFile, selectedFile.name);
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
                <img src={'http://localhost:5000/uploads/${item.carousel_image}'}></img>
              </div>
              <div className="right">

                <form >
                  <div className="formInput">
                    <label htmlFor="file">
                      Image : <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" key={index} onChange={this.onChangeFile} />
                  </div>

                  <div className="formInput" >
                    <label>Title</label>

                    <input type="text" key={index} name="title" defaultValue={user.title} placeholder=" title" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Paragraph</label>

                    <input type="text" key={index} name="description" defaultValue={user.description} placeholder=" paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
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

export default Cardcarousel_temp_edit;