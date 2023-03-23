import React, { useState, createContext, useContext, useEffect } from 'react';
import { getOrdersRequests, createOrderRequest, deleteOrderRequest, getOrderRequest, updateOrderRequest } from '../api/orders';

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

    const deleteOrder = async (id) => {
        const res = await deleteOrderRequest(id);
        if (res.status === 204) {
            setOrders(orders.filter((order) => order._id !== id));
        }
    }

    const getOrder = async (id) => {
        const res = await getOrderRequest(id);
        return res.data;
    }

    const updateOrder = async (id, order) => {
        const res = await updateOrderRequest(id, order);
    }

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <orderContext.Provider value={{
            orders,
            setOrders,
            getOrders,
            createOrder,
            deleteOrder,
            getOrder,
            updateOrder
        }}>
            {children}
        </orderContext.Provider>
    )
}