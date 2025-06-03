// src/context/CartContext.js
import { createContext, useReducer } from 'react';

export const appContext = createContext()

const initialState = {
    isCartOpen: false,
    cartItems: [],
    total_amount: 0
};

// Calculation function switch ke bahar define karo
function calculation(items, state) {
    const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return {
        ...state,
        cartItems: items,
        total_amount: total
    }
}

function cartReducer(state, action) {

    switch (action.type) {

        case 'close_cart':
            return {
                ...state,
                isCartOpen: false,
            };

        case 'open_cart':
            return {
                ...state,
                isCartOpen: true,
            };

        case "add_to_cart":
            let newitem = action.payload
            let already = state.cartItems.find(ele => ele.un_id === newitem.un_id)

            if (already) {
                let update = state.cartItems.map(item =>
                    item.un_id === newitem.un_id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                return calculation(update, state)
            }
            else {
                let update = [...state.cartItems, newitem]
                return calculation(update, state)
            }

        case "quantity_change":
            let update = action.payload
            console.log(update);
            // Yahan return statement missing tha
            return calculation(update, state)

        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <appContext.Provider value={{ state, dispatch }}>
            {children}
        </appContext.Provider>
    );
}