import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder, payOrder } from '../actions/orderActions';
import LoadingPage from '../components/LoadingPage';
import MessagePage from '../components/MessagePage';
import { useParams } from "react-router";
import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { ORDER_PAY_RESET } from '../constants/orderConstants';


export default function OrderScreen(props) {
    const params = useParams(); 
  const orderId=params.id;

  const [sdkReady, setSdkReady] = useState(false);
  //const orderDetails=useSelector((state)=>state.orderDetails);

  //const { order, loading, error } = orderDetails;
  //const dispatch= useDispatch();
   
//  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay= useSelector((state)=> state.orderPay);
  const {loading: loadingPay, 
    error:errorPay, 
    success:successPay} = orderPay;

  const dispatch = useDispatch();
  useEffect(() => {
    

  //add paypal script
  const addPayPalScript = async () => {
    const { data } = await Axios.get('/api/config/paypal');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };
  if (!order || successPay || (order && order._id !== orderId)) {
    
    dispatch({type:ORDER_PAY_RESET})
    dispatch(detailsOrder(orderId));
  } else {
    if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }
}, [dispatch, order, orderId, sdkReady,successPay]);

const successPaymentHandler = (paymentResult) => {
  dispatch(payOrder(order, paymentResult))  
};

  return loading ? (
    <LoadingPage></LoadingPage>
  ) : error ? (
    <MessagePage variant="danger">{error}</MessagePage>
  ) : (
    <div>
      <h1>Order {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessagePage variant="success">
                    Delivered at {order.deliveredAt}
                  </MessagePage>
                ) : (
                  <MessagePage variant="danger">Not Delivered</MessagePage>
                )}
              </div>
            </li>
            <li>
              <div className="card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessagePage variant="success">
                    Paid at {order.paidAt}
                  </MessagePage>
                ) : (
                  <MessagePage variant="danger">Not Paid</MessagePage>
                )}
              </div>
            </li>
            <li>
              <div className="card-body">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="">
                  <div>Items</div>
                  <div>${order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>${order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${order.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>${order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>

              {!order.isPaid && (
                <li>
                  {!sdkReady ? (
                    <LoadingPage></LoadingPage>
                  ) : (
                  
                    <>
                      {errorPay && (
                        <MessagePage variant="danger">{errorPay}</MessagePage>
                      )}
                      {loadingPay && <LoadingPage></LoadingPage>}

                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    ></PayPalButton>
                    </>
                  )}
                </li>
              )}

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}