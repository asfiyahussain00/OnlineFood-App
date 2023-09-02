const nodemailer = require("nodemailer");
require('dotenv').config()
const Mailgen = require('mailgen');
const {connect} = require('mongoose')
const Order = require('./Model')

const demomail = async (req, res) =>{
    const {email, customerName} = req.body

    if(!email || !customerName) {
        res.status(403).json({
            message: "Please Give Your Email"
        })
    }
    else{
const config = {
    service : 'gmail',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  }
        const transporter = nodemailer.createTransport(config);
        var mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                // Appears in header & footer of e-mails
                name: 'FOOdiE',
                link: 'https://mailgen.js/'
                    }
        });
        var mailSenEmail = {
            body: {
                greeting: 'Hiii',
                name: customerName,
                intro: 'Welcome to FOOdiE! We\'re very excited to have you on board.',
                table: {
                    data: [
                        {
                            name : customerName,
                            email : email,
                            token : 12345
                        }]
                    },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };




       const response = {
            from: process.env.NODEMAILER_EMAIL, // sender address
            to: email, // list of receivers
            subject: " Good News! Your Food order (#650050) has shipped and arrived only 30-40 minutes", // Subject line
            text: "Hello world?", // plain text body
            html: mailGenerator.generate(mailSenEmail), // html body
          }
       try {
        await transporter.sendMail(response);

        res.json({message:'Check your Email'})

       } catch (error) {
        
        res.status(500).json({error})
       }
    }

}

const addOrders = async(req, res) => {
    
      const {items, CustomerEmail, CustomerName, CoutomerAddress, CustomerContact, DelieveryCharges, TotalBill, Status} = req.body 
if(!items || !CustomerEmail || !CustomerName || !CoutomerAddress || !CustomerContact || !DelieveryCharges || !TotalBill || !Status)
{
    res.status(403).json({message: "Invalid payload"})
}
else{

try {

    await connect (process.env.MONGO_URI)
    const order= await Order.create({items, CustomerEmail, CustomerName, CoutomerAddress, CustomerContact, DelieveryCharges, TotalBill, Status})
   
   // Email
   const transporter = nodemailer.createTransport({
       service : 'gmail',
       auth: {
         // TODO: replace `user` and `pass` values from <https://forwardemail.net>
         user: process.env.NODEMAILER_EMAIL,
         pass: process.env.NODEMAILER_PASSWORD,
       },
     });
   //   Mail Generator Setup
   var mailGenerator = new Mailgen({
       theme: 'default',
       product: {
           // Appears in header & footer of e-mails
           name: 'FOOdI',
           link: 'https://mailgen.js/'
               }
   });
    
     await transporter.sendMail({
       from: process.env.NODEMAILER_EMAIL, // sender address
       to: CustomerEmail, // list of receivers
       subject: " Good News! Your Food order (#650050) has shipped and arrived only 30-40 minutes", // Subject line
       text: "Hello world?", // plain text body
       html: mailGenerator.generate( {
           body: {
               greeting: 'Hiii',
               name: CustomerName,
               intro: 'Welcome to FOOdI! ThankYou for Choosing FOOdiE for your culinary cravings. We\'re excited to confirm your order. Below are the details of your mouthwatering selections ',
               table: {
                   data: [
                       {
                        TrackingId : order._id,
                           name : CustomerName,
                           email : CustomerEmail,
                           Address : CoutomerAddress,
                           Contact : CustomerContact,
                           TotalBill: TotalBill,
                           
                       }],
                   },
               outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
           }
       }
   
       ), // html body
     });
   res.status(201).json({
       message : "Order is Successfully",
   TrackingId : order._id
   })
    
} catch (error) {
    res.status(403).json({message : error.message})
}
}
    } 
   
    const allOrders = async (req, res) => {

        try {
            await connect(process.env.MONGO_URI)
            const order = await Order.find()
            res.json({order})

        } catch (error) {
            res.status(403).json({message: error.message})
        }
    }

    const orderById = async (req, res) => {
        const {_id} = req.query
                try {
                    await connect(process.env.MONGO_URI)
                    const order = await Order.findOne({_id})
                    res.json({order})
        
                } catch (error) {
                    res.status(403).json({message: error.message})
                }
            }
 

module.exports={demomail, addOrders, allOrders, orderById}