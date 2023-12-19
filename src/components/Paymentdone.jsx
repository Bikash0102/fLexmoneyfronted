import React from 'react'
import '../styles/paymentdone.css';
const Paymentdone = () => {
  return (
    <div class="containers">
    <div class="printer-top"></div>
      
    <div class="paper-container">
      <div class="printer-bottom"></div>
  
      <div class="paper">
        <div class="main-contents">
          <div class="success-icon">&#10004;</div>
          <div class="success-title">
            Payment Complete
          </div>
          <div class="success-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </div>
          <div class="order-details">
            <div class="order-number-label">Order Number</div>
            <div class="order-number">123456789</div>
          </div>
          <div class="order-footer">Thank you!</div>
        </div>
        <div class="jagged-edge"></div>
      </div>
    </div>
  </div>
  )
}

export default Paymentdone