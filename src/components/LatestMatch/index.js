import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeamLogo,
    date,
    competingTeam,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }

  return (
    <li className="latest-match-card">
      <div className="inner-card">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="latest-match-image"
      />
      <div className="right-container">
        <p className="bold">First Innings</p>
        <p>{firstInnings}</p>
        <p className="bold">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="bold">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="bold">Umpires</p>
        <p>{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
