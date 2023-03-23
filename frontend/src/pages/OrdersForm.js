import React, { useEffect, useState } from 'react'
import { useOrders } from '../context/orderContext';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

const OrdersForm = () => {

  const myContext = useOrders();
  console.log(myContext);
  const { createOrder, getOrder, updateOrder } = useOrders();
  const navigate = useNavigate();
  const params = useParams();
  const [order, setOrder] = useState({
    op: '',
    fecha: '',
    cliente: '',
    estado: ''
  })

  useEffect(() => {
    (async () => {
      if (params.id) {
        const data = await getOrder(params.id);
        setOrder(data);
      }
    })();
  }, []);

  return (
    <div className="w-full max-w-xs">
      <Formik
        initialValues={order}
        /*
        validationSchema={Yup.object({
          op: Yup.number().required("OP requerida"),
          fecha: Yup.string().required("Fecha requerida"),
          cliente: Yup.string().required("Cliente requerido"),
          estado: Yup.string().required("Estado requerido")
        })}
        */
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateOrder(params.id, values);
          } else {
            await createOrder(values);
          }
          navigate('/pedidos');
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Orden de producción
              </label>
              <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='op' placeholder="Numero de OP" />
              <ErrorMessage name='op' />
              <div className='mb-6'>
                <label className="mt-6 block text-gray-700 text-sm font-bold mb-2">
                  Fecha
                </label>
                <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='fecha' placeholder="Fecha del pedido" />
                <ErrorMessage name='fecha' />
              </div>
              <div>
                <label className="mt-6 block text-gray-700 text-sm font-bold mb-2">
                  Cliente
                </label>
                <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='cliente' placeholder="Nombre del cliente" />
                <ErrorMessage name='cliente' />
              </div>
              <div>
                <label className="mt-6 block text-gray-700 text-sm font-bold mb-2">
                  Estado
                </label>
                <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='estado' placeholder="Estado del pedido" />
                <ErrorMessage name='estado' />
              </div>
              <div className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                <button
                  className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type='submit'
                  href='/pedidos'>Guardar</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default OrdersForm;