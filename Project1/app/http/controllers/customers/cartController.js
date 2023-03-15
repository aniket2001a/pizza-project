// function cartController() {
//     return {
//         index(req, res) {
//             res.render('customers/cart')
//         },
//         update(req, res) {
//             // let cart = {
//             //     items: {
//             //         pizzaId: {item: pizzaObject, qty:0},
//             //     },
//             //     totalQty: 0,
//             //     totalPrice: 0
//             // }

//             // For the first time creating cart and adding basic object structure
//             if(!req.session.cart) {
//                 req.session.cart = {
//                     items: {},
//                     totalQty: 0,
//                     totalPrice: 0
//                 }
//             }
//             let cart = req.session.cart
//             // console.log(req.body)

//             // Check if item does not exist in cart
//             if(cart.items[req.body._id]) {
//                 cart.items[req.body._id] = {
//                     item: req.body,
//                     qty: 1
//                 }
//                 cart.totalQty = cart.totalQty + 1;
//                 cart.totalPrice = cart.totalPrice + req.body.price
//             } else {
//                 cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1
//                 cart.totalQty = cart.totalQty + 1
//                 cart.totalPrice = cart.totalPrice + req.body.price
//             }
//             return res.json({totalQty: req.session.cart.totalQty})
//         }
//     }
// }

// module.exports = cartController






function cartController() {
    return {
        index(req, res) {
            res.render('customers/cart')
        },
        update(req, res) {
            // Check if the cart object exists in the session. If it doesn't, create a new cart object.
            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0
                };
            }

            let cart = req.session.cart;

            // Check if the item already exists in the cart. If it does, increment its quantity. If it doesn't, add it as a new item.
            if (cart.items[req.body._id]) {
                cart.items[req.body._id].qty++;
            } else {
                cart.items[req.body._id] = {
                    item: req.body,
                    qty: 1
                };
            }

            // Update the total quantity and price properties in the cart.
            cart.totalQty++;
            cart.totalPrice += req.body.price;

            // Send a JSON response with the updated totalQty value in the user's session cart.
            return res.json({totalQty: req.session.cart.totalQty});
        }
    };
}

module.exports = cartController;
