import React from 'react'
import { useOrders } from '../context/orderContext';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const OrdersForm = () => {

  const myContext = useOrders();
  console.log(myContext);
  const { createOrder } = useOrders();
  const navigate = useNavigate();



  return (
    <div className="w-full max-w-xs">

      <Formik
        initialValues={{
          op: '',
          fecha: '',
          cliente: '',
          estado: ''
        }}
        /*
        validationSchema={Yup.object({
          op: Yup.number().required("OP requerida"),
          fecha: Yup.string().required("Fecha requerida"),
          cliente: Yup.string().required("Cliente requerido"),
          estado: Yup.string().required("Estado requerido")
        })}
        */
        onSubmit={async (values, actions) => {
          await createOrder(values);
          navigate('/pedidos');
        }}
      >
        {({ handleSubmit }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className='mb-4'>
              <div className='md:w-1/3'>
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Orden de producción
                </label>
                <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='op' placeholder="op" />
                <ErrorMessage name='op' />
              </div>
              <div className='mb-6'>
                <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='fecha' placeholder="fecha" />
                <ErrorMessage name='fecha' />
              </div>
              <div>
                <Field name='cliente' placeholder="cliente" />
                <ErrorMessage name='cliente' />
              </div>
              <div>
                <Field name='estado' placeholder="estado" />
                <ErrorMessage name='estado' />
              </div>
              <button
                className='rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg'
                type='submit'>Guardar</button>
            </div>

          </Form>
        )}


      </Formik>

    </div>
  )
}

export default OrdersForm;