var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '%I_Met_The_Devil_In_Miami%',
    database: 'bamazon_db'
});

connection.connect(function (err) {
    if (err) throw err;

    showData();
});

var showData = function () {

    connection.query('SELECT * FROM products', function (err, data) {
        if (err) throw err;

        for (var i = 0; i < data.length; i++) {
            console.log("ID: " + data[i].item_id + '\n' + "Product: " + data[i].product_name + "\nPrice: " + data[i].price + '\n');
        }

        purchasePrompt();
    });
};

var purchasePrompt = function() {
    inquirer.prompt([
        {
            type:'input',
            message:"What is the ID of the item you are try to purchase?",
            name: 'productId'
        },
        {
            type: 'input',
            message: "How many units would you like to purchase?",
            name: 'productQty'
        }
    ])
    .then(function(res){

        var id = parseInt(res.productId);
        var qty = parseInt(res.productQty);

        connection.query('SELECT stock_quantity, price FROM products WHERE item_id=' + id, function(err, response){
            if(err) throw err;

            var stock = response[0].stock_quantity;

            if(qty > stock){
                console.log("There is an insufficient amount of stock in our warehouse!");
                purchasePrompt();
            } else{
                connection.query(`UPDATE products SET stock_quantity = ${stock-=qty} WHERE item_id=${id}`, function(err){
                    if(err) throw err;
                    console.log("Purchase went through\nTotal: $" + response[0].price);
                    connection.end();
                })
            }
        });

    });
}