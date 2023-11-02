import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Box, Button } from '@mui/material'
import axios from 'axios';
const TinyMCE = ({ initialValue, onSubmit }) => {
  const [loaded, setLoaded] = useState(false)
  const [value, setValue] = useState(initialValue ?? '<p></p>')
  useEffect(() => {
    setLoaded(true)
  }, [])
  const editorRef = useRef(null)

  const handleChange = (e) =>{
    setValue(e);
  }

  const handleSubmit = () => 
  {
    axios({
      method: "post",
      url: 'http://localhost:5000/add-testomonials',
      data: {testomonials:value},
      headers: { "Content-Type": "application/json" },
    }).then(response => {
    }).catch(err => {
      alert(err.message);
    });
  }
  return (
    <Box>
      <Box id="tinymceeditor" />
      <Editor
        value={value}
        onEditorChange={handleChange}
        apiKey="fn5uad00ua0qo09hoqrp5j3mjg5c49t6pcvbxnw85m71uzt3"
        init={{
          selector: 'tinymceeditor',
          plugins: 'advlist code emoticons link lists table',
          toolbar: 'bold italic | bullist numlist | link emoticons',
          height: 300
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  )
}

export default TinyMCE