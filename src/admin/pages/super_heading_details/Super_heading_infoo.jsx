import "./super_heading_infoo.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
const BASE_URL = 'http://localhost:5000/add_super_heading_data';

class Super_heading_infoo extends Component {
constructor(props) {
  
  super(props);
  
  this.state = {
    selectedFile: null, // to store selected file
    handleResponse: null, // handle the API response
    imageUrl: null ,// to store uploaded image path
    page_heading:null,
    page_paragraph:null,
    page_link:null,
    
  };
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

handleInputChangedCount(event) {
  this.setState({
    page_link: event.target.value
  });
}

onChangeFile = event => {
  this.setState({
     selectedFile: event.target.files[0]
  });
};

handleUpload = (e) => {
  const { page_heading ,page_paragraph,page_link  } = this.state;
  console.log(this.state);
  e.preventDefault();
  // if (!selectedFile) {
  //   this.setState({
  //     handleResponse: {
  //       isSuccess: false,
  //       message: "Please select image to upload."
  //     }
  //   });
  //   return false;
  // }
  const formData = new FormData();
 
  // formData.append('home_header_image', selectedFile, selectedFile.name);
  formData.append('page_heading', page_heading);
  formData.append('page_paragraph', page_paragraph);
  formData.append('page_link',page_link);

  var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    axios({
      method: "post",
      url: BASE_URL ,
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
render(){
  const title=this.props;
  const { handleResponse, imageUrl } = this.state;
  const chec=this;
  return (
  
    <div className="new">
      <Sidebar/>
  
    <div className="newContainer">
      <Navbar/>
      <div className="top">
        <h1>{title.title}</h1>
      </div>
      <div className="bottom">
        
        <div className="right">
          <form>
         
            
            <div className="formInput" >
              <label>Title</label>
               
              <input type="text" name="page_heading" placeholder="Page_Heading" onChange={this.handleInputChangedHeading.bind(this)} />
            </div>
            <div className="formInput" >
              <label>Description</label>
               
              <input type="text" name="page_paragraph" placeholder="Page_Paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
            </div>

            <div className="formInput" >
              <label>Page_Link</label>
               
              <input type="text" name="page_link" placeholder="Page_link" onChange={this.handleInputChangedCount.bind(this)} />
            </div>
            
            <button value="button" onClick={this.handleUpload} style={{margin:'auto',height:'50px'}}>Upload </button>
            {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}
          </form>
        </div>
      </div>
      </div>
      </div>
      
  )
 
}
}

export default Super_heading_infoo;