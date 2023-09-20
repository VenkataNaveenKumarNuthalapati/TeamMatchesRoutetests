import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    let teamsList = await response.json()
    teamsList = teamsList.teams.map(eachObj => ({
      ...eachObj,
      teamImageUrl: eachObj.team_image_url,
    }))

    this.setState({teamsList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    console.log(teamsList)
    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      </div>
    ) : (
      <div className="home-bg-container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="ul-container">
          {teamsList.map(eachTeam => (
            <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
