import "./pdd_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/pdd_update/';

class Pdd_edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      pdd_image: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      pdd_heading: null,
      pdd_paragraph: null,

    };
  }

  componentDidMount() {
    const service_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit-pdd/${service_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data)
        this.setState({ pdd_heading: data[0].pdd_heading });
        this.setState({ pdd_image: data[0].pdd_image });
        this.setState({ pdd_paragraph: data[0].pdd_paragraph });
      });
  }
  handleInputChangedHeading(event) {
    this.setState({
      pdd_heading: event.target.value
    });
  }
  handleInputChangedParagraph(event) {
    this.setState({
      pdd_paragraph: event.target.value
    });
  }
 

  onChangeFile = event => {
    this.setState({
      pdd_image: event.target.value
    });
  };

  // handle change event of input file

  // handle click event of the upload button
  handleUpload = (e) => {
    const { pdd_image, pdd_heading, pdd_paragraph } = this.state;
    console.log(this.state);
    e.preventDefault();
 

    const formData = new FormData();

    formData.append('pdd_image', pdd_image);
    formData.append('pdd_heading', pdd_heading);
    formData.append('pdd_paragraph', pdd_paragraph);

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
    const { handleResponse, pdd_heading,pdd_paragraph,pdd_image } = this.state;
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
                  {/* <div className="formInput">
                    <label htmlFor="file">
                      Image : <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" key={index} onChange={this.onChangeFile} />
                  </div> */}
                   <div className="formInput" >
                    <label> Icons</label>

                    <input type="text" name="pdd_image" defaultValue={pdd_image} placeholder=" icon" onChange={this.onChangeFile.bind(this)} />
                  </div>

                  <div className="formInput" >
                    <label>Heading</label>

                    <input type="text" name="pdd_heading" defaultValue={pdd_heading} placeholder=" heading" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Description</label>
                    <textarea id="w3review"  name="page_link" defaultValue={pdd_paragraph} placeholder="history name" onChange={this.handleInputChangedParagraph.bind(this)} rows="4" cols="50"/>
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

export default Pdd_edit;

