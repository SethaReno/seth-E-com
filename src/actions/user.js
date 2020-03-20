import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from './types';

export function setPurchaseDetail(_id) {
    
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}


export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
             product: {
             _id: 0,
             title: 'JavaScript in the Browser',
             description: 'The 50 Best Jazz Drummers Of All Time. 8: Gene Krupa (1909-1973) 7: Buddy Rich (1917-1987) 6: Roy Haynes (born 1925) 5: Elvin Jones (1927-2004) 4: Kenny Clarke (1914-1985) 3: Tony Williams (1945-1997) 2: Max Roach (1924-2007) 1: Art Blakey (1919-1990)',
             price: 1.99,
             belongsTo: [0, 1],
             imageUrl: 'http://via.placeholder.com/80x80'
             },
             quantity: 2
            },
            {
                _id: 1,
               product: {
                _id: 1,
                title: 'Graph Database',
                description: 'The 50 Best Jazz Drummers Of All Time. 8: Gene Krupa (1909-1973) 7: Buddy Rich (1917-1987) 6: Roy Haynes (born 1925) 5: Elvin Jones (1927-2004) 4: Kenny Clarke (1914-1985) 3: Tony Williams (1945-1997) 2: Max Roach (1924-2007) 1: Art Blakey (1919-1990)',
                price: 1.99,
                belongsTo: [0, 6],
                imageUrl: 'http://via.placeholder.com/80x80'
               },
               quantity: 1
            },
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 13.40,
                orderNumber: 'Y0008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Tara Gass',
                    shippingAdress: '1234 East State Street'
                }

            },
            {
                _id: 1,
                total: 19.40,
                orderNumber: 'A0008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAdress: '1234 East State Street'
                }

            },
            {
                _id: 2,
                total: 1.30,
                orderNumber: 'A0008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Seth Bomhoff',
                    shippingAdress: '1234 West State Street'
                }

            },
            {
                _id: 3,
                total: 42.40,
                orderNumber: 'BF0008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Alex Pruett',
                    shippingAdress: '1234 Happy State Street'
                }

            },
            {
                _id: 4,
                total: 15.60,
                orderNumber: 'G190008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'R.J Dawe',
                    shippingAdress: '1234 Wilderness Street'
                }

            },
            {
                _id: 5,
                total: 67.00,
                orderNumber: 'G120008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Jeffery Spooner',
                    shippingAdress: '1234 Pine Street'
                }

            },
            {
                _id: 6,
                total: 12.34,
                orderNumber: 'G130008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Jennifer Stine',
                    shippingAdress: '1234 Here To ThereStreet'
                }

            },
            {
                _id: 7,
                total: 15.50,
                orderNumber: 'F190008428383',
                orderDate:  new Date().toDateString(),
                creaditCard: '-000',
                user: {
                    name: 'Troy Bomhoff',
                    shippingAdress: '1234 This Is It Street'
                }

            },
            
            

        ]
    })
}