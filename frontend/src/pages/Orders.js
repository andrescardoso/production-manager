import React, { useEffect } from 'react'
import OrdersTable from '../components/OrdersTable'
import { useOrders } from '../context/orderContext';


const Orders = () => {

  const { orders, getOrders } = useOrders();

  useEffect(() => {
    getOrders();
  }, [])

  return (
    <div><OrdersTable orders={orders} /></div>
  )
}

export default Orders