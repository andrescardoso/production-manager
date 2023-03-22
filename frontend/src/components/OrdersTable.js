import Table from 'react-bootstrap/Table';

function OrdersTable(props) {
  return (
    <div className='container'>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>OP</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Estado</th>
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
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default OrdersTable;