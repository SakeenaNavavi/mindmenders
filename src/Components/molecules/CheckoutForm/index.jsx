import React from 'react';

const CheckoutForm = () => {
  return (
    <div className="row form-row">
      <div className="col-50">
        <h3>Payment</h3>
        <label htmlFor="fname">Accepted Cards</label>
        <div className="icon-container">
          <i className="fa fa-cc-visa" style={{ color: 'navy' }}></i>
          <i className="fa fa-cc-amex" style={{ color: 'blue' }}></i>
          <i className="fa fa-cc-mastercard" style={{ color: 'red' }}></i>
          <i className="fa fa-cc-discover" style={{ color: 'orange' }}></i>
        </div>
        <label htmlFor="cname">Name on Card</label>
        <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
        <label htmlFor="ccnum">Credit card number</label>
        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
        <label htmlFor="expmonth">Exp Month</label>
        <input type="text" id="expmonth" name="expmonth" placeholder="September" />

        <div className="row">
          <div className="col-50">
            <label htmlFor="expyear">Exp Year</label>
            <input type="text" id="expyear" name="expyear" placeholder="2018" />
          </div>
          <div className="col-50">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="352" />
          </div>
        </div>
      </div>

      <label>
        <input type="checkbox" checked={true} name="sameadr" /> Shipping address same as billing
      </label>
      <input type="submit" value="Continue to checkout" className="btn" />
    </div>
  );
};

const CartSummary = () => {
  return (
    <div className="col-25">
      <div className="container cart">
        <h4>
          Cart
          <span className="price" style={{ color: 'black' }}>
            <i className="fa fa-shopping-cart"></i>
            <b>4</b>
          </span>
        </h4>
        <p>
          <a href="#">Product 1</a> <span className="price">$15</span>
        </p>
        <p>
          <a href="#">Product 2</a> <span className="price">$5</span>
        </p>
        <p>
          <a href="#">Product 3</a> <span className="price">$8</span>
        </p>
        <p>
          <a href="#">Product 4</a> <span className="price">$2</span>
        </p>
        <hr />
        <p>
          Total{' '}
          <span className="price" style={{ color: 'black' }}>
            <b>$30</b>
          </span>
        </p>
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <div>
      <CheckoutForm />
      <CartSummary />
    </div>
  );
};

export default CheckoutPage;
