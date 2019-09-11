var express = require('express')
var app = express()
var bodyParser = require('body-parser')


app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))



    var mysql=require('mysql')
    var con=mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'dbms2'
    });
    con.connect(function(err){
        if(err) throw err;
        console.log('connected!');
     /*                                   con.query('select id from reg',function(err,result){
            if(err) throw err;
            console.log('result:'+result[1].id);
        }); */
    });



    app.get('/',function(req,res){
        console.log("start")
        res.render('home')
    })

    app.get("/regester",function(req,res){
        console.log('hey')
        res.render('regester')
    })
    app.get("/profiles",function(req,res){
        console.log('hi')
        res.render('profiles')
    })
    app.post("/delete",function(req,res){
        con.query('delete from feedback',function(error,result,fields){
            if(error) throw error;
            else{
                res.render("f1",{d:result});
            }
        })
    })
   
    app.post("/profiles",function(req, res){
        if(req.body.select1='1'){
        var v1={
     
            id: req.body.id,
            email: req.body.mid,
            phno: req.body.ph,
            type: 'passenger'
            };
            console.log("hi");
        var q1="insert into reg set ?";
        con.query(q1,v1,function(err, result, fields){
            if(err)throw err;
            else
            {
                console.log(result);
                console.log("hi");
                res.render('profiles')
            }
        });
    }
       else{
        var v2={
     
            id: req.body.id,
            email: req.body.mid,
            phno: req.body.ph,
            type: 'Staff'
            };
            console.log("hi");
        var q2="insert into reg set ?";
        con.query(q2,v2,function(err, result, fields){
            if(err)throw err;
            else
            {
                console.log(result);
                console.log("hi");
                res.render('profiles')
            }
        });
       }
});


app.post("/feed",function(req,res){
    var f1={
        feedback:req.body.feed,
        id:req.body.id,
        type:"passenger"
        };
        var q3="insert into feedback set ?";
        con.query(q3,f1,function(err, result, fields){
            if(err)throw err;
            else
            {
                console.log(result);
                console.log("h");
                res.render('profiles')
              
            }
        });
})
app.post("/feed1",function(req,res){
    var f2={
        feedback:req.body.feed1,
        id:req.body.id,
        type:"passenger"
        };
        var q4="insert into feedback set ?";
        con.query(q4,f2,function(err, result, fields){
            if(err)throw err;
            else
            {
                console.log(result);
                console.log("h");
                res.render('profiles')
              
            }
        });
})
app.post("/feed2",function(req,res){
    var f3={
        feedback:req.body.feed2,
        id:req.body.id,
        type:"passenger"
        };
        var q5="insert into feedback set ?";
        con.query(q5,f3,function(err, result, fields){
            if(err)throw err;
            else
            {
                console.log(result);
                console.log("h");
                res.render('profiles')
              
            }
        });
})
app.post("/feed3",function(req,res){
    var f4={
        feedback:req.body.feed3,
        id:req.body.id,
        type:"passenger"
        };
        var q6="insert into feedback set ?";
        con.query(q6,f4,function(err, result, fields){
            if(err)throw err;
            else
            {
                console.log(result);
                console.log("h");
                res.render('profiles')
              
            }
        });
})
app.post("/quest",function(req,res){

     var f5={
        quest:req.body.quest,
        id:req.body.id,
        type:"passenger",
        qid:"9"
        };
   
        var q7="insert into question set ?";
        con.query(q7,f5,function(err, result, fields){
            if(err)throw err;
            else
            {
                console.log(result);
                console.log("h");
                res.render('profiles')
              
            }
        });
})
app.post("/answ",function(req,res){

    var f6={
       ans:req.body.answ,
       id:req.body.id,
       type:"passenger",
       aid:"7"
       };
  
       var q8="insert into answer set ?";
       con.query(q8,f6,function(err, result, fields){
           if(err)throw err;
           else
           {
               console.log(result);
               console.log("h");
               res.render('profiles')
             
           }
       });
})


app.post("/feedso",function(req,res){
    con.query('select feedback from feedback',function(error,result,fields){
        if(error) throw error;
        else{
            res.render("f1",{d:result});
        }
    })
})

    app.listen(5002,function(){
        console.log("server started")
    })


