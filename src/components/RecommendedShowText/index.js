import './index.css'
import {IoLocationOutline} from 'react-icons/io5'

const RecommendedShowText = props => {
  const {eachListItemDetails} = props
  const {cityName, date, weather, distanceKm} = eachListItemDetails

  const distanceInKm = Math.round(distanceKm / 1000)

  const dateString = date
  const requiredDate = new Date(dateString)
  const options = {month: 'long', day: '2-digit', year: 'numeric'}
  const formattedDate = requiredDate.toLocaleDateString('en-US', options)

  return (
    <div className="recommended-show-text">
      <div className="makeagree-cityname-container">
        <p className="text-styles">Make Agree</p>
        <div className="city-location-container">
          <IoLocationOutline className="location-icon" />
          <p className="text-styles">{cityName}</p>
        </div>
      </div>
      <div className="other-container">
        <p className="text-styles">{formattedDate}</p>
        <div className="weather-distance-container">
          <p className="text-styles">{weather}</p>
          <p className="text-styles">{distanceInKm} Km</p>
        </div>
      </div>
    </div>
  )
}

export default RecommendedShowText
