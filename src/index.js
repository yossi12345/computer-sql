const port=process.env.PORT
const app=require("./app")
const sequelize=require("./databases/sequelize")
sequelize.sync()
    .then(()=>{
        app.listen(port,async ()=>{
            console.log("Server connected, port:",port)
        
        })
    })
    .catch((err)=>(console.log(err)))