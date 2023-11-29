import "./carousel_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/update_carousel/';
const img='http://localhost:5000/uploads'

class Carousel_edit extends Component {


  constructor(props) {


    super(props);

    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      carousel_heading: null,
      carousel_paragraph: null,
      carousel_button_name: null,

    };
  }

  componentDidMount() {
    const carousel_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/geteditdata/${carousel_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        // console.log('hii',data)
        this.setState({ books: data });
      });
  }




  handleInputChangedHeading(event) {
    this.setState({
      carousel_heading: event.target.value
    });
  }
  handleInputChangedParagraph(event) {
    this.setState({
      carousel_paragraph: event.target.value
    });
  }
  handleInputChangedButton(event) {
    this.setState({
      carousel_button_name: event.target.value
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
    const { selectedFile, carousel_heading, carousel_paragraph, carousel_button_name } = this.state;
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

    formData.append('dataFile', selectedFile, selectedFile.name);
    formData.append('carousel_heading', carousel_heading);
    formData.append('carousel_paragraph', carousel_paragraph);
    formData.append('carousel_button_name', carousel_button_name);

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
  
              <div className="right">

                <form >
                  <div className="formInput">
                    <label htmlFor="file">
                      Image : <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" key={index}  onChange={this.onChangeFile} />
                  </div>

                  <div className="formInput" >
                    <label>carousel heading</label>

                    <input type="text" key={index} name="carousel_heading" defaultValue={user.carousel_heading} placeholder="carousel heading" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>carousel paragraph</label>

                    <input type="text" key={index} name="carousel_paragraph" defaultValue={user.carousel_paragraph} placeholder="carousel paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>carousel button name</label>

                    <input type="text" key={index} name="carousel_button_name" defaultValue={user.carousel_button_name} placeholder="carousel button name" onChange={this.handleInputChangedButton.bind(this)} />
                  </div>
                  <button value="button" onClick={this.handleUpload} style={{ margin: '60px', height: '45px', padding: '5px' }}>edit </button>
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

export default Carousel_edit;