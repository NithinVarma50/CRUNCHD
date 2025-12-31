import React, { createContext, useContext, useState, ReactNode } from 'react';

type CartItem = {
    name: string;
    price: string;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (index: number) => void;
    cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => [...prev, item]);
    };

    const removeFromCart = (index: number) => {
        setCart((prev) => prev.filter((_, i) => i !== index));
    };

    // Helper to parse price string "₹129" -> 129
    const cartTotal = cart.reduce((total, item) => {
        const priceNumber = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 0;
        return total + priceNumber;
    }, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
