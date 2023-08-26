const { DataTypes } = require('sequelize');
import { sequelize } from '../../../base/database.connection.js';
console.log("v");
const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  // Sync the model with the database (create the table if it doesn't exist)
  User.sync()
    .then(() => {
      console.log('User table created');
    })
    .catch(error => {
      console.error('Error creating User table:', error);
    });