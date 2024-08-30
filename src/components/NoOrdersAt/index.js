import {Link} from 'react-router-dom'
import './index.css'

const NoOrdersAt = () => (
  <div className="noorders-container">
    <img
      src="https://res.cloudinary.com/dm6yvpose/image/upload/f_auto,q_auto/v1/Tasty%20KitchensApp/ncjmxke7gpg6s0bfueyd"
      alt="empty cart"
      className="no-orders-img"
    />
    <h1>No Order Yet!</h1>
    <p>Your cart is empty. Add something from the menu.</p>
    <Link to="/">
      <button type="button" className="noorder-ordernow-button">
        Order Now
      </button>
    </Link>
  </div>
)
export default NoOrdersAt
