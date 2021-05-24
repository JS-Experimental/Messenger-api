import {dbConn} from "../db";
import Sequelize from "sequelize";

const {DataTypes} = Sequelize;

export const MessageModel = dbConn.define('Message', {
    // Model attributes are defined here
    messageText: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sender: {
        type: DataTypes.STRING
    },
    senderImage: {
        type: DataTypes.STRING
    }
});