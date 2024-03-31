import {useState, useEffect} from 'react'
import axios from 'axios'

const GoogleDriveImage = props => {
  const {imageDetails} = props
  const {imgUrl} = imageDetails
  const [thumbnailLink, setThumbnailLink] = useState(null)

  const startIndex = imgUrl.indexOf('/d/') + 3
  const endIndex = imgUrl.indexOf('/view')
  const fileId = imgUrl.substring(startIndex, endIndex)

  // const fileId = '1eCTPLcYF_u8mcAlmZ2-SN2_j-aiWA_7y'; // Extracted from the provided URL

  useEffect(() => {
    const fetchThumbnailLink = async () => {
      try {
        // Make a request to the Google Drive API to fetch metadata about the file
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files/${fileId}`,
          {
            params: {
              fields: 'thumbnailLink', // Specify fields to include in the response
              key: 'AIzaSyA5ycJFseG6hHXaIj2snHZJbMY95Qu00Fw',
            },
          },
        )

        // Extract thumbnail link from the response
        const fetchedThumbnailLink = response.data.thumbnailLink

        // Update state with the fetched thumbnail link
        setThumbnailLink(fetchedThumbnailLink)
      } catch (error) {
        console.error('Error fetching thumbnail link from Google Drive:', error)
      }
    }

    fetchThumbnailLink()
  }, [fileId])

  return (
    <div>
      {thumbnailLink && (
        <img
          className="image-styles"
          src={thumbnailLink}
          alt="Google Drive Thumbnail"
        />
      )}
    </div>
  )
}

export default GoogleDriveImage
