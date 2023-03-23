import axios from 'axios';

export const getOrdersRequests = async () => await axios.get('/orders/');

export const createOrderRequest = async (order) => await axios.post('/orders/', order);

export const deleteOrderRequest = async (id) => await axios.delete('/orders/' + id);

export const getOrderRequest = async (id) => await axios.get('/orders/' + id);

export const updateOrderRequest = async (id, newFields) => await axios.put('/orders/' + id, newFields);