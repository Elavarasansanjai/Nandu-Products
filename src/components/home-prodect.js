import React from 'react';
import HomePage from './Homepage';

const HomeProdect = ({ Pname, PPrice, PDetail }) => {
  return (
    <div className="home-prodect">
      <div className="prodect-container">
        <img src="https://tse1.mm.bing.net/th?id=OIP.Up56c2HxweRvT3hncOadCwHaFD&pid=Api&P=0&h=180   " />
        <h3>{Pname}</h3>

        <p>{PDetail}</p>
        <p>
          <span>$</span>
          {PPrice}
        </p>
      </div>
    </div>
  );
};

export default HomeProdect;
