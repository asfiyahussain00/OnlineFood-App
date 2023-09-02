const { Schema, model } = require('mongoose')

const orderSchema = new Schema(

    {
        items :{
            type: Array,
            require: true
        }, 
        CustomerEmail : {
            type : String,
            require: true
        },
         CustomerName: {
            type : String,
            require: true
         }, 
         CoutomerAddress : {
            type : String,
            require: true
         }, 
         CustomerContact : {
            type : String,
            require: true
         }, 
         DelieveryCharges : {
            type : String,
            require: true
         }, 
         TotalBill : {
            type : String,
            require: true
         },
         order_at : {
            type : Date,
            default : Date.now
         },
         Status : {
            type: String,
            require: true
         }
         
    }
)

const Order = model ('order', orderSchema)
module.exports = Order