import {Link, withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import {ImMenu} from 'react-icons/im'
import CartContext from '../../context/ShowContext'
import './index.css'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {isShow, cartList, onClickShow} = value
      const cartItemsCount = cartList.length
      const isShowMenu = () => {
        onClickShow(!isShow)
      }
      const onClickLogout = () => {
        Cookie.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      const renderCartItemsCount = () => (
        <>
          {cartItemsCount > 0 ? (
            <span data-testid="active-count" className="cart-count-badge">
              {cartList.length}
            </span>
          ) : null}
        </>
      )
      const className = isShow ? 'ShowItems' : 'collapseItem'

      return (
        <nav className="navigation">
          <div className="logo-card">
            <Link to="/" className="nav-link">
              <img
                src="https://res.cloudinary.com/dm6yvpose/image/upload/f_auto,q_auto/v1/Tasty%20KitchensApp/r5af4v3v1mxqpzdgupqy"
                alt="website logo"
                className="tasty-kitchens-logo"
              />
              <p className="logo-heading">Tasty Kitchens</p>
            </Link>
          </div>
          <ul className="navigation-unordered-list">
            <li className="list-item">
              <Link to="/" className="nav-link">
                <p className="nav-item">Home</p>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/cart" className="nav-link">
                <div className="nav-link-item">
                  <p className="nav-item">Cart</p>
                  {renderCartItemsCount()}
                </div>
              </Link>
            </li>
            <li className="list-item">
              <button
                type="button"
                className="logout-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
          <button
            type="button"
            className="nav-collapse-button"
            onClick={isShowMenu}
          >
            <ImMenu />
          </button>
          <div className={`nav-bar-collapse ${className}`}>
            <ul>
              <Link to="/" className="nav-link">
                <li>Home</li>
              </Link>
              <Link to="/cart" className="nav-link">
                <li>Cart</li>
              </Link>
            </ul>
            <button
              type="button"
              className="logout-button"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      )
    }}
  </CartContext.Consumer>
)
export default withRouter(Header)

// import {Link, withRouter} from 'react-router-dom'
// import Cookie from 'js-cookie'
// import {ImMenu} from 'react-icons/im'
// import CartContext from '../../context/ShowContext'

// import './index.css'

// const Header = props => (
//   <CartContext.Consumer>
//     {value => {
//       const {isShow, cartList, onClickShow} = value
//       const cartItemsCount = cartList.length
//       const isShowMenu = () => {
//         onClickShow(!isShow)
//       }
//       const onClickLogout = () => {
//         Cookie.remove('jwt_token')
//         const {history} = props
//         history.replace('/login')
//       }
//       const renderCartItemsCount = () => (
//         <>
//           {cartItemsCount > 0 ? (
//             <span data-testid="active-count" className="cart-count-badge">
//               {cartList.length}
//             </span>
//           ) : null}
//         </>
//       )
//       const className = isShow ? 'ShowItems' : 'collapseItem'
//       return (
//         <nav className="navigation">
//           <div className="logo-card">
//             <Link to="/" className="nav-link ">
//               <img
//                 src="https://res.cloudinary.com/dm6yvpose/image/upload/f_auto,q_auto/v1/Tasty%20KitchensApp/r5af4v3v1mxqpzdgupqy"
//                 alt="website logo"
//               />
//               <p className="logo-heading">Tasty Kitchens</p>
//             </Link>
//           </div>
//           <ul className="navigation-unordered-list">
//             <li className="list-item">
//               <Link to="/" className="nav-link">
//                 <p className="nav-item">Home</p>
//               </Link>
//             </li>
//             <li className="list-item">
//               <Link to="/cart" className="nav-link">
//                 <div className="nav-link-item">
//                   <p className="nav-item">Cart</p>
//                   {renderCartItemsCount()}
//                 </div>
//               </Link>
//             </li>
//             <li className="list-item">
//               <button
//                 type="button"
//                 className="logout-btn"
//                 onClick={onClickLogout}
//               >
//                 Logout
//               </button>
//             </li>
//           </ul>

//           <div className="nav-bar-mobile-view">
//             <div className="mobile-view-container">
//               <Link to="/" className="nav-link ">
//                 <img
//                   src="https://res.cloudinary.com/dm6yvpose/image/upload/f_auto,q_auto/v1/Tasty%20KitchensApp/r5af4v3v1mxqpzdgupqy"
//                   alt="website logo"
//                 />
//                 <p className="nav-header">Tasty Kitchens</p>
//               </Link>
//               <button
//                 type="button"
//                 className="nav-collapse-button"
//                 onClick={isShowMenu}
//               >
//                 <ImMenu />
//               </button>
//             </div>
//             <div className={className}>
//               <ul>
//                 <Link to="/" className="nav-link">
//                   <li>Home</li>
//                 </Link>
//                 <Link to="/cart" className="nav-link">
//                   <li>Cart</li>
//                 </Link>
//               </ul>
//               <button
//                 type="button"
//                 className="logout-button"
//                 onClick={onClickLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </nav>
//       )
//     }}
//   </CartContext.Consumer>
// )
// export default withRouter(Header)
