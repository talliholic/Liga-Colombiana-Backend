import computePerformances from "../utils/computePerformances.js"
import extractMatches from "../utils/extractMatches.js"
import readFileAsync from "../utils/readAsyncFile.js"
import selectYears from "../utils/selectYears.js"

async function getMatchesByYear(year) {
  const decade = year.slice(0, 3)
  const filePath = `./results/${decade}0s/${year}.txt`
  const data = await readFileAsync(filePath)
  const lines = data.split("\n")
  return extractMatches(lines, year)
}

export const getResults = async (req, res) => {
  const { year, sort_round, years, team, team1, team2 } = req.query
  let matches
  try {
    if (year && !years) matches = await getMatchesByYear(year)
    if (years && !year) matches = await selectYears(years)
    if (team && !team1 && !team2)
      matches = matches.filter(
        match => match.home == team || match.away == team
      )
    if (team1 && team2 && !team)
      matches = matches.filter(
        match =>
          (match.home == team1 && match.away == team2) ||
          (match.home == team2 && match.away == team1)
      )
    if (sort_round && sort_round == 1)
      matches = matches.sort((a, b) => b.round - a.round)
    res.json({ standings: computePerformances(matches), matches })
  } catch (error) {
    console.log(error)
    res.json({ data: "No data" })
  }
}
