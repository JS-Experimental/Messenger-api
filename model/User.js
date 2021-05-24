import {dbConn} from "../db";
import Sequelize from "sequelize";
// const {DataTypes} = require("sequelize");

const {DataTypes} = Sequelize;

export const User = dbConn.define('User', {
    // Model attributes are defined here
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
});