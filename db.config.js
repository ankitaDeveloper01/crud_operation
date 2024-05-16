const datatype =  require('sequelize');
 const Name = 'admin';
 const Password = "adminadmin";


 const sequelize = new datatype(Name, Password,{
     host: "atlas-dev.c4wfursnjbor.ap-south-1.rds.amazonaws.com",
     port:3001,
     dialect: "mysql"

  });

  const db = {}
  db.datatype = datatype
  db.sequelize = sequelize

 module.exports= db;