import "./navbar_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/update_navbar/';


class Navbar_edit extends Component {


  constructor(props) {
    super(props);
    this.state = {
     
      handleResponse: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      page_name: null,
      routes: null,
      page_link:null,
     

    };
  }

  componentDidMount() {
    const id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/getnavbardata/${id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data)
        this.setState({ page_name: data[0].page_name});
        this.setState({ routes: data[0].routes });
        this.setState({page_link:data[0].page_link});
      });
  }




  handleInputChangedHeading(event) {
    this.setState({
      page_name: event.target.value
    });
  }
  handleInputChangedParagraph(event) {
    this.setState({
      routes: event.target.value
    });
  }
  handleInputChangedButton(event) {
    this.setState({
      page_link: event.target.value
    });
  }
  // handle click event of the upload button
  handleUpload = (e) => {
    const { page_name, routes, page_link } = this.state;
    console.log(this.state);
    e.preventDefault();
    

    const formData = new FormData();


    formData.append('page_name', page_name);
    formData.append('routes', routes);
    formData.append('page_link', page_link);

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
    const { handleResponse,page_name,routes ,page_link} = this.state;
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
                    <label>Name</label>

                    <input type="text"  name="page_name" defaultValue={page_name} placeholder="title" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Routes</label>

                    <input type="text" name="routes" defaultValue={routes} placeholder="description" onChange={this.handleInputChangedParagraph.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Link</label>

                    <input type="text" name="page_link" defaultValue={page_link} placeholder="history name" onChange={this.handleInputChangedButton.bind(this)} />
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

export default Navbar_edit;