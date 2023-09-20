import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  constructor(props) {
    super(props)
    this.match = props.match
    this.params = this.match.params
    this.id = this.params.id
  }

  state = {isLoading: true}

  componentDidMount() {
    this.getTeamDetails(this.id)
  }

  getTeamDetails = async id => {
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    let teamObj = await response.json()

    teamObj = {
      latestMatchDetails: teamObj.latest_match_details,
      recentMatches: teamObj.recent_matches,
      teamBannerUrl: teamObj.team_banner_url,
      isLoading: false,
    }

    this.setState(teamObj)
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      isLoading,
    } = this.state

    return (
      <div className="team-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="main-container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="baner-image"
            />
            <h1>Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="ul-container">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} eachMatch={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
