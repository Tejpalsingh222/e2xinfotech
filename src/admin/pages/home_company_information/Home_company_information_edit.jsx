import "./home_company_information_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/Company_info_update/';
const img='http://localhost:5000/uploads'

class Home_company_information_edit extends Component {


  constructor(props) {

    super(props);

    this.state = {
     
      handleResponse: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      title: null,
      description: null,
      icons:null,
     

    };
  }

  componentDidMount() {
    const about_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit_company_info/${about_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data)
        this.setState({ title: data[0].title});
        this.setState({ description: data[0].description });
        this.setState({icons:data[0].icons});
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
  handleInputChangedButton(event) {
    this.setState({
      icons: event.target.value
    });
  }



  // handle change event of input file




  // handle click event of the upload button
  handleUpload = (e) => {
    const { title, description, icons } = this.state;
    console.log(this.state);
    e.preventDefault();
    

    const formData = new FormData();


    formData.append('title', title);
    formData.append('description', description);
    formData.append('icons', icons);

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
    const head = this.props;
    const { handleResponse, title, description, icons} = this.state;
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
                  <div className="formInput" >
                    <label> Title</label>

                    <input type="text"  name="title" defaultValue={title} placeholder="title" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Description</label>

                    <input type="text" name="description" defaultValue={description} placeholder="description" onChange={this.handleInputChangedParagraph.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Icons</label>

                    <input type="text"  name="icons" defaultValue={icons} placeholder="icons" onChange={this.handleInputChangedButton.bind(this)} />
                  </div>
                  <button value="button" onClick={this.handleUpload} style={{ margin: 'auto', height: '45px', padding: '5px' }}>Edit </button>
                  {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}
                </form>

              </div>
            </div>
       
        </div>

      </div>

    )

  }
}

export default Home_company_information_edit;