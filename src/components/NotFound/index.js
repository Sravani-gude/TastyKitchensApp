import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div>
      <img
        src="https://res.cloudinary.com/dm6yvpose/image/upload/f_auto,q_auto/v1/Tasty%20KitchensApp/vnxsbxqor21m0supdizi"
        alt="not found"
      />
      <h1>Page Not Found</h1>
      <p>
        we are sorry, the page you requested could not be found Please go back
        to the homepage
      </p>
      <Link to="/">
        <button type="button" className="notfound-button">
          Home Page
        </button>
      </Link>
    </div>
  </div>
)
export default NotFound
