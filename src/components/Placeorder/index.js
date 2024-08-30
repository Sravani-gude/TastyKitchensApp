import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const PlaceOrder = () => (
  <div>
    <Header />
    <div className="place-order-container">
      <img
        src="https://res.cloudinary.com/dm6yvpose/image/upload/f_auto,q_auto/v1/Tasty%20KitchensApp/ma9m1qildncjru9m1pq2"
        alt="success"
      />
      <h1>Payment Successful</h1>
      <p>Thank you for ordering Your payment is successfully completed.</p>
      <Link to="/">
        <button type="button" className="payment-success-btn">
          Go To Home Page
        </button>
      </Link>
    </div>
  </div>
)
export default PlaceOrder
