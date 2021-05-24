import {Sequelize} from "sequelize";

export const dbConn = new Sequelize('messenger', 'username', 'password', {
    dialect: 'sqlite',
    storage: 'storage/sqlite/db.sqlite',
    dialectOptions: {
        // Your sqlite3 options here
    }
});

try {
    dbConn.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}