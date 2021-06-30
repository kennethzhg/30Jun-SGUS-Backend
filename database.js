const mysql = require("mysql");

const properties = {
    host:"34.126.172.116",
    user:"root",
    password:"fintechsglab",
    port:3306,
    database:"market",
};

let connection = mysql.createConnection(properties);

connection.connect((error) => {
    if (error) {console.error("Connection to MySQL failed!" + error);}
    else {console.log("Connected to MySQL!");}
});
//if I'm connected, I can't type anything in the terminal. to terminate connection, click anywhere in terminal and input Ctrl+C.

connection.query(
    `select * from products`,
    (error, result) => {
        if(error){
            console.log(error);
        }
        else{console.log(result)};
    }
)

module.exports = {connection,}; //whichever file wants to inmport this file, they can do so!