import "./home_company_information_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
                    <label>Icons</label>

                    <input type="text"  name="icons" defaultValue={icons} placeholder="icons" onChange={this.handleInputChangedButton.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Description</label>
                    <textarea id="w3review"  name="page_link" defaultValue={description} placeholder="history name" onChange={this.handleInputChangedParagraph.bind(this)} rows="4" cols="50"/>
                    </div>
                  <button value="button" onClick={this.handleUpload} style={{ margin: "60px", height: 'auto', padding: '5px' }}>Edit </button>
                  <ToastContainer />
                </form>
              </div>
            </div>
       
        </div>

      </div>

    )

  }
}

export default Home_company_information_edit;