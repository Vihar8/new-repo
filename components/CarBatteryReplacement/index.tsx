// components/CarBatteryReplacement.tsx
import React from 'react';

const CarBatteryReplacement: React.FC = () => {
  return (
    <div className="container">
      <h2>Car Battery <span>Replacement In Minutes</span></h2>
      <p>GET A CAR BATTERY OR CAR JUMP-START ON THE SPOT</p>
      <div className="info-cards">
        <div className="info-card">
          <div className="icon">📞</div>
          <div className="text">
            <h3>
              <a href="tel:9426636250">9426636250</a>
            </h3>
            <p>Call us toll-free if your car is not starting. Share your car model, and year. We’ll immediately dispatch assistance to you.</p>
          </div>
        </div>
        <div className="info-card">
          <div className="icon">📍</div>
          <div className="text">
            <h3>30 Minutes</h3>
            <p>is what it takes our technicians to reach your location. Once there, they will check your car and test your car battery.</p>
          </div>
        </div>
        <div className="info-card">
          <div className="icon">🔋</div>
          <div className="text">
            <h3>Car Battery</h3>
            <p>replacement is done if needed, or a jump-start to your car. Pay securely and drive away.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          text-align: center;
          color: #fff;
          background-color: #001f3f;
          padding: 20px;
        }
        h2 {
          font-size: 24px;
        }
        h2 span {
          color: #ffcc00;
        }
        .info-cards {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }
        .info-card {
          background: #fff;
          color: #000;
          border-radius: 8px;
          padding: 15px;
          max-width: 300px;
        }
        .icon {
          font-size: 36px;
          margin-bottom: 10px;
        }
        .text h3 {
          font-size: 18px;
          color: red;
        }
        .text h3 a {
          color: red;
          text-decoration: none;
        }
        .text h3 a:hover {
          text-decoration: underline;
        }
        .text p {
          font-size: 14px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default CarBatteryReplacement;
