import React, { useState, createContext, useContext } from 'react';
import { getOrdersRequests, createOrderRequest } from '../api/orders';

export const orderContext = createContext();

export const useOrders = () => {
    const context = useContext(orderContext);
    return context;
}

export const OrderContainer = ({ children }) => {

    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        const res = await getOrdersRequests();
        setOrders(res.data);
    }

    const createOrder = async (order) => {
        const res = await createOrderRequest(order);
        setOrders([...orders, res.data]);
    }

    return (
        <orderContext.Provider value={{
            orders,
            setOrders,
            getOrders,
            createOrder
        }}>
            {children}
        </orderContext.Provider>
    )
}