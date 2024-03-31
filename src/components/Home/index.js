import './index.css'
import RecommendedShows from '../RecommendedShows'
import UpcomingEvents from '../UpcomingEvents'

const Home = () => (
  <div style={{zIndex: 0, position: 'relative'}}>
    <div className="home-bgcontainer">
      <h1 className="home-heading">
        Discover Exciting Events Happening
        <br />
        Near You - Stay Tuned For Updates!
      </h1>
      <p className="home-para">
        Dorem ipsum dolor sitamet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum,
        <br />
        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per
      </p>
    </div>
    <div style={{zIndex: 1, position: 'absolute', bottom: 0, top: '80%'}}>
      <RecommendedShows />
    </div>
    <div style={{zIndex: 2, position: 'absolute', bottom: 0, top: '130%'}}>
      <UpcomingEvents />
    </div>
  </div>
)

export default Home
