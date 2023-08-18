import "./expertise_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/updateAnd/';

class Expertise_edit extends Component {


  constructor(props) {
 super(props);
    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      heading: null,
      paragraph: null,

    };
  }
  componentDidMount() {
    const carousel_id = window.location.href.split('/')[5] 
    fetch(`http://localhost:5000/edit-expertise/${carousel_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        // console.log('hii',data)
        this.setState({ books: data });
      });
  }
  handleInputChangedHeading(event) {
    this.setState({
      heading: event.target.value
    });
  }
  handleInputChangedParagraph(event) {
    this.setState({
      paragraph: event.target.value
    });
  }
  onChangeFile = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  // handle click event of the upload button
  handleUpload = (e) => {
    const { selectedFile, heading, paragraph } = this.state;
    console.log(this.state);
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
    formData.append('expert_image', selectedFile, selectedFile.name);
    formData.append('heading', heading);
    formData.append('paragraph', paragraph);
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
      data: {expert_image:selectedFile.name,heading:heading,paragraph:paragraph},
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
          {this.state.books && this.state.books.map((user, index) => (
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
                    <input type="file" onChange={this.onChangeFile} />
                  </div>

                  <div className="formInput" >
                    <label>Expert heading</label>

                    <input type="text" key={index} name="heading" defaultValue={user.heading} placeholder=" heading" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Expert paragraph</label>

                    <input type="text" key={index} name="paragraph" defaultValue={user.paragraph} placeholder=" paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
                  </div>
                  <div className="formInput" >
                    {/* <label>Service paragraph</label> */}

                    {/* <input type="hidden" key={index} name="update_service" defaultValue={user.paragraph} placeholder="carousel paragraph" onChange={this.handleInputChangedParagraph.bind(this)} /> */}
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

export default Expertise_edit;