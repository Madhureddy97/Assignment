import {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import './index.css'

import RecommendedShow from '../RecommendedShow'


class RecommendedShows extends Component {
  constructor(props) {
    super(props)
    this.state = {recommendedShowsList: [], page: 1, totalEvents: 0}
  }

  componentDidMount() {
    this.getRecommendedShowsData()
  }

  getRecommendedShowsData = async () => {
    const response = await fetch(
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco',
    )

    const data = await response.json()

    this.setState(prevState => ({
      recommendedShowsList: [...prevState.recommendedShowsList, ...data.events],
      hasMore: data.events.length > 0,
    }))
  }

  fetchMoreData = async () => {
    const {page} = this.state
    const nextPage = page + 1

    const response = await fetch(
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco',
    )

    const data = await response.json()
    console.log(data)
    this.setState(prevState => ({
      recommendedShowsList: [...prevState.recommendedShowsList, ...data.events],
      totalEvents: data.totalEvents,
      page: nextPage,
    }))
  }

  render() {
    const {recommendedShowsList, totalEvents} = this.state
    return (
      <div>
        <h1 className="recommended-shows-heading">Recommended Shows</h1>

        <InfiniteScroll
          dataLength={recommendedShowsList.length}
          next={this.fetchMoreData}
          hasMore={recommendedShowsList.length < totalEvents}
          loader={<h4>Loading...</h4>}
          horizontal
          style={{display: 'flex', flexDirection: 'row', overflowX: 'auto'}}
        >
          <ul className="recommended-shows-list">
            {recommendedShowsList.map(eachListItem => (
              <RecommendedShow
                eachListItemDetails={eachListItem}
                key={eachListItem.eventName}
              />
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    )
  }
}

export default RecommendedShows
