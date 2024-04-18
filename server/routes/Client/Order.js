const express = require("express");
const router = express.Router();
const OrderController = require("../../controllers/Client/OrderController");

router.post("/genrate-orderid", OrderController.genrateOrderId); 
router.post("/verify-payment", OrderController.verifyPayment); 
router.get("/", OrderController.index); 
router.post("/", OrderController.store); 
router.get("/:id", OrderController.show); 
router.put("/status/:id", OrderController.statusChnage);
router.delete("/:id", OrderController.delete);
router.get("/count", OrderController.counts); 

module.exports = router;
