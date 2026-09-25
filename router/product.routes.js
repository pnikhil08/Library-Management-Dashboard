const express = require("express");

const router = express.Router();

const products = [
    {
        id: 1,
        product: "Mobile Phone",
        name: "Sumsung"
    },
    {
        id: 2,
        product: "Computer",
        name: "Dell"
    }
];

const productList = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 799,
        category: "Electronics",
        stock: 25
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 2499,
        category: "Electronics",
        stock: 18
    },
    {
        id: 3,
        name: "Laptop Stand",
        price: 999,
        category: "Accessories",
        stock: 40
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        price: 1999,
        category: "Electronics",
        stock: 12
    },
    {
        id: 5,
        name: "USB-C Charger",
        price: 899,
        category: "Accessories",
        stock: 30
    },
    {
        id: 8,
        name: "Power Bank",
        price: 1499,
        category: "Accessories",
        stock: 22
    },
    {
        id: 9,
        name: "External SSD",
        price: 5999,
        category: "Storage",
        stock: 8
    },


];

router.get("/", (req, res) => {
    res.json(products);
});

router.get("/list", (req, res) => {
    res.status(200).json(productList);
});

module.exports = router;
