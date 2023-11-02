import "./super_heading_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
const BASE_URL = 'http://localhost:5000/update_super_heading/';


class Super_heading_edit extends Component {


  constructor(props) {
    super(props);
    this.state = {
     
      handleResponse: null, // handle the API response
      imageUrl: null,// to store uploaded image path
      page_heading: null,
      page_paragraph: null,
      page_link:null,
     

    };
  }

  componentDidMount() {
    const id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/getsuperheaddata/${id}`)
      .then(response => response.json()).then(json => json.data)
      .then(data => {
        console.log('hii',data)
        this.setState({ page_heading: data[0].page_heading});
        this.setState({ page_paragraph: data[0].page_paragraph });
        this.setState({page_link:data[0].page_link});
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
  handleInputChangedButton(event) {
    this.setState({
      page_link: event.target.value
    });
  }
  // handle click event of the upload button
  handleUpload = (e) => {
    const { page_heading, page_paragraph, page_link } = this.state;
    console.log(this.state);
    e.preventDefault();
    

    const formData = new FormData();


    formData.append('page_heading', page_heading);
    formData.append('page_paragraph', page_paragraph);
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
    const { handleResponse,page_heading,page_paragraph ,page_link} = this.state;
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
                    <label>Heading</label>

                    <input type="text"  name="page_heading" defaultValue={page_heading} placeholder="title" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Paragraph</label>

                    <input type="text" name="page_paragraph" defaultValue={page_paragraph} placeholder="description" onChange={this.handleInputChangedParagraph.bind(this)} />
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

export default Super_heading_edit;