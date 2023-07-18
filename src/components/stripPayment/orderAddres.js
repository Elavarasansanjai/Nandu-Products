import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addAddress } from '../store/script';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const OrderAddress = () => {
  const [err, setErr] = useState();
  const dispatch = useDispatch(false);
  const navigate = useNavigate();
  const totalAmount = useSelector(
    ({ users }) => users.curentUser.cart.totalPrice
  );
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const address = e.target[3].value;

    const checkaName = isNaN(name.split('')[0]);
    console.log(phone.length);
    if (checkaName && email && phone.length === 10 && address.length > 10) {
      dispatch(
        addAddress({
          name,
          email,
          phone,
          address,
        })
      );
      navigate('/root/strip');
    } else {
      setErr(true);
    }
  };
  return (
    <div className="orederAddres">
      <form onSubmit={submitHandler} className="formcontainer">
        <h2>Shipping Address</h2>
        <div>
          <label>Name</label>
          <input required type="text" placeholder="Name" />
        </div>
        <div>
          <label>Email</label>
          <input required type="email" placeholder="Email" />
        </div>
        <div>
          <label>Phone</label>
          <input required type="number" placeholder="Phone Number" />
        </div>
        <div>
          <label>Address</label>
          <textarea placeholder="Enter Your Address" />
        </div>
        <button>Make Payment ${totalAmount}</button>
        {err && (
          <p style={{ color: 'red', fontSize: '13px' }}>
            something went wrong please check input value
          </p>
        )}
      </form>
    </div>
  );
};

export default OrderAddress;
