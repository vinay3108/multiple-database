import {Sequelize} from 'sequelize';
import mongoose from 'mongoose';

const sequelize = new Sequelize('open_project', 'root', 'password', {
    host: '127.0.0.1',
    port:8081,
    dialect: 'sqlite'
});

const sequelizeConnection=async(sequelize)=>{

    try {
        await sequelize.authenticate();
        console.log('MYSQL Connection has been established successfully.');
        return sequelize;
        } catch (error) {
        console.error('Unable to connect to the database:MYSQL', error);
        }
}
const mongooseConnection=async()=>{
    try{
        const mongo=await mongoose.connect('mongodb://127.0.0.1:27018/open_project')
        .then(res=>console.log('MONGODB connection established successfully.'))
        .catch(error=>console.error('Unable to connect to the database:',error));
        return mongo;
    }catch (error) {
        console.error('Unable to connect to the database:MONGODB', error);
    }
}
export {
    sequelize,
    sequelizeConnection,
    mongooseConnection
}
