import "./superheading_list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/update_super_heading/';

class Superheading_edit extends Component {


  constructor(props) {




    super(props);

    this.state = {
   
      handleResponse: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      page_heading: null,
      page_paragraph: null,

    };
  }

  componentDidMount() {
    const service_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit-super_heading/${service_id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('superheadingdiendin',data)
        this.setState({ service: data });
      });
  }




  handleInputChangedHeading(event) {
    this.setState({
      page_heading: event.target.value
    });
  }
  handleInputChangedParagraph(event) {
    this.setState({
      page_paragraph: event.target.value
    });
  }
 



  // handle change event of input file




  // handle click event of the upload button
  handleUpload = (e) => {
    const { page_heading, page_paragraph } = this.state;
    e.preventDefault();
    if (!page_paragraph) {
      this.setState({
        handleResponse: {
          isSuccess: false,
          message: "Please select image to upload."
        }
      });
      return false;
    }

    const formData = new FormData();

   
    formData.append('page_heading', page_heading);
    formData.append('page_paragraph', page_paragraph);

    const ser_id = window.location.href.split('/')[5]
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    

    axios({
      method: "post",
      url: BASE_URL + ser_id,
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




    const page_heading = this.props;
    const { handleResponse, imageUrl } = this.state;
    const chec = this;
    return (

      <div className="new">
        <Sidebar />

        <div className="newContainer">
          <Navbar />

          <div className="top">

            <h1>{this.props.title}</h1>
          </div>
          {this.state.service && this.state.service.map((user, index) => (
            <div className="bottom">
              
              <div className="right">

                <form >
                 

                  <div className="formInput" >
                    <label>page_heading</label>

                    <input type="text" key={index} name="page_heading" defaultValue={user.page_heading} placeholder=" title" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Paragraph</label>

                    <input type="text" key={index} name="page_paragraph" defaultValue={user.page_paragraph} placeholder=" paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
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

export default Superheading_edit;