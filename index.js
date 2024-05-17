const express = require('express')
const app = express();
// app.use(bodyParser.json()
const db = require('./models');
const { where } = require('sequelize');


 app.use(express.json());
 app.use(express.urlencoded({
    extended: false
 }))
// app.get('/select' ,  (req,res)=>{   //
//     res.send('select')
// });

app.post("/insert" ,async (req, res) =>{// insert a data in table 
   try {
    const data  = req.body;
    console.log(data);
    const admin = await db.admin.create(data);
    res.send("successfully execute a data");
   } catch (err){
    res.send(err)
   }
});


// update operation use 
app.put('/admins/:id' , async (req, res) =>{
    const id = req.params.id;
    const  data = req.body;

    try{
        const updateCount =  await db.admin.update(data,{
            where :{
                id
            }
        });

        res.send("admins table update");
         }
         catch(err){
            res.send(err);
         
    }
});
//es.send("insert")
// app.post('/insert' ,  (req,res)=>{   //
//     res.send('insert')
// });


// read operation use 

app.get('/admins/:id', async (req, res) =>{
    const id =  req.params.id;

    try{
        const readCoount = await db.admin.findOne({
            where : {
                id

            }
        });
        res.send(readCoount);
    }
    catch(err){
        res.send(err);
    }
});

//   // delete a perticular row in table 
app.delete('/admins/:id' ,async  (req,res)=>{
    const id = req.params.id;

    try{
        const  deletedCount = await db.admin.destroy({
            where:{
                id 
            }
        });

        if(deletedCount==0){
            res.send('no recorde were deleted');
        }
        else{
            res.send(' number of records were deleted');
        }
    }   //
    catch(err){
        res.send(err);
    }
    res.send('delete')
});





// const db = require('./models');

// User.sync({force: true});
db.sequelize.sync().then((req)=> {

app.listen(3001,()=>{
    console.log('server is running')
})  
    
})