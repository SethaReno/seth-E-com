import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function CartButton({className}) {
    return (
        <div className={`${className} cart-button`}>
           <FontAwesomeIcon icon={faTimes}/>
        </div>
    )
}

function CartContent({className, products}) {
    let count = products.length;
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                    Cart ({count})
                </div>
                <div className='cart-content__products'>

                    </div>
                    <div className='cart-content__footer'>

                    </div>

        </div>
    )
}

class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
        
                <CartButton className='shop-cart__toggle'/>
                <CartContent className='shop-cart__content' products={[43,3434, 4554]}/>
            </div>
        )
    }
}

export default ShopCart;
