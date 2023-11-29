var express = require('express');
var path = require('path');
const zlib = require('zlib');   
const arrayBufferToString =require('arraybuffer-to-string')
var nodemailer = require('nodemailer');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer')
var db=require('../backend/app/config/db.config');
var sessions = require('express-session');
var ejs = require('ejs');
const { title } = require('process');
const { Console } = require('console');
const pathchekc='http://localhost:5000/uploads/';
var app = express();
var port = process.env.PORT || 5000;


// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// serving static files
app.use('/uploads', express.static('uploads'));
app.use(sessions({
  secret: "Tejpalsingh",
  saveUninitialized:true,
  // cookie: { maxAge: oneDay },
  resave: true 
}));
  
// request handlers
app.get('/', (req, res) => {
    res.send('Node js file upload rest apis');
});
// handle storage using multer
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'uploads');
   },
   filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
   }
});
 
var upload = multer({ storage: storage });
console.log('hiii upload',upload.single());
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tejpal.e2x@gmail.com',
    pass: 'lvnj raxb pwfb clfo'
  }
});

// Define an API endpoint to send an email
app.post('/send-email',(req, res) => {
  const mailOptions = {
    
    from:req.body.Your_Email ,
    to: 'tejpal.e2x@gmail.com',
    subject:req.body.Subject,
    text:`Email_From: ${req.body.Your_Email}  Full_Name:  ${req.body.Full_Name}  Massage:${req.body.send_Message}`,
    html: `<b>Name:${req.body.Full_Name} <br><br> Email From: ${req.body.Your_Email}<br>${req.body.send_Message} <br> Thanks. `,
  };
 console.log('hbshxbhsbbbbbbbbbbbbbbbb',mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send({data:'Message sent successfully'});
    }
  });
});

// Define an contacttt2222222 API endpoint to send an email
app.post('/send-email-contact', (req, res) => {
  const mailOptions = {
    
    from:req.body.Your_Email ,
    to: 'tejpal.e2x@gmail.com',
    subject:req.body.Subject,
    text:`Email_From: ${req.body.Your_Email}  Full_Name:  ${req.body.Full_Name}   Message:${req.body.send_Message} ` ,
    html: `<b>Name:${req.body.Full_Name} <br><br> Email From: ${req.body.Your_Email} <br> <br> ${req.body.send_Message} <br> <br>${req.body.Your_Resume}<br> Thanks. `,
  };
 console.log('hbshxbhsbbbbbbbbbbb2222222bbbbb',mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send({data:'Message sent successfully'});
    }
  });
});

// Define an API Resume endpoint to send an email
app.post('/send-resume',  upload.single('myFile'),(req, res) => {
  const mailOptions = {
    from:req.body.Your_Email ,
    to: 'tejpal.e2x@gmail.com',
    subject:'Regarding Job',
    // subject:req.body.Subject,
    attachments: [{
      filename:req.file.filename ,
      path: pathchekc+req.file.filename,
      contentType: 'application/pdf',
    }],
    text:`Email_From: ${req.body.Your_Email}  Full_Name:  ${req.body.Full_Name}   Your_Resume:${req.file.filename}`,
    html: `<b>Name:${req.body.Full_Name} <br><br> Email From: ${req.body.Your_Email} <br> <br>${req.file.filename}<br> <br> Thanks. `,
  };

  // pathchekc+
 console.log('hbshxbhsbbbbbbbbbbbbbbbb',mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send({data:'Message sent successfully'});
    }
  });
});


app.post('/login',(request,response)=>{
  var user_email_address = request.body.email;

  var user_password = request.body.password;

  if(user_email_address && user_password)
  {
      query = `
      SELECT * FROM user_login 
      WHERE user_email = "${user_email_address}"
      `;

      db.query(query, function(error, data){

          if(data.length > 0)
          {
              for(var count = 0; count < data.length; count++)
              {
                  if(data[count].user_password == user_password)
                  {
                      request.session.user_id = data[count].user_id;
                     return  response.send({message:'login successfully',data:data});  
                  }
                  else
                  {
                      return response.send('Incorrect Password');
                  }
              }
          }
          else
          {
              return response.send('Incorrect Email Address');
          }
          response.end();
      });
  }
  else
  {
      return response.send('Please Enter Email Address and Password Details');
      response.end();
  }
});

// Home_Page_config api.........
app.get('/get_home_page_config/:page_id', function(req, res, next) {
     
      
    var sql ="SELECT * FROM `home_page_config` where pagelink=? ";
   
    db.query(sql,[req.params.page_id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) selected");
   
    return res.send({ message: 'success', data:data });
  });
});

app.get('/getalpage', function(req, res, next) {
     
      
  var sql ="SELECT * FROM `home_page_config` ";
 
  db.query(sql,[req.params.page_id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
 
  return res.send({ message: 'success', data:data });
});
});
app.get('/edit-home_page_config/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'SELECT * FROM home_page_config  WHERE id = ?';
     
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
      return res.send({ message: 'Get successfully', data });
    });
    });


    app.get('/delete-home_page_config/:id', function(req, res, next) {
        var id= req.params.id;
          var sql = 'DELETE FROM home_page_config WHERE id = ?';
          db.query(sql, [id], function (err, data) {
          if (err) throw err;
          console.log(data.affectedRows + " record(s) deleted");
          return res.send({ message: 'success', data });
        });
     });

app.post('/add_home_header_data', upload.single('home_header_image'), (req, res, next) => {
  
  const file = req.file;
  var flname = '';
  if (req.length!=0) {
      if (req.file) {
        flname = `${req.file.originalname}`;
      }else{
        flname = 'not-found.jpg';
      }
    }


  var sql = "INSERT INTO `home_page_config`( `title`, `description`, `image`)  VALUES ('" + req.body.title + "','" + req.body.description + "','" +flname + "')";
  console.log(sql);
  var query = db.query(sql, function(err, result) {
      return res.send({ message: 'File is UPLOAD successfully.', file });
   });
});
app.post('/update_home_header_page/:homepage_id',upload.single('home_image'), function(req, res, next) {
  // console.log("Inside app post",req);
  var id= req.params.homepage_id;
  console.log("REQQQQQQQQQQQn cnv v x",req);
  var service_title= req.body.title;
  var service_para= req.body.description;
  var flname = '';
  if (req.length!=0) {
      if (req.file) {
        flname = `, image="${req.file.originalname}"`;
      }
  }
  console.log("flname =>>>>>>>>>>>>>>>>>>>", flname);
  var sql = `UPDATE home_page_config SET title="${service_title}", description="${service_para}"${flname} WHERE id=${id}`;
  console.log(sql);
  db.query(sql, [id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " Record(s) updated");
  return res.send({ message: 'Update Successfully ', data });
  
    });
  });
  


  //#######################.... home_company_history API....#########################
  app.get('/get_home_company_history', function(req, res, next) {
      
    var sql ="SELECT * FROM `home_company_history`";
   
    db.query(sql, function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) selected");
   
    return res.send({ message: 'success', data:data });
  });
});

app.get('/edit-home_company_history/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'SELECT * FROM home_company_history WHERE id = ?';
   
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Get successfully', data });
  });
  });

  app.get('/delete-home_company_history/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'DELETE FROM home_company_history WHERE id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) deleted");
      return res.send({ message: 'success', data });
    });
 });
 
app.post('/add_home_history_data', (req, res, next) => {
  
  const file = req.file;


  
  var sql = "INSERT INTO `home_company_history`( `title`, `description`, `home_couter`)  VALUES ('" + req.body.title + "','" + req.body.description + "','" + req.body.home_couter + "')";
  console.log(sql);
  var query = db.query(sql, function(err, result) {
      return res.send({ message:' successfully upload.'});
   });
});

 
 app.post('/update_home_company_history/:homepage_id',upload.single('home_image'), function(req, res, next) {
     
  var id= req.params.homepage_id;
  console.log(req);
  var service_title= req.body.title;
  var service_para= req.body.description;
  var sql = `UPDATE home_company_history SET title="${service_title}", description="${service_para}", image="${req.file.filename}" WHERE id=${id}`;
  console.log(sql);
  db.query(sql, [id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " Record(s) updated");
  return res.send({ message: 'Update Successfully ', data });
  

  
    });
  });
  app.post('/upload-avatar', upload.single('dataFile'), (req, res, next) => {
  
    const file = req.file;
 
 
    if (!file) {
       return res.status(400).send({ message: 'Please upload a file.' });
    }
    var sql = "INSERT INTO `carousel_data`( `carousel_heading`, `carousel_paragraph`, `carousel_button_name`, `carousel_image`) VALUES ('" + req.body.carousel_heading + "','" + req.body.carousel_paragraph + "','" + req.body.carousel_button_name + "','" + req.file.filename + "')";
    var query = db.query(sql, function(err, result) {
        return res.send({ message: 'File is UPLOAD successfully.', file });
     });
 });
 
 app.get('/get-carousel', (req, res,next) => {
   
    db.query("SELECT * FROM `carousel_data` where status=1", function (err, response, fields) {
    if(err) return next(new AppError(err))
     res.status(200).json({
      status: "success",
      length: response?.length,
    //   data:`http://localhost:5000/uploads${response.carousel_heading}`,
     data:response,
   
    });
  });
 });
 app.get('/delete/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'DELETE FROM carousel_data WHERE carousel_id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
      return res.send({ message: 'success', data });
    });
    
  });
  app.get('/geteditdata/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'SELECT * FROM carousel_data  WHERE carousel_id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
      return res.send({ message: 'Get successfully', data });
    });
  });
    app.get('/getcompanydata/:id', function(req, res, next) {
      var id= req.params.id;
        var sql = 'SELECT * FROM home_company_history  WHERE id = ?';
        db.query(sql, [id], function (err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) updated");
        return res.send({ message: 'Get successfully', data });
      });
    
  });
  app.post('/update_home_history/:carousel_id', function(req, res, next) {
    var id= req.params.carousel_id;
   
    var title= req.body.title;
    var description= req.body.description;
    var home_couter= req.body.home_counter;

    var sql = `UPDATE home_company_history SET title="${title}",description="${description}",  home_couter="${home_couter}" WHERE id=${id}`;
    console.log(sql);
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Update Successfully ', data });
    
      });
    });
    //*************########### Home_company_information###########********** */
    app.get('/get_home_comapny_info', function(req, res, next) {
      
      var sql ="SELECT * FROM `home_comapny_info` where status=0";
     
      db.query(sql, function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) selected");
     
      return res.send({ message: 'success', data:data });
    });
  });
  app.get('/get_home_comapny_info_o', function(req, res, next) {
      
    var sql ="SELECT * FROM `home_comapny_info` where status=1";
   
    db.query(sql, function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) selected");
   
    return res.send({ message: 'success', data:data });
  });
});


app.get('/edit_company_info/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'SELECT * FROM home_comapny_info WHERE id = ?';
   
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Get successfully', data });
  });
  });

app.post('/Company_info_update/:ex_id', upload.single('card_image'), (req, res, next) => {


  var id= req.params.ex_id;
 var title= req.body.title;
 var description= req.body.description;
 var icons=req.body.icons;
 var file1= req.body.card_image;

 var sql = `UPDATE home_comapny_info SET title="${title}", description="${description}",icons="${icons}", image="${file1}" WHERE id=${id}`;
 console.log('sql',sql)
 var query = db.query(sql,[id],function(err, result) {
     return res.send({ message: 'File&Data is Insert successfully.', file1 });
  });
 });

app.post('/updateStatus/:carousel_id', function(req, res, next) {
  var id= req.params.carousel_id;
   var status= req.body.status;
   console.log('id',id)
  var sql = `UPDATE home_comapny_info SET status="${status}" WHERE id=${id}`;
  console.log(sql);
  db.query(sql, [id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) updated");
  return res.send({ message: 'Update Successfully ', data });
  
    });
  });

  app.post('/add_home_information_data', (req, res, next) => {
  
    const file = req.file;

    var sql = "INSERT INTO `home_comapny_info`( `title`, `description`, `icons`)  VALUES ('" + req.body.title + "','" + req.body.description + "','" + req.body.icons + "')";
    console.log(sql);
    var query = db.query(sql, function(err, result) {
        return res.send({ message:' successfully upload.',file});
     });
  });

  app.get('/delete-about_company_history/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'DELETE FROM about_company_info WHERE id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) deleted");
      return res.send({ message: 'success', data });
    });
 });

 app.get('/delete-home_company_info/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'DELETE FROM home_comapny_info WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) deleted");
    return res.send({ message: 'success', data });
  });
});

 //************########### OUR SERVICE API ############*********** */
 app.post('/upload-services-file', upload.single('service_image'), (req, res, next) => {
   
  const file = req.file;
  var flname = '';
  if (req.length!=0) {
      if (req.file) {
        flname = `${req.file.originalname}`;
      }else{
        flname = 'not-found.jpg';
      }
    }
  var sql = "INSERT INTO `our_services`( `service_title`, `service_para`, `service_image`)  VALUES ('" + req.body.service_title + "','" + req.body.service_para + "','" +flname + "')";
  console.log(sql);
  var query = db.query(sql, function(err, result) {
      return res.send({ message: 'File is UPLOAD successfully.', file });
   });
});
app.get('/our_services', function(req, res, next) {
      
  var sql ="SELECT * FROM `our_services` where status=1";
 
  db.query(sql, function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
 
  return res.send({ message: 'success', data:data });
});
});
app.get('/delete-service/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'DELETE FROM our_services WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) deleted");
    return res.send({ message: 'success', data });
  });
});
app.get('/edit-service-data/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'SELECT * FROM our_services  WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Get successfully', data });
  });
  });
app.post('/update_service/:service_id',upload.single('service_image'), function(req, res, next) {
 
  var id= req.params.service_id;
  console.log(req);
  var service_title= req.body.service_title;
  var service_para= req.body.service_para;
var flname = '';
    if (req.length!=0) {
        if (req.file) {
          flname = `,service_image="${req.file.originalname}"`;
        }
    }
    
  var sql = `UPDATE our_services SET service_title="${service_title}", service_para="${service_para}" ${flname}WHERE id=${id}`;
  console.log(sql);
  db.query(sql, [id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " Record(s) updated");
  return res.send({ message: 'Update Successfully ', data});
    });
  });

 //************########### OUR Carousel of client API ############*********** */

 app.get('/getCardCarousel', function(req, res, next) {
      
  var sql ="SELECT * FROM `card_carousel`";
  db.query(sql, function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
  const img='http://localhost:5000/uploads/';
  let result = Object.values(JSON.parse(JSON.stringify(data)));
  const newAa={};
  const newaa=[];
  var result1 = result.map(function(res) {
    console.log('ooooooooooooo',res.blog_para)
    const newAa={
      'id':res.id,
      'title':res.title,
      'image':img+res.image,
      'blog_para':res.blog_para,
      'description':res.description
    }
    newaa.push(newAa)
   
    
  });
  return res.send({ message: 'success', data:newaa });
});
});

app.get('/edit-CardCarousel/:id', function(req, res, next) {
var id= req.params.id;
var sql = 'SELECT * FROM card_carousel  WHERE id = ?';
db.query(sql, [id], function (err, data) {
if (err) throw err;
console.log(data.affectedRows + " record(s) updated");
return res.send({ message: 'Get successfully', data });
});


});

app.post('/post_CardCarousel', upload.single('card_image'), (req, res, next) => {

  var flname = '';
  if (req.length!=0) {
      if (req.file) {
        flname = `${req.file.originalname}`;
      }else{
        flname = 'not-found.jpg';
      }
    }
console.log(req)

var sql = "INSERT INTO `card_carousel`(`title`, `description`,`image`) VALUES ('" + req.body.title + "','" + req.body.description + "','" +flname + "')";
console.log(sql);
db.query(sql,function (err, data) {
if (err) throw err;
console.log(data.affectedRows + " record(s) Inserted");
return res.send({ message: 'Insert sucessfully ', data });

  });
});
app.get('/delete-CardCarousel/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'DELETE FROM card_carousel WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) deleted");
    return res.send({ message: 'success', data });
  });
});
app.post('/CardCarousel_update/:ex_id', upload.single('image'), (req, res, next) => {


 var id= req.params.ex_id;
var title= req.body.title;
var description= req.body.description;
 var flname = '';
    if (req.length!=0) {
        if (req.file) {
          flname = `, image="${req.file.originalname}"`;
        }
    }
var sql = `UPDATE card_carousel SET title="${title}", description="${description}"${flname} WHERE id=${id}`;

console.log('sql',sql)
db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " Record(s) updated");
    return res.send({ message: 'Update Successfully ', data });
    
      });
    });

 //************########### Company homepage expertise API ############*********** */
 app.get('/getExpert', function(req, res, next) {
      
  var sql ="SELECT * FROM `expertise`";
  db.query(sql, function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
  return res.send({ message: 'success', data });
});
});
app.get('/edit-expertise/:id', function(req, res, next) {
var id= req.params.id;
  var sql = 'SELECT * FROM expertise  WHERE id = ?';
  db.query(sql, [id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) updated");
  return res.send({ message: 'Get successfully', data });
});


});
app.post('/expert_post', upload.single('expert_image'), (req, res, next) => {
  
  var flname = '';
  if (req.length!=0) {
      if (req.file) {
        flname = `${req.file.originalname}`;
      }else{
        flname = 'not-found.jpg';
      }
    }
  
  console.log(req)

  var sql = "INSERT INTO `expertise`(`heading`, `paragraph`,`expert_image`) VALUES ('" + req.body.heading + "','" + req.body.paragraph + "','" +flname + "')";
  console.log(sql);
  db.query(sql,function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) Inserted");
  return res.send({ message: 'Insert sucessfully ', data });
    });
  });
  app.post('/expertise_update/:ex_id', upload.single('expert_image'), (req, res, next) => {


 var id= req.params.ex_id;
var heading= req.body.heading;
var paragraph= req.body.paragraph;
var file1= req.body.expert_image;
if (!file1) {
   return res.status(400).send({ message: 'Please upload a file.' });
}
var sql = `UPDATE card_carousel SET heading="${heading}", paragraph="${paragraph}", image="${file1}" WHERE id=${id}`;
// var sql = "INSERT INTO `expertise`(`heading`, `paragraph`,`expert_image`)VALUES ('" + req.body.heading + "','" + req.body.paragraph + "','" + req.file.filename + "')";
console.log('sql',sql)
var query = db.query(sql,[id],function(err, result) {
    return res.send({ message: 'File&Data is Insert successfully.', file1 });
 });
});
  app.get('/delete-expert/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'DELETE FROM expertise WHERE id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) deleted");
      return res.send({ message: 'success', data });
    });
 });
 app.post('/updateAnd/:ex_id', upload.single('expert_image'), (req, res, next) => {
  
   var id= req.params.ex_id;
var heading= req.body.heading;
var paragraph= req.body.paragraph;
var flname = '';
  if (req.length!=0) {
      if (req.file) {
        flname = `, expert_image="${req.file.originalname}"`;
      }
  }
  // if (!file1) {
  //    return res.status(400).send({ message: 'Please upload a file.' });
  // }
  var sql = `UPDATE expertise SET heading="${heading}", paragraph="${paragraph}"${flname} where id=${id}`;
  console.log(sql);
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " Record(s) updated");
    return res.send({ message: 'Update Successfully ', data });
    
      });
    });


    //************PDD FACT********************* */
    app.get('/getpdd', function(req, res, next) {
      
      var sql ="SELECT * FROM `pdd_fact`";
      db.query(sql, function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) selected");
      return res.send({ message: 'success', data });
    });
  });

app.get('/edit-pdd/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'SELECT * FROM pdd_fact  WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Get successfully', data });
  });
  
  
});

  app.post('/post_pdd', (req, res, next) => {

    
    console.log(req.body)
  
    var sql = "INSERT INTO `pdd_fact`(`pdd_heading`, `pdd_paragraph`,`pdd_image`) VALUES ('" + req.body.pdd_heading + "','" + req.body.pdd_paragraph + "','" +req.body.pdd_image + "')";
    console.log(sql);
    db.query(sql,function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) Inserted");
    return res.send({ message: 'Insert sucessfully ', data });
      });
    });


    app.get('/delete-pdd/:id', function(req, res, next) {
      var id= req.params.id;
        var sql = 'DELETE FROM pdd_fact WHERE id = ?';
        db.query(sql, [id], function (err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) deleted");
        return res.send({ message: 'success', data });
      });
   });
   app.post('/pdd_update/:ex_id', (req, res, next) => {

 
     var id= req.params.ex_id;
  var pdd_heading= req.body.pdd_heading;
  var pdd_paragraph= req.body.pdd_paragraph;
  var file1= req.body.pdd_image ;
 
  
    var sql = `UPDATE pdd_fact SET pdd_heading="${pdd_heading}", pdd_paragraph="${pdd_paragraph}", pdd_image="${file1}" where id=${id}`;
   // var sql = "INSERT INTO `expertise`(`heading`, `paragraph`,`expert_image`)VALUES ('" + req.body.heading + "','" + req.body.paragraph + "','" + req.file.filename + "')";
    console.log('sql',sql)
    var query = db.query(sql,[id],function(err, result) {
        return res.send({ message: 'File&Data is Insert successfully.', result });
     });
 });

  //*************########### about_company_information###########********** */
app.get('/get_about_company_info', function(req, res, next) {
      
      var sql ="SELECT * FROM `about_company_info` where status=1";
     
      db.query(sql, function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) selected");

     
      return res.send({ message: 'success', data:data });
    });
  });

  app.get('/get_about_company_info_o', function(req, res, next) {
      
    var sql ="SELECT * FROM `about_company_info` where status=0";
   
    db.query(sql, function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) selected");
   
    return res.send({ message: 'success', data:data });
  });
});

app.get('/get_about_company_info_2', function(req, res, next) {
      
  var sql ="SELECT * FROM `about_company_info` where status=2";
 
  db.query(sql, function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
 
  return res.send({ message: 'success', data:data });
});
});


app.post('/About_info_update/:ex_id', upload.single('card_image'), (req, res, next) => {


  var id= req.params.ex_id;
 var title= req.body.title;
 var description= req.body.description;
 var icons=req.body.icons;
 var file1= req.body.card_image;

 var sql = `UPDATE about_company_info SET title="${title}", description="${description}",icons="${icons}", image="${file1}" WHERE id=${id}`;
 console.log('sql',sql)
 var query = db.query(sql,[id],function(err, result) {
     return res.send({ message: 'File&Data is Insert successfully.', file1 });
  });
 });

 app.post('/update_about/:service_id',upload.single('image'), function(req, res, next) {
 
  var id= req.params.service_id;
  console.log(req);
  var title= req.body.title;
  var description= req.body.description;
var flname = '';
    if (req.length!=0) {
        if (req.file) {
          flname = `,image="${req.file.originalname}"`;
        }
    }
    
  var sql = `UPDATE about_company_info SET title="${title}", description="${description}" ${flname}WHERE id=${id}`;
  console.log(sql);
  db.query(sql, [id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " Record(s) updated");
  return res.send({ message: 'Update Successfully ', data});
    });
  });

  app.get('/edit-about-data/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'SELECT * FROM about_company_info  WHERE id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
      return res.send({ message: 'Get successfully', data });
    });
    });

    app.get('/delete-about/:id', function(req, res, next) {
      var id= req.params.id;
        var sql = 'DELETE FROM about_company_info WHERE id = ?';
        db.query(sql, [id], function (err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) deleted");
        return res.send({ message: 'success', data });
      });
    });

    app.post('/upload-about-file', upload.single('image'), (req, res, next) => {
   
      const file = req.file;
      var flname = '';
      if (req.length!=0) {
          if (req.file) {
            flname = `${req.file.originalname}`;
          }else{
            flname = 'not-found.jpg';
          }
        }
      var sql = "INSERT INTO `about_company_info`( `title`, `description`, `image`)  VALUES ('" + req.body.title + "','" + req.body.description + "','" +flname + "')";
      console.log(sql);
      var query = db.query(sql, function(err, result) {
          return res.send({ message: 'File is UPLOAD successfully.', file });
       });
    });
    app.post('/add_about_information_data', (req, res, next) => {
  
      const file = req.file;
  
      var sql = "INSERT INTO `about_company_info`( `title`, `description`, `icons`)  VALUES ('" + req.body.title + "','" + req.body.description + "','" + req.body.icons + "')";
      console.log(sql);
      var query = db.query(sql, function(err, result) {
          return res.send({ message:' successfully upload.',file});
       });
    });

  //*************########### Message to company Api ###########**************///////
  app.post('/message_us', (req, res ) => {

    
    console.log(req.body)
  
    var sql = "INSERT INTO `message_us`(`Full_Name`, `Your_Email`,`send_Message`,`Your_Resume`) VALUES ('" + req.body.Full_Name + "','" + req.body.Your_Email + "','" +req.body.send_Message + "','" +req.body.Your_Resume +"')";
    console.log(sql);
    db.query(sql,function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) Inserted");
    return res.send({ message: 'Insert sucessfully ', data });
      });
    });

  

    //******************######################TEAM excutive api #############**************8 */
    app.post('/upload-team-file/:team_id',upload.single('team_image'), (req, res, next) => {

 
      var id= req.params.team_id;
   var excutive_title= req.body.excutive_title;
   var team_position= req.body.team_position;
   var excutive_intro= req.body.excutive_intro;
   var file1= req.body.team_image ;
  
   
     var sql = `UPDATE executive_team SET excutive_title="${excutive_title}",team_position="${team_position}",excutive_intro="${excutive_intro}", team_image="${file1}" where id=${id}`;
     console.log('sql',sql)
     var query = db.query(sql,[id],function(err, result) {
         return res.send({ message: 'File&Data is Insert successfully.', result });
      });
  });
 
   
    app.get('/executive_team', function(req, res) {
      
      var sql ="SELECT * FROM `executive_team` where status=1";
     
      db.query(sql, function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) selected");
      return res.send({ message: 'success', data:data });
    });
    });


    app.post('/team-file', upload.single('team_image'), (req, res, next) => {
   
      const file = req.file;
      var flname = '';
      if (req.length!=0) {
          if (req.file) {
            flname = `${req.file.originalname}`;
          }else{
            flname = 'not-found.jpg';
          }
        }
    
      var sql = "INSERT INTO `executive_team`( `excutive_title`, `team_position`,`excutive_intro`, `team_image`)  VALUES ('" + req.body.excutive_title + "','" + req.body.team_position + "','" + req.body.excutive_intro + "','" + req.file.filename + "')";
      console.log(sql);
      var query = db.query(sql, function(err, result) {
          return res.send({ message: 'File is UPLOAD successfully.', file });
       });
    });

    app.get('/delete-team/:id', function(req, res, next) {
      var id= req.params.id;
        var sql = 'DELETE FROM executive_team WHERE id = ?';
        db.query(sql, [id], function (err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) deleted");
        return res.send({ message: 'success', data });
      });
    });

    app.get('/edit-team-data/:id', function(req, res, next) {
      var id= req.params.id;
        var sql = 'SELECT * FROM executive_team  WHERE id = ?';
        db.query(sql, [id], function (err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) updated");
        return res.send({ message: 'Get successfully', data });
      });
      });
    app.post('/update_team/:team_id',upload.single('team_image'), function(req, res, next) {
     
      var id= req.params.team_id;
      console.log(req.body);
      var excutive_title= req.body.excutive_title;
      var excutive_intro= req.body.excutive_intro;
      var team_position=req.body.team_position;
      var flname = '';
        if (req.length!=0) {
            if (req.file) {
              flname = `, team_image="${req.file.originalname}"`;
            }
        }
      var sql = `UPDATE executive_team SET excutive_intro="${excutive_intro}" , excutive_title="${excutive_title}",team_position="${team_position}"${flname} WHERE id=${id}`;
      console.log(sql);
      db.query(sql, [id], function (err, data) {
          if (err) throw err;
          console.log(data.affectedRows + " Record(s) updated");
          return res.send({ message: 'Update Successfully ', data });
          
            });
          });

       //************########### contact_info API ############*********** */
       app.get('/contactdetails',(req,res)=>{
        $sql="SELECT `id`, `content`, `icon`,`branch`,  `status`, `datetime` FROM `contact_info` where branch='noida_branch'";
        console.log($sql);
        db.query($sql,(err,result)=>{
          return res.send({message:'get successfully',data:result});
      
        })
      });
      app.get('/contactdetailsmore',(req,res)=>{
        $sql="SELECT `id`, `content`,`branch`, `icon`, `status`, `datetime` FROM `contact_info` where branch='braily_branch'";
        console.log($sql);
        db.query($sql,(err,result)=>{
          return res.send({message:'get successfully',data:result});
      
        })
      
      });
      app.get('/allcontact',(req,res)=>{
        $sql="SELECT `id`, `content`,`branch`, `icon`, `status`, `datetime` FROM `contact_info` ";
        console.log($sql);
        db.query($sql,(err,result)=>{
          return res.send({message:'get successfully',data:result});
      
        })
      
      });

      
app.get('/edit-contact/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'SELECT * FROM contact_info WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Get successfully', data });
  });
});

app.post('/contact_update/:ex_id', (req, res, next) => {

 
  var id= req.params.ex_id;
var content= req.body.content;
var icon= req.body.icon;
var branch= req.body.branch ;


 var sql = `UPDATE contact_info SET content="${content}",icon="${icon}", branch="${branch}" where id=${id}`;
 console.log('sql',sql)
 var query = db.query(sql,[id],function(err, result) {
     return res.send({ message: 'File&Data is Insert successfully.', result });
  });
});


  app.get('/delete-contact/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'DELETE FROM contact_info WHERE id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) deleted");
      return res.send({ message: 'success', data });
    });
 });

 
 app.post('/post_contact', (req, res,next) => {

    
  console.log('ihihih',req.body)

  var sql = "INSERT INTO `contact_info`(`content`, `icon`,`branch`) VALUES ('" + req.body.content + "','" + req.body.icon + "','" +req.body.branch + "')";
  console.log(sql);
  db.query(sql,function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) Inserted");
  return res.send({ message: 'Insert sucessfully ', data });
    });
  });



       //*************########### contact us Api ###########********** */
  app.post('/contact_us', (req, res ) => {

    
    console.log(req.body)
  
    var sql = "INSERT INTO `contact_us`(`Full_Name`, `Your_Email`,`send_Message`) VALUES ('" + req.body.Full_Name + "','" + req.body.Your_Email + "','" +req.body.send_Message + "')";
    console.log(sql);
    db.query(sql,function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) Inserted");
    return res.send({ message: 'Insert sucessfully ', data });
      });
    });


      //*************########### author_blog     ###########********** *////////////////////////
app.get('/get_blog', function(req, res, next) {
      
  var sql ="SELECT * FROM `author_blog` where status=1";
 
  db.query(sql, function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
  return res.send({ message: 'success', data:data });
});
});

app.get('/edit-blog/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'SELECT * FROM author_blog  WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Get successfully', data });
  });
  
  
  });
  app.post('/blog_post', upload.single('image'), (req, res, next) => {
  
    
    console.log(req)
    var flname = '';
  if (req.length!=0) {
      if (req.file) {
        flname = `${req.file.originalname}`;
      }else{
        flname = 'not-found.jpg';
      }
    }
    var sql = "INSERT INTO `author_blog`(`title`, `description`,`image`) VALUES ('" + req.body.title + "','" + req.body.description + "','" +flname + "')";
    console.log(sql);
    db.query(sql,function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) Inserted");
    return res.send({ message: 'Insert sucessfully ', data });
    
      });
    });
    app.get('/delete-blog/:id', function(req, res, next) {
      var id= req.params.id;
        var sql = 'DELETE FROM author_blog WHERE id = ?';
        db.query(sql, [id], function (err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) deleted");
        return res.send({ message: 'success', data });
      });
   });
   app.post('/update_blog/:ex_id', upload.single('image'), (req, res, next) => {
  
    const file = req.file;
     var id= req.params.ex_id;
  var title= req.body.title;
  var description= req.body.description;
  var flname = '';
    if (req.length!=0) {
        if (req.file) {
          flname = `, image="${req.file.originalname}"`;
        }
    }
    var sql = `UPDATE author_blog SET title="${title}", description="${description}"${flname} where id=${id}`;
   // var sql = "INSERT INTO `expertise`(`heading`, `paragraph`,`expert_image`)VALUES ('" + req.body.heading + "','" + req.body.paragraph + "','" + req.file.filename + "')";
    console.log('sql',sql)
    db.query(sql, [id], function (err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " Record(s) updated");
        return res.send({ message: 'Update Successfully ', data });
        
          });
        });

   //*************########### author_blog service blogggg     ###########********** *////////////////////////
app.get('/our_blog', function(req, res, next) {
      
  var sql ="SELECT * FROM `our_blog` ";
 
  db.query(sql, function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
 
  return res.send({ message: 'success', data:data });
});
});

app.post('/upload-blog-file', upload.single('blog_image'), (req, res, next) => {
   
  const file = req.file;
  var flname = '';
  if (req.length!=0) {
      if (req.file) {
        flname = `${req.file.originalname}`;
      }else{
        flname = 'not-found.jpg';
      }
    }
  var sql = "INSERT INTO `our_blog`( `blog_title`, `blog_para`,`testomonials`, `blog_image`)  VALUES ('" + req.body.blog_title + "','" + req.body.blog_para + "','" + req.body.testomonials + "','" +flname + "')";
  console.log(sql);
  var query = db.query(sql, function(err, result) {
      return res.send({ message: 'File is UPLOAD successfully.', file });
   });
});

app.get('/delete-our-blog/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'DELETE FROM our_blog WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) deleted");
    return res.send({ message: 'success', data });
  });
});

app.get('/edit-blog-data/:id', function(req, res, next) {
  var id= req.params.id;
  // const blobString = blobData.toString('utf-8');
    var sql = 'SELECT * FROM our_blog  WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    let result = Object.values(JSON.parse(JSON.stringify(data)));
    const newAa={};
    const newaa=[];
    var result1 = result.map(function(res) {
      const nodeBuffer = Buffer.from(res.testomonials);
      const blobString=nodeBuffer.toString('utf-8')
      
              const newAa={
        'id':res.id,
        'title':res.blog_title,
        'blog_para':res.blog_para,
        'testomonials':blobString,
        'blog_image':res.blog_image,
      }
      newaa.push(newAa) 
    });
    console.log('newaa',newaa)
    return res.send({ message: 'success', newaa });
  });
  });

  app.post('/update_Our_blog/:service_id',upload.single('blog_image'), function(req, res, next) {
 
    var id= req.params.service_id;
    console.log(req);
    var blog_title= req.body.blog_title;
    var blog_para= req.body.blog_para;
    var testomonials=req.body.testomonials;
    
    var flname = '';
      if (req.length!=0) {
          if (req.file) {
            flname = `, blog_image="${req.file.originalname}"`;
          }
      }
    var sql = `UPDATE our_blog SET blog_title="${blog_title}", blog_para="${blog_para}", testomonials='${testomonials}' ${flname} WHERE id=${id}`;
    console.log(sql);
    db.query(sql, [id], function (err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " Record(s) updated");
        return res.send({ message: 'Update Successfully ', data });
          });
        });

  //*******************************api for super heading on page****************** */
app.get('/super-heading/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'SELECT * FROM super_heading  WHERE page_link = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Get successfully', data });
  });

  });

  app.post('/update_super_heading/:id', function(req, res, next) {
    var id= req.params.id;
   
    var 	
    page_heading= req.body.page_heading;
    var page_paragraph= req.body.page_paragraph;
    var page_link= req.body.page_link;

    var sql = `UPDATE super_heading SET page_heading="${page_heading}",page_paragraph="${page_paragraph}",  page_link="${page_link}" WHERE id=${id}`;
    console.log(sql);
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Update Successfully ', data });
    
      });
    });

     app.get('/getsuperheaddata/:id', function(req, res, next) {
      var id= req.params.id;
        var sql = 'SELECT * FROM super_heading  WHERE id = ?';
        db.query(sql, [id], function (err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) updated");
        return res.send({ message: 'Get successfully', data });
      });
    }
     )

     app.post('/add_super_heading_data', (req, res, next) => {
  
      const file = req.file;
      var sql = "INSERT INTO `super_heading`( `page_heading`, `page_paragraph`, `page_link`)  VALUES ('" + req.body.page_heading + "','" + req.body.page_paragraph + "','" + req.body.page_link + "')";
      console.log(sql);
      var query = db.query(sql, function(err, result) {
          return res.send({ message:' successfully upload.'});
       });
    });

    app.get('/delete-super_heading/:id', function(req, res, next) {
      var id= req.params.id;
        var sql = 'DELETE FROM super_heading WHERE id = ?';
        db.query(sql, [id], function (err, data) {
        if (err) throw err;
        console.log(data.affectedRows + " record(s) deleted");
        return res.send({ message: 'success', data });
      });
   });

   
   app.get('/super_heading_data', function(req, res, next) {
      var sql = 'SELECT * FROM super_heading ';
      db.query(sql, function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
      return res.send({ message: 'Get successfully', data });
    });
    });




  // Social media apiiiiiiiiiiiiiii//////////////////////////////////////////.........
app.get('/get_social_media', function(req, res, next) {
     
      
  var sql ="SELECT * FROM `social_media` ";
 
  db.query(sql,[req.params.page_id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
 
  return res.send({ message: 'success', data:data });
});
});

app.post('/media_update/:ex_id', (req, res, next) => {

 
  var id= req.params.ex_id;
var link= req.body.link;
var icon= req.body.icon;



 var sql = `UPDATE social_media SET link="${link}", icon="${icon}" where id=${id}`;
// var sql = "INSERT INTO `expertise`(`heading`, `paragraph`,`expert_image`)VALUES ('" + req.body.heading + "','" + req.body.paragraph + "','" + req.file.filename + "')";
 console.log('sql',sql)
 var query = db.query(sql,[id],function(err, result) {
     return res.send({ message: 'File&Data is Insert successfully.', result });
  });
});

app.get('/edit-media/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'SELECT * FROM social_media  WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Get successfully', data });
  });
  
  
});

app.post('/post_media', (req, res, next) => {

    
  console.log(req.body)

  var sql = "INSERT INTO `social_media`(`link`, `icon`) VALUES ('" + req.body.link + "','" + req.body.icon + "')";
  console.log(sql);
  db.query(sql,function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) Inserted");
  return res.send({ message: 'Insert sucessfully ', data });
    });
  });


  app.get('/delete-media/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'DELETE FROM social_media WHERE id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) deleted");
      return res.send({ message: 'success', data });
    });
  });


  /////////////////// navbar data  /////////////////////////////////
  app.get('/get_navbar', function(req, res, next) {
     
      
    var sql ="SELECT * FROM `super_navbar` ";
   
    db.query(sql,[req.params.page_id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) selected");
   
    return res.send({ message: 'success', data:data });
  });
  });

  app.get('/getnavbardata/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'SELECT * FROM  super_navbar  WHERE id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
      return res.send({ message: 'Get successfully', data });
    });
  }
   )

  app.get('/delete-Navbar_data/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'DELETE FROM super_navbar WHERE id = ?';
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) deleted");
      return res.send({ message: 'success', data });
    });
 });

 app.post('/update_navbar/:id', function(req, res, next) {
  var id= req.params.id;
 
  var 	
  page_name= req.body.page_name;
  var routes= req.body.routes;
  var page_link= req.body.page_link;

  var sql = `UPDATE super_navbar SET page_name="${page_name}",routes="${routes}",  page_link="${page_link}" WHERE id=${id}`;
  console.log(sql);
  db.query(sql, [id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) updated");
  return res.send({ message: 'Update Successfully ', data });
  
    });
  });

  app.post('/add_navbar_data', (req, res, next) => {
  
    const file = req.file;
    var sql = "INSERT INTO `super_navbar`( `page_name`, `routes`, `page_link`)  VALUES ('" + req.body.page_name + "','" + req.body.routes + "','" + req.body.page_link + "')";
    console.log(sql);
    var query = db.query(sql, function(err, result) {
        return res.send({ message:' successfully upload.'});
     });
  });

        //*************########### career pageeeeeeee     ###########********** *////////////////////////
app.get('/get_career', function(req, res, next) {
      
  var sql ="SELECT * FROM `career_info` where status=1";
 
  db.query(sql, function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
  return res.send({ message: 'success', data:data });
});
});

app.get('/our_jobs', function(req, res, next) {
      
  var sql ="SELECT * FROM `our_jobs` where status=1";
 
  db.query(sql, function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
 
  return res.send({ message: 'success', data:data });
});
});

 //*************########### Jobs_upload info###########********** */
 app.get('/get_jobs_upload_info', function(req, res, next) {
      
  var sql ="SELECT * FROM `jobs_upload`";
 
  db.query(sql, function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) selected");
 
  return res.send({ message: 'success', data:data });
});
});

app.post('/add_jobs_upload', (req, res, next) => {
  
  const file = req.body.job_description;
  console.log('jomknono',file);

  var sql = "INSERT INTO `jobs_upload`(`title`,`jobtitle`,`para`,`joblocation`,`date`,`about_company`, `job_description`, `open_positions`,`skills_required`,`location`,`education`,`desirable_skills`,`experience`)  VALUES ('" + req.body.title + "','" + req.body.jobtitle + "','" + req.body.para + "','" + req.body.joblocation + "','" + req.body.date + "','" + req.body.about_company + "','" + req.body.description + "','" + req.body.open_positions + "','" + req.body.skills_required + "','" + req.body.location + "','" + req.body.education + "','" + req.body.desirable_skills + "','" + req.body.experience + "')";
  console.log(sql);
  var query = db.query(sql, function(err, result) {
      return res.send({ message:' successfully upload.',file});
   });
});
//api for add testomonials **************************
app.post('/add-testomonials', (req, res, next) => {
  
   var sql = "INSERT INTO `e2x_testomonials`(`testomonials`)  VALUES ('" + req.body.testomonials + "')";
  console.log(sql);
  var query = db.query(sql, function(err, result) {
      return res.send({ message:' successfully upload.',result});
   });
});

app.get('/delete-Job_upload/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'DELETE FROM jobs_upload WHERE id = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) deleted");
    return res.send({ message: 'success', data });
  });
});

app.get('/edit_jobs_upload/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'SELECT * FROM jobs_upload WHERE id = ?';
   
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
    return res.send({ message: 'Get successfully', data });
  });
  });
  app.get('/getJobsWithSpecificId/:id', function(req, res, next) {
    var id= req.params.id;
      var sql = 'SELECT * FROM jobs_upload WHERE id = ?';
     
      db.query(sql, [id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
      return res.send({ message: 'Get successfully', data });
    });
    });

    app.get('/geteventwithid/:id', function(req, res, next) {
      var id= req.params.id;
        var sql = 'SELECT * FROM our_blog WHERE id = ?';
       
        db.query(sql, [id], function (err, data) {
        if (err) throw err;
        let result = Object.values(JSON.parse(JSON.stringify(data)));
    const newAa={};
    const newaa=[];
    var result1 = result.map(function(res) {
      const nodeBuffer = Buffer.from(res.testomonials);
      const blobString=nodeBuffer.toString('utf-8')
      
              const newAa={
        'id':res.id,
        'title':res.blog_title,
        'blog_para':res.blog_para,
        'testomonials':blobString,
        'blog_image':res.blog_image,
      }
      newaa.push(newAa)
     
      
    });
    console.log('newaa',newaa)
    return res.send({ message: 'success', newaa });
  });
      });
    

app.post('/Jobs_upload_update/:ex_id', (req, res, next) => {
  var id= req.params.ex_id;
  var title= req.body.title;
  var jobtitle=req.body.jobtitle;
  var joblocation=req.body.joblocation;
  var date=req.body.date;
  var para=req.body.para;
 var about_company= req.body.about_company;
 var job_description= req.body.job_description;
 var open_positions=req.body.open_positions;
 var skills_required=req.body.skills_required;
 var location=req.body.location;
 var education=req.body.education;
 var desirable_skills=req.body.desirable_skills;
 var experience=req.body.experience;
 
 var sql = `UPDATE jobs_upload SET title="${title}", jobtitle="${jobtitle}", joblocation="${joblocation}", date="${date}", para="${para}", about_company="${about_company}", job_description="${job_description}",open_positions="${open_positions}",skills_required="${skills_required}" ,location="${location}",education="${education}",desirable_skills="${desirable_skills}",experience="${experience}" WHERE id=${id}`;
 console.log('sql',sql)
 var query = db.query(sql,[id],function(err, result) {
     return res.send({ message: 'File&Data is Insert successfully.' });
  });
 });


app.listen(port, () => {
  console.log('Server started on: ' + port);
});

