import {
  FaPinterestSquare,
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="Footer-container">
    <div className="footer-logo">
      <img
        src="https://res.cloudinary.com/dm6yvpose/image/upload/f_auto,q_auto/v1/Tasty%20KitchensApp/jfkbgndrqomek0ieszfu"
        alt="website-footer-logo"
      />
      <h1>Tasty Kitchens</h1>
    </div>
    <p>The only thing we are serious about is food. Contact us on</p>
    <div className="social-icons">
      <FaPinterestSquare data-testid="pintrest-social-icon" />
      <FaInstagram data-testid="instagram-social-icon" />
      <FaTwitter data-testid="twitter-social-icon" />
      <FaFacebookSquare data-testid="facebook-social-icon" />
    </div>
  </div>
)
export default Footer
