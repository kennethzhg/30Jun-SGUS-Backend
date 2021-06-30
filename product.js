const database = require("./database");

function get_all_products(){
    database.connection.query(`select * from products`, (error, result) => {
            if(error){console.log(error);}
            else{console.log(result)};
})};

function get_product_by_id(id) {
    //  id = 5
    // select * from products where id = 5;
    database.connection.query(`select * from products where id = ${id}`,(error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      }
    );
  }

  function create_new_product(name, price) {
    database.connection.query(
      `insert into products (name, market_price) values ('${name}', '${price}')`,
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Created successfully!");
        }
      }
    );
  }
  
  function delete_product_by_id(id) {
    database.connection.query(
    `delete from products where id = ${id}`,
    (error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Deleted the product successfully!");
        }
      }
    );
  }


function update_price_by_id(id, new_price) {
    database.connection.query(
    `update products set market_price = ${new_price} where id = ${id}`,
    (error, result) => {
        if (error) {
            console.log(error);
          } else {
            console.log("Updated the product price successfully!");
          }
        }
      );
    }


  module.exports = { //whichever file wants to import this file, they can do so!
    get_all_products,
    get_product_by_id,
    create_new_product,
    delete_product_by_id,
    update_price_by_id,
  };
  
