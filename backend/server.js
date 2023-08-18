var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer')
var db=require('../backend/app/config/db.config');
var sessions = require('express-session')
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
 
// handle single file upload
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


  if (!file) {
     return res.status(400).send({ message: 'Please upload a file.' });
  }
  var sql = "INSERT INTO `home_page_config`( `title`, `description`, `image`)  VALUES ('" + req.body.title + "','" + req.body.description + "','" + req.file.filename + "')";
  console.log(sql);
  var query = db.query(sql, function(err, result) {
      return res.send({ message: 'File is UPLOAD successfully.', file });
   });
});
app.post('/update_home_header_page/:homepage_id',upload.single('home_image'), function(req, res, next) {
     
  var id= req.params.homepage_id;
  console.log(req);
  var service_title= req.body.title;
  var service_para= req.body.description;
  var sql = `UPDATE home_page_config SET title="${service_title}", description="${service_para}", image="${req.file.filename}" WHERE id=${id}`;
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


 app.post('/add_home_company_history', (req, res, next) => {
  

  var sql = "INSERT INTO `home_company_history`( `title`, `home_couter`,`description`)  VALUES ('" + req.body.title + "','" + req.body.home_couter + "','" + req.body.description + "')";
  console.log(sql);
  var query = db.query(sql, function(err, result) {
      return res.send({ message: 'File is UPLOAD successfully.', file });
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
    var home_couter= req.body.home_couter;
    console.log('homecouter',home_couter)
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
 //************########### OUR SERVICE API ############*********** */
 app.post('/upload-services-file', upload.single('service_image'), (req, res, next) => {
   
  const file = req.file;


  if (!file) {
     return res.status(400).send({ message: 'Please upload a file.' });
  }
  var sql = "INSERT INTO `home_page_config`( `service_title`, `service_para`, `service_image`)  VALUES ('" + req.body.service_title + "','" + req.body.service_para + "','" + req.file.filename + "')";
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
app.post('/update_service/:service_id', function(req, res, next) {
 
  var id= req.params.service_id;
  console.log(req);
  var service_title= req.body.service_title;
  var service_para= req.body.service_para;
  var sql = `UPDATE our_services SET service_title="${service_title}", service_para="${service_para}" WHERE id=${id}`;
  console.log(sql);
  db.query(sql, [id], function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " Record(s) updated");
  return res.send({ message: 'Update Successfully ', data });
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
    const newAa={
      'id':res.id,
      'title':res.title,
      'image':img+res.image,
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


console.log(req)

var sql = "INSERT INTO `card_carousel`(`title`, `description`,`image`) VALUES ('" + req.body.title + "','" + req.body.description + "','" +req.file.filename + "')";
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
app.post('/CardCarousel_update/:ex_id', upload.single('card_image'), (req, res, next) => {


 var id= req.params.ex_id;
var title= req.body.title;
var description= req.body.description;
var file1= req.body.card_image;



if (!file1) {
   return res.status(400).send({ message: 'Please upload a file.' });
}
var sql = `UPDATE card_carousel SET title="${title}", description="${description}", image="${file1}" WHERE id=${id}`;
// var sql = "INSERT INTO `expertise`(`heading`, `paragraph`,`expert_image`)VALUES ('" + req.body.heading + "','" + req.body.paragraph + "','" + req.file.filename + "')";
console.log('sql',sql)
var query = db.query(sql,[id],function(err, result) {
    return res.send({ message: 'File&Data is Insert successfully.', file1 });
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

  
  console.log(req)

  var sql = "INSERT INTO `expertise`(`heading`, `paragraph`,`expert_image`) VALUES ('" + req.body.heading + "','" + req.body.paragraph + "','" +req.file.filename + "')";
  console.log(sql);
  db.query(sql,function (err, data) {
  if (err) throw err;
  console.log(data.affectedRows + " record(s) Inserted");
  return res.send({ message: 'Insert sucessfully ', data });
  

  
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

  const file = req.file;
   var id= req.params.ex_id;
var year_in_bussiness= req.body.heading;
var projects= req.body.paragraph;
var file1= req.body.expert_image ;

  if (!file1) {
     return res.status(400).send({ message: 'Please upload a file.' });
  }
  var sql = `UPDATE expertise SET heading="${year_in_bussiness}", paragraph="${projects}", expert_image="${file1}",where id=${id}`;
 // var sql = "INSERT INTO `expertise`(`heading`, `paragraph`,`expert_image`)VALUES ('" + req.body.heading + "','" + req.body.paragraph + "','" + req.file.filename + "')";
  console.log('sql',sql)
  var query = db.query(sql,[id],function(err, result) {
      return res.send({ message: 'File&Data is Insert successfully.', file1 });
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

  app.post('/post_pdd', upload.single('pdd_image'), (req, res, next) => {

    
    console.log(req)
  
    var sql = "INSERT INTO `pdd_fact`(`pdd_heading`, `pdd_paragraph`,`pdd_image`) VALUES ('" + req.body.pdd_heading + "','" + req.body.pdd_paragraph + "','" +req.file.filename + "')";
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
 
  
    var sql = `UPDATE pdd SET pdd_heading="${pdd_heading}", pdd_paragraph="${pdd_paragraph}", pdd_image="${file1}" where id=${id}`;
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


app.listen(port, () => {
  console.log('Server started on: ' + port);
});

