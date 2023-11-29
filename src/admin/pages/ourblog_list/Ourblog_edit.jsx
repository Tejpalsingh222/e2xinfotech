import "./ourblog_edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Button } from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'
import { useState } from "react";
import axios from 'axios';

import React, { Component } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
// import Zlib from "zlib";
const BASE_URL = 'http://localhost:5000/update_Our_blog/';



class ourblog_edit extends Component {


  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API respons
      blog_title: null,
      blog_para: null,
      value:null,
    };
  }
  componentDidMount() {
    const service_id = window.location.href.split('/')[5]
    fetch(`http://localhost:5000/edit-blog-data/${service_id}`)
      .then(response => response.json()).then(data => {
        console.log('ooooooooooohhhhhkkkkkkkkkkkkk',data.newaa)
        this.setState({ blog_title: data.newaa[0]['title']});
        this.setState({ blog_para: data.newaa[0]['blog_para']});
        this.setState({testomonials:data.newaa[0]['testomonials']})
        this.setState({ selectedFile: data.newaa[0]['blog_image']});

      });
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

  handleUpload = (e) => {
    const { selectedFile, blog_title,value, blog_para } = this.state;
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
    console.log("formData======>", formData);
    if (selectedFile) {
      if (selectedFile.name) {
        formData.append('blog_image',selectedFile,selectedFile.name);
      }    
    } 
    formData.append('blog_title', blog_title);
    formData.append('blog_para', blog_para);
    formData.append('testomonials',value);

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
    const { handleResponse, blog_title,testomonials, blog_para } = this.state;
//     var deflate = new Zlib.Deflate(testomonials);
//     console.log('deflateeeeeeeeee',deflate)
// var compressed = deflate.compress();
// console.log('compresseddddddd',compressed)
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
                    <input type="file"  onChange={this.onChangeFile} />
                  </div>

                  <div className="formInput" >
                    <label>Blog Title</label>

                    <input type="text" name="blog_title" defaultValue={blog_title} placeholder="blog heading" onChange={this.handleInputChangedHeading.bind(this)} />
                  </div>
                  <div className="formInput" >
                    <label>Description</label>
                    <textarea id="w3review"  name="page_link" defaultValue={blog_para} placeholder="history name" onChange={this.handleInputChangedParagraph.bind(this)} rows="4" cols="50"/>
                  </div>
{/* 
<div className="formInput" >
                    <label>Testomonials</label>

                    <input type="text" name="testomonials" defaultValue={testomonials} placeholder="testomonials" onChange={this.handleInputChangedTestomonials.bind(this)} />
                  </div> */}
                    <Box id="tinymceeditor" />
                    <Editor
                    textareaName="testomonials"
          initialValue={testomonials}
        value={this.state.value}
        onEditorChange={this.handleChange}
        apiKey="fn5uad00ua0qo09hoqrp5j3mjg5c49t6pcvbxnw85m71uzt3"
        init={{
          selector: 'textarea#open-source-plugins',
          plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists  imagetools textpattern noneditable help charmap quickbars emoticons',
          imagetools_cors_hosts: ['picsum.photos'],
          menubar: 'file edit view insert format tools table help',
          toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          
        }}
        /> 
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

export default ourblog_edit;



// wordcount