import axios from 'axios';

export const getOrdersRequests = async () => await axios.get('/orders');

export const createOrderRequest = async (order) => await axios.post('/orders', order);