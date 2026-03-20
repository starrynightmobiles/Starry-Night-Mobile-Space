module.exports = {

     createPayment(order){

       return {
          status:"created",
             paymentUrl:`https://paynow.co.zw/pay/${order._id}`
               }

                }

                } 
}
