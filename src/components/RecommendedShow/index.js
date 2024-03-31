import './index.css'
import GoogleDriveImage from '../GoogleDriveImage'
import RecommendedShowText from '../RecommendedShowText'

const RecommendedShow = props => {
  const {eachListItemDetails} = props
  const {imgUrl} = eachListItemDetails

  return (
    <div
      className="recommendshow-container"
      style={{zIndex: 0, position: 'relative'}}
    >
      <GoogleDriveImage imageDetails={{imgUrl}} />
      <div style={{zIndex: 1, position: 'absolute', bottom: 0}}>
        <RecommendedShowText eachListItemDetails={eachListItemDetails} />
      </div>
    </div>
  )
}

export default RecommendedShow
