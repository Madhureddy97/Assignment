import {Component} from 'react'
import './index.css'

import InfiniteScroll from 'react-infinite-scroll-component'
import {FaLongArrowAltRight} from 'react-icons/fa'
import UpcomingEvent from '../UpcomingEvent'

// const {Component} = require("react")

class UpcomingEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {upcomingEventsList: [], totalEvents: 0, page: 1}
  }

  componentDidMount() {
    this.getUpcomingEventsData()
  }

  getUpcomingEventsData = async () => {
    const response = await fetch(
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming',
    )
    const data = await response.json()
    console.log(data)
    this.setState({
      upcomingEventsList: data.events,
      totalEvents: data.totalEvents,
    })
  }

  fetchMoreData = async () => {
    const {page} = this.state
    const nextPage = page + 1

    const response = await fetch(
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming',
    )
    const data = await response.json()
    console.log(data)
    this.setState(prevState => ({
      upcomingEventsList: [...prevState.upcomingEventsList, ...data.events],
      totalEvents: data.totalEvents,
      page: nextPage,
    }))
  }

  render() {
    const {upcomingEventsList, totalEvents} = this.state
    return (
      <div>
        <div className="upcoming-events">
          <h1 className="upcoming-events-heading">Upcoming events</h1>
          <FaLongArrowAltRight className="right-arrow-icon" />
        </div>

        <InfiniteScroll
          dataLength={upcomingEventsList.length}
          next={this.fetchMoreData}
          hasMore={upcomingEventsList.length < totalEvents}
          loader={<h4>Loading...</h4>}
        >
          <ul className="upcomingevents-container">
            {upcomingEventsList.map(eachEvent => (
              <UpcomingEvent
                eachEventDetails={eachEvent}
                key={eachEvent.eventName}
              />
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    )
  }
}

export default UpcomingEvents
