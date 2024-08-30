import Header from '../Header'
import OfferSection from '../OfferSection'
import Restaurant from '../Restaurant'
import Footer from '../Footer'
import './index.css'

const HomeRoute = () => (
  <div className="home-container">
    <Header />
    <OfferSection />
    <Restaurant />
    <Footer />
  </div>
)
export default HomeRoute
