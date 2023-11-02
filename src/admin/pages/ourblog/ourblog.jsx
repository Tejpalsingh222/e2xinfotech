import "./ourblog.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Editor } from '@tinymce/tinymce-react'
import { Box, Button } from '@mui/material'
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import React, { Component } from 'react';
import TinyMCE from "../Main_editor/Main_editor_list";

const BASE_URL = 'http://localhost:5000/upload-blog-file/';
 
class ourblog extends Component {
constructor(props) {
  
  super(props);

  this.state = {
    selectedFile: null, // to store selected file
    handleResponse: null, // handle the API response
    imageUrl: null ,// to store uploaded image path
    blog_title:null,
    blog_para:null,
    value:null,
  };
}


handleInputChangedHeading(event) {
  this.setState({
    blog_title: event.target.value
  });
}
handleInputChangedParagraph(event) {
  this.setState({
    blog_para: event.target.value
  });
}
 handleChange = (e) =>{
  this.setState({
    value: e
  });
}

onChangeFile = event => {
  this.setState({
     selectedFile: event.target.files[0]
  });
};

// handle click event of the upload button/////
handleUpload = (e) => {
  const { selectedFile ,blog_title ,blog_para,value} = this.state;
  console.log(this.state);
  e.preventDefault();
 
  const formData = new FormData();
  console.log("formData======>", formData);
  if (selectedFile) {
    if (selectedFile.name) {
      formData.append('blog_image',selectedFile,selectedFile.name);
    }    
  } 
 
  formData.append('blog_title', blog_title);
  formData.append('blog_para', blog_para);
  formData.append('testomonials', value);

  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  console.log('formdata check karna pad rha h',json)
  axios.post(BASE_URL, formData).then(response => {
   
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
  console.log('this is manin ',this.state);
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
          <div className="formInput">
          <label htmlFor="file">
                      Image : <DriveFolderUploadOutlined className="icon" />
                    </label>
              <input type="file" onChange={this.onChangeFile} />
            </div>
            
            <div className="formInput" >
              <label>Blog Title</label>
               
              <input type="text" name="blog_title" placeholder="blog heading" onChange={this.handleInputChangedHeading.bind(this)} />
            </div>
            <div className="formInput" >
              <label>Blog Paragraph</label>
               
              <input type="text" name="blog_para" placeholder="blog paragraph" onChange={this.handleInputChangedParagraph.bind(this)} />
            </div>
             
           
      <Box id="tinymceeditor" />
      <Editor
      textareaName="testomonials"
      initialValue="Testomonials"
        value={this.state.value}
        onEditorChange={this.handleChange}
        apiKey="fn5uad00ua0qo09hoqrp5j3mjg5c49t6pcvbxnw85m71uzt3"
        init={{
          selector: 'textarea#open-source-plugins',
          plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
          imagetools_cors_hosts: ['picsum.photos'],
          menubar: 'file edit view insert format tools table help',
          toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          toolbar_sticky: true,
        }}
      /> 
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

export default ourblog;