const express =  require("express")
const app  = express();
app.listen(80); // listening on port 80.
const newConnection = require("./DBConnection");
const mysql = require('mysql2');




app.use(express.static("static")); // routing the static files of the express app to the static file.



//    aaron16@yahoo.com
 //   &x1#M)LeI+

 let employee={};

app.get("/login", (req,res)=>{

    let  conn = newConnection();

    console.log(req.query)

   
    conn.connect((err)=>
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("Connected!")
        }
    })

    var sql = 'SELECT * FROM Employee WHERE email = ' + mysql.escape(req.query.username);
    conn.query(sql, (err, rows, fields)=>{

        if(err)
            console.log(err)
        let content = '';

        console.log(rows)


        if(rows.length==0||req.query.password!=rows[0].employeePassword)
        {
            res.send("Incorrect Credentials Please Try Again!")
        }
        else
        {
           
    
            employee=rows[0];
            res.sendFile(__dirname +  "/static/homePage.html")

        }

      

    });


    

    conn.end()

    
});

app.get("/store", (req, res)=>{

    let  conn = newConnection();

    conn.connect((err)=>
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("Connected!")
        }
    })

    conn.query("select * from Store", (err, rows, fields)=>{

        let content = '';

        console.log(rows.length)

        for(let i = 0; i <rows.length;i++)
        {
            content+=`<div>${rows[i].street} : ${rows[i].city} : ${rows[i].state}</div>`
        }

        res.send(content);

    });

    
   

    conn.end()
});

app.get("/employee", (req, res)=>{

    let content='';

    content+=`<h1> Welcome  ${employee.firstName} ${employee.lastName}</h1>`
   res.send(content)

});