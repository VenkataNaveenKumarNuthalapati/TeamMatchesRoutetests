import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = {
    competingTeam: eachMatch.competing_team,
    competingTeamLogo: eachMatch.competing_team_logo,
    date: eachMatch.date,
    firstInnings: eachMatch.first_innings,
    id: eachMatch.id,
    manOfTheMatch: eachMatch.man_of_the_match,
    matchStatus: eachMatch.match_status,
    result: eachMatch.result,
    secondInnings: eachMatch.second_innings,
    umpires: eachMatch.umpires,
    venue: eachMatch.venue,
  }

  return (
    <li className="matchs">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
