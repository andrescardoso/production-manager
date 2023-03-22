import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    op: {
        type: Number,
        required: true,
        trim: true
    },
    fecha: {
        type: String,
        required: true,
        trim: true
    },
    cliente: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        trim: true
    }
    
})

export default mongoose.model('Order', orderSchema);