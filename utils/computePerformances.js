function getTeams(matches) {
  const homePerformances = []
  const awayPerformances = []
  matches.forEach(match => {
    if (!homePerformances.includes(match.home)) {
      homePerformances.push(match.home)
    }
    if (!awayPerformances.includes(match.away)) {
      awayPerformances.push(match.away)
    }
  })
  return { homePerformances, awayPerformances }
}

export default function computePerformances(matches) {
  const { homePerformances, awayPerformances } = getTeams(matches)

  const homeTeamsPerformances = getHomeTeamsPerformance(
    homePerformances,
    matches
  )

  const awayTeamsPerformances = getAwayTeamsPerformance(
    awayPerformances,
    matches
  )

  const generalPerformances = getGeneralPerformances(
    homeTeamsPerformances,
    awayTeamsPerformances
  )

  return {
    general: sortPerformance(generalPerformances),
    home: sortPerformance(homeTeamsPerformances),
    away: sortPerformance(awayTeamsPerformances),
  }
}

function combinePerformances(performances1, performances2) {
  const games = performances1.games + performances2.games
  const points = performances1.points + performances2.points
  return {
    team: performances1.team,
    wins: performances1.wins + performances2.wins,
    ties: performances1.ties + performances2.ties,
    losses: performances1.losses + performances2.losses,
    goalsFor: performances1.goalsFor + performances2.goalsFor,
    goalsAgainst: performances1.goalsAgainst + performances2.goalsAgainst,
    games,
    points,
    goalDifference: performances1.goalDifference + performances2.goalDifference,
    possiblePoints: Math.round((points / games / 3) * 100) / 100,
  }
}

function getGeneralPerformances(homeTeamsPerformances, awayTeamsPerformances) {
  const generalPerformances = []
  const teams = []
  const performances = [...homeTeamsPerformances, ...awayTeamsPerformances]
  performances.forEach(performance => {
    if (!teams.includes(performance.team)) teams.push(performance.team)
  })
  teams.forEach(team => {
    const teamPerformances = performances.filter(
      performance => performance.team === team
    )
    if (teamPerformances.length === 1) {
      generalPerformances.push(teamPerformances[0])
    } else {
      const combinedPerformances = combinePerformances(...teamPerformances)
      generalPerformances.push(combinedPerformances)
    }
  })
  return generalPerformances
}

function sortPerformance(performance) {
  return performance.sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points // Sort by points descending
    } else if (a.goalDifference !== b.goalDifference) {
      return b.goalDifference - a.goalDifference // Sort by goal difference descending
    } else {
      return b.goalsFor - a.goalsFor // Sort by goals for descending
    }
  })
}

function getHomeTeamsPerformance(homePerformances, matches) {
  return homePerformances.map(team => {
    const teamMatches = matches.filter(match => match.home == team)
    const performance = {
      wins: 0,
      ties: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
    }
    teamMatches.forEach(match => {
      if (match.homeGoals > match.awayGoals) performance.wins++
      if (match.homeGoals == match.awayGoals) performance.ties++
      if (match.homeGoals < match.awayGoals) performance.losses++
      performance.goalsFor = performance.goalsFor + match.homeGoals
      performance.goalsAgainst = performance.goalsAgainst + match.awayGoals
    })
    performance.games = performance.wins + performance.ties + performance.losses
    performance.points = performance.wins * 3 + performance.ties
    performance.goalDifference = performance.goalsFor - performance.goalsAgainst
    performance.possiblePoints =
      Math.round((performance.points / performance.games / 3) * 100) / 100
    return {
      team,
      ...performance,
    }
  })
}

function getAwayTeamsPerformance(awayPerformances, matches) {
  return awayPerformances.map(team => {
    const teamMatches = matches.filter(match => match.away == team)
    const performance = {
      wins: 0,
      ties: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
    }
    teamMatches.forEach(match => {
      if (match.awayGoals > match.homeGoals) performance.wins++
      if (match.awayGoals == match.homeGoals) performance.ties++
      if (match.awayGoals < match.homeGoals) performance.losses++
      performance.goalsFor = performance.goalsFor + match.awayGoals
      performance.goalsAgainst = performance.goalsAgainst + match.homeGoals
    })
    performance.games = performance.wins + performance.ties + performance.losses
    performance.points = performance.wins * 3 + performance.ties
    performance.goalDifference = performance.goalsFor - performance.goalsAgainst
    performance.possiblePoints =
      Math.round((performance.points / performance.games / 3) * 100) / 100
    return {
      team,
      ...performance,
    }
  })
}
