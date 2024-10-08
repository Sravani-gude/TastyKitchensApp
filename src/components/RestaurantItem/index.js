import {BsFillStarFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './index.css'

const RestaurentItem = props => {
  const {list} = props
  const {id, imgUrl, name, cuisine, userRating} = list
  const {rating, total_reviews} = userRating // Corrected totalReviews to total_reviews

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-item-nav-link">
      <li className="Restaurant-list-item" data-testid="restaurant-item">
        <div className="restaurant-details">
          <img
            src={imgUrl}
            alt="restaurant"
            className="restaurant-image-width"
          />
          <div className="restaurant-description">
            <h1 className="restaurant-name">{name}</h1>
            <p className="cuisine-type">{cuisine}</p>
            <div className="rating">
              <BsFillStarFill color="#F7931E" />
              <p>{rating}</p>
              <p className="total-reviews">({total_reviews} reviews)</p>{' '}
              {/* Updated total_reviews */}
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurentItem
























// import {BsFillStarFill} from 'react-icons/bs'
// import {Link} from 'react-router-dom'
// import './index.css'

// const RestaurentItem = props => {
//   const {list} = props
//   const {id, imgUrl, name, cuisine, userRating} = list
//   const {rating, totalReviews} = userRating // Added totalReviews

//   return (
//     <Link to={`/restaurant/${id}`} className="restaurant-item-nav-link">
//       <li className="Restaurant-list-item" data-testid="restaurant-item">
//         <div className="restaurant-details">
//           <img
//             src={imgUrl}
//             alt="restaurant"
//             className="restaurant-image-width"
//           />
//           <div className="restaurant-description">
//             <h1 className="restaurant-name">{name}</h1>
//             <p className="cuisine-type">{cuisine}</p>
//             <div className="rating">
//               <BsFillStarFill color="#F7931E" />
//               <p>{rating}</p>
//               <p className="total-reviews">({totalReviews} reviews)</p>{' '}
//               {/* Displaying total reviews */}
//             </div>
//           </div>
//         </div>
//       </li>
//     </Link>
//   )
// }

// export default RestaurentItem



























// import {BsFillStarFill} from 'react-icons/bs'
// import {Link} from 'react-router-dom'
// import './index.css'

// const RestaurentItem = props => {
//   const {list} = props
//   const {id, imgUrl, name, cuisine, userRating} = list
//   const {rating} = userRating
//   return (
//     <Link to={`/restaurant/${id}`} className="restaurant-item-nav-link">
//       <li className="Restaurant-list-item" data-testid="restaurant-item">
//         <div className="restaurant-details">
//           <img
//             src={imgUrl}
//             alt="restaurant"
//             className="restaurant-image-width"
//           />
//           <div className="restaurant-description">
//             <h1 className="restaurant-name">{name}</h1>
//             <p className="cuisine-type">{cuisine}</p>
//             <div className="rating">
//               <BsFillStarFill color="#F7931E" />
//               <p>{rating}</p>
//             </div>
//           </div>
//         </div>
//       </li>
//     </Link>
//   )
// }
// export default RestaurentItem
