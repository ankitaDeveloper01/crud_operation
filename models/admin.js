module.exports=  (sequelize, DataTypes) => {
const admin = sequelize.define('admin',{
    firstname:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        },

    },

    age:{
        
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty:true,
            isInt: true
        },
    }
});
return admin;
}