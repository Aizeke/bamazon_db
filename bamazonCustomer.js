var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
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
            console.log("ID: " + data[i].item_id + " Product: " + data[i].product_name + " Price: " + data[i].price + '\n');
        }
    });
};

var purchasePrompt = function() {
    inquirer.prompt([
        {
            type:'number',
            message:"What is the ID of the item you are try to purchase?",
            name: 'productId',
            validate: function(input) {
                if(typeof input !== 'number'){
                    console.log("You need to provide a Number!!");
                    return;
                }
            }
        },
        {
            type: 'number',
            message: "How many units would you like to purchase?",
            name: 'productQty',
            validate: function(input) {
                if(typeof input !== 'number'){
                    console.log("You need to provide a Number!!");
                    return;
                }
            }
        }
    ])
    .then(function(res){
        console.log(res);
    });
}