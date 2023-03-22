import Order from '../models/Order.js';

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.send(orders);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const createOrder = async (req, res) => {
    try {
        const { op, fecha, cliente, estado } = req.body;
        const newOrder = new Order({ op, fecha, cliente, estado });
        await newOrder.save();
        return res.json(newOrder);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(order);
        return res.send(updatedOrder);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const removedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!removedOrder) return res.sendStatus(404);
        return res.sendStatus(204);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.sendStatus(404);
        return res.json(order);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};