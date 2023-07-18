import React from 'react';
import HomeProdect from './home-prodect';

const HomePage = () => {
  const homeProdect = [
    {
      Pname: 'Carrot',
      PDetail: 'Completely Free to Use High-quality',
      PPrice: '35',
    },
    {
      Pname: 'Banana',
      PDetail: 'Completely Free to Use High-quality',
      PPrice: '55',
    },
    {
      Pname: 'Orange',
      PDetail: 'Completely Free to Use High-quality',
      PPrice: '65',
    },
    {
      Pname: 'Apple',
      PDetail: 'Completely Free to Use High-quality',
      PPrice: '190',
    },
  ];
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>The Fastest</h2>
        <h2>
          Delivery in <span>Your</span>
        </h2>
        <h2>
          <span>City</span>
        </h2>
        <p>
          Choose from a wide range of cuisines and categories for food delivery.
          Get fresh home delivered food at your doorstep from FreshMenu. Order
          food online from FreshMenu.
        </p>
      </div>

      <div className="homeprodect">
        {homeProdect.map((prodect) => {
          return (
            <HomeProdect
              Pname={prodect.Pname}
              PDetail={prodect.PDetail}
              PPrice={prodect.PPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
