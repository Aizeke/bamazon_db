USE bamazon_db;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Eureka NES210 Blaze 3-in-1 Swivel Lightweight Stick Vacuum Cleaner","Appliances", 29.99, 84),
("Aroma Housewares 8-Cup Digital Rice Cooker and Food Steamer","Home & Kitchen", 36.63, 102),
("iSteam Steamer for Clothes Powerful Handheld Portable Steam Iron","Appliances", 25.99, 60),
("Smart WiFi Light Bulb Multicolor LUMIMAN 2 Pack","Tools & Home Improvement", 24.99, 120),
("Grimm's Complete Fairy Tales","Books", 17.48, 51),
("Crocs Men's and Women's Classic Clog","Clothing, Shoes & Jewelry", 17.98, 218),
("LG OLED65C9PUA Alexa Built-in C9 Series 65 inch 4K Ultra HD Smart OLED TV ","Electronics", 2796.99, 207),
("Apple TV 4K (64GB, Latest Model)","Electronics", 199.00, 508),
("HATCHBOX PLA 3D Printer Filament","Industrial & Scientific", 19.99, 189),
("Bubi Bubi Lip: Remove Lip Dead Skin Bubble Scrub","Beauty & Personal Care", 11.50, 145);

SELECT * FROM products;