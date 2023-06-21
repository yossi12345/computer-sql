const sequelize = require("../databases/sequelize")

const {DataTypes}=require("sequelize")

const Computer=sequelize.define('computer',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    manufacturer:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.FLOAT
    },
    memory:{
        type:DataTypes.FLOAT
    }
})
module.exports = Computer