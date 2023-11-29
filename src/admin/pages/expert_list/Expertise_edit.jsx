import "./expertise_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    const ex_id = window.location.href.split('/')[5] 
    fetch(`http://localhost:5000/edit-expertise/${ex_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data[0].heading)
        this.setState({ heading: data[0].heading });
        this.setState({ paragraph: data[0].paragraph });
        this.setState({ selectedFile: data[0].expert_image});
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
  
    const formData = new FormData();
    console.log("formData======>", formData);
    if (selectedFile) {
      if (selectedFile.name) {
        formData.append('expert_image',selectedFile,selectedFile.name);
      }    
    }  
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
    const { handleResponse, selectedFile, heading, paragraph } = this.state;
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
                  <div className="formInput">
                    <label htmlFor="file">
                      Image : <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" onChange={this.onChangeFile} />
                  </div>

                  <div className="formInput" >
                    <label>Expert Heading</label>

                    <input type="text" name="heading" defaultValue={heading} placeholder=" heading" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Description</label>
                    <textarea id="w3review"  name="page_link" defaultValue={paragraph} placeholder="history name" onChange={this.handleInputChangedParagraph.bind(this)} rows="4" cols="50"/>
                  </div>
                  <div className="formInput" >
                    {/* <label>Service paragraph</label> */}

                    {/* <input type="hidden" key={index} name="update_service" defaultValue={user.paragraph} placeholder="carousel paragraph" onChange={this.handleInputChangedParagraph.bind(this)} /> */}
                  </div>
                  
                  <button value="button" onClick={this.handleUpload} style={{ margin: '35px', height: 'auto', marginLeft:"-420px", padding: '5px'}}>Edit </button>
                  <ToastContainer />
                   </form>

              </div>
            </div>
         
        </div>

      </div>

    )

  }
}

export default Expertise_edit;