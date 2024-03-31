import './index.css'
import {
  IoSearchOutline,
  IoPersonOutline,
  IoLocationOutline,
} from 'react-icons/io5'
import {IoMdHeartEmpty, IoIosHeartEmpty} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => (
  <div className="header-bgcontainer">
    <div className="HeaderFirstLine">
      <div>
        <h1 className="book-us-now">BookUsNow</h1>
      </div>
      <div className="categories-input-container">
        <button className="categories-button" type="button">
          <span>
            <GiHamburgerMenu className="hamburger-icon" />
          </span>
          Categories
        </button>
        <input type="search" />
      </div>
      <div className="fav-signin-container">
        <IoIosHeartEmpty className="heart-icon" />
        <p>Favorites</p>
        <button type="button" className="signin-button">
          Sign in
        </button>
      </div>
      <div className="icons-container">
        <IoSearchOutline className="header-icon" />
        <IoMdHeartEmpty className="header-icon" />
        <IoPersonOutline className="header-icon" />
      </div>
    </div>

    <div className="HeaderSecondLine">
      <div className="location-mumbai-text">
        <IoLocationOutline />
        <p className="place-text">Mumbai,India</p>
      </div>
      <ul className="list-items">
        <li className="list-item">Live shows</li>
        <li className="list-item">Streams</li>
        <li className="list-item">Movies</li>
        <li className="list-item">Plays</li>
        <li className="list-item">Events</li>
        <li className="list-item">Sports</li>
        <li className="list-item">Activities</li>
      </ul>
    </div>
  </div>
)

export default Header
