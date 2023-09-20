import {Link} from 'react-router-dom'

import './index.css'

const TeamsCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <li className="card">
      <Link to={`/team-matches/${id}`} className="card2">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamsCard
