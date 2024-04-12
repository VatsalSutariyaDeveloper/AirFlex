const mongoose = require('mongoose');

const PaymentDetailSchema = new mongoose.Schema({
   
    orderId: {
        type: String,
        required: true,
    },
    totalAmount: {    
        type: Number,
        required: true,
    },
    onlinPaymentId: {
        type: String,
    },
    bankPaymentId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Pendding', 'Paid', 'Cancel'],
        required: true,
        default: 'Pendding'
    }
},
    { 
        timestamps: true ,
        versionKey: false
    }
);

module.exports = mongoose.model('payment_details', PaymentDetailSchema);
