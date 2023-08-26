import express from 'express';
const app=express();
// import userRoute from './routes/user/user.routes.js';
import {sequelize,sequelizeConnection,mongooseConnection} from './base/database.connection.js';

app.get('/', (req, res)=>{
    res.send("welcome");
})

// app.use('/user',userRoute);
const serverStart=async()=>{
    // await sequelizeConnection(sequelize).then(()=>{

        mongooseConnection().then(()=>{

            app.listen(3002,()=>{
                console.log('listening on port 3002');
            })

        }).catch(err=>{console.log('db error in mongodb'+err)});

    // }).catch(err=>{console.log("conection error in mySql "+err)});

}
serverStart();