import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const UserProfile = () => {
  const cartList = useSelector(
    ({ users }) => users.curentUser.cart.orderProdect
  );
  const curentUser = useSelector(({ users }) => users.curentUser.name);
  const curentAddress = useSelector(({ users }) => users.curentUser);
  // const totalAmount = cartList
  //   .map((item) => item.totalPrice)
  //   .reduce((acc, cur) => acc + cur, 1);
  // const totalQuantity = cartList
  //   .map((item) => item.totalQuantity)
  //   .reduce((acc, cur) => acc + cur, 1);
  return (
    <div className="userprofile">
      <div className="order">
        <div>
          <h3>Hi {curentUser}</h3>
        </div>
        {cartList && cartList.length > 0 ? (
          <div className="order-detail">
            <h3>Address</h3>
            <div>
              <h4>{curentUser.name}</h4>
              <p>{curentAddress.cart.addres.email}</p>
              <p>phone number {curentAddress.cart.addres.phone}</p>
              <p>{curentAddress.cart.addres.address}</p>
            </div>
            <div className="order-prodect">
              <h2>Order Prodects</h2>
              {cartList && cartList.length > 0 ? (
                cartList.map((item) => {
                  return (
                    <div key={item.id} className="cartProdect">
                      <img src={item.image} />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>Quantity</p>

                      <p>{item.quantity}</p>

                      <h3>${item.totalPrice}</h3>
                    </div>
                  );
                })
              ) : (
                <p style={{ textAlign: 'center', margin: '20px' }}>
                  No Cart Prodects
                </p>
              )}
            </div>
          </div>
        ) : (
          <p>
            Your order is empty please{' '}
            <Link to="/root" style={{ color: 'blue', textDecoration: 'none' }}>
              purchase
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
export default UserProfile;
