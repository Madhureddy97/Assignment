import './index.css'
import {IoLocationOutline} from 'react-icons/io5'
import GoogleDriveImage from '../GoogleDriveImage'

const UpcomingEvent = props => {
  const {eachEventDetails} = props
  const {cityName, weather, distanceKm, imgUrl} = eachEventDetails

  const distanceInKm = Math.round(distanceKm / 1000)

  return (
    <div className="upcomingevent-container">
      <GoogleDriveImage imageDetails={{imgUrl}} />
      <p className="After-note-text">After note nearly</p>
      <div className="remaining-text">
        <IoLocationOutline />
        <p>{cityName}</p>
        <div className="weather-distance-container">
          <p>{weather} | </p>
          <p> {distanceInKm} Km</p>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvent
