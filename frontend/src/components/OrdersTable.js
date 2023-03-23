import React from 'react';

import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { useOrders } from '../context/orderContext';

function OrdersTable(props) {

  const { deleteOrder } = useOrders();
  const navigate = useNavigate();

  const handleEdit = (_id) => {
    navigate(`/orders/${_id}`);
  }

  const handleDelete = (_id, op) => {
    toast((t) => (
      <div className='text-white'>
        <p className='mb-2'>Estás seguro? <strong>OP número {op}</strong></p>
        <div>
          <button className='bg-red-500 hover:bg-red-0 px-3 py-2 text-sm text-white rounded-sm mx-2' onClick={() => { deleteOrder(_id); toast.dismiss(t.id) }}>Confirmar</button>
          <button className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2' onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ), {
      style: {
        background: "#202020"
      }
    })
  }

  return (
    <div className='container my-5'>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>OP</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            props.orders.map(order => (
              <tr key={order._id}>
                <td>{order.op}</td>
                <td>{order.fecha}</td>
                <td>{order.cliente}</td>
                <td>{order.estado}</td>
                <td><button onClick={() => handleDelete(order._id, order.op)} className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Eliminar</button>
                  <button onClick={() => handleEdit(order._id)} className="px-3 mx-2 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Editar</button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default OrdersTable;