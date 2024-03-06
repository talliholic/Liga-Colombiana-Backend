import computePerformances from "./computePerformances.js"
import extractMatches from "./extractMatches.js"
import readFileAsync from "./readAsyncFile.js"

const getTournaments = async (req, res) => {
  const { years, team } = req.params
  const { games, sortData } = req.query

  try {
    const tournaments = await handleTournaments(years, team, games, sortData)
    res.json(tournaments)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

function handleTournaments(years, team, games, sortData) {
  switch (years) {
    case "last_decade":
      return handleData(
        [
          { year: "2014-2", path: "./results/2010s/2014-2.txt" },
          { year: "2015-1", path: "./results/2010s/2015-1.txt" },
          { year: "2015-2", path: "./results/2010s/2015-2.txt" },
          { year: "2016-1", path: "./results/2010s/2016-1.txt" },
          { year: "2016-2", path: "./results/2010s/2016-2.txt" },
          { year: "2017-1", path: "./results/2010s/2017-1.txt" },
          { year: "2017-2", path: "./results/2010s/2017-2.txt" },
          { year: "2018-1", path: "./results/2010s/2018-1.txt" },
          { year: "2018-2", path: "./results/2010s/2018-2.txt" },
          { year: "2019-1", path: "./results/2010s/2019-1.txt" },
          { year: "2019-2", path: "./results/2010s/2019-2.txt" },
          { year: "2020", path: "./results/2020s/2020.txt" },
          { year: "2021-1", path: "./results/2020s/2021-1.txt" },
          { year: "2021-2", path: "./results/2020s/2021-2.txt" },
          { year: "2022-1", path: "./results/2020s/2022-1.txt" },
          { year: "2022-2", path: "./results/2020s/2022-2.txt" },
          { year: "2023-1", path: "./results/2020s/2023-1.txt" },
          { year: "2023-2", path: "./results/2020s/2023-2.txt" },
          { year: "2024-1", path: "./results/2020s/2024-1.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2020s":
      return handleData(
        [
          { year: "2020", path: "./results/2020s/2020.txt" },
          { year: "2021-1", path: "./results/2020s/2021-1.txt" },
          { year: "2021-2", path: "./results/2020s/2021-2.txt" },
          { year: "2022-1", path: "./results/2020s/2022-1.txt" },
          { year: "2022-2", path: "./results/2020s/2022-2.txt" },
          { year: "2023-1", path: "./results/2020s/2023-1.txt" },
          { year: "2023-2", path: "./results/2020s/2023-2.txt" },
          { year: "2024-1", path: "./results/2020s/2024-1.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2024":
      return handleData(
        [{ year: "2024-1", path: "./results/2020s/2024-1.txt" }],
        team,
        games,
        sortData
      )
    case "2023":
      return handleData(
        [
          { year: "2023-1", path: "./results/2020s/2023-1.txt" },
          { year: "2023-2", path: "./results/2020s/2023-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2022":
      return handleData(
        [
          { year: "2022-1", path: "./results/2020s/2022-1.txt" },
          { year: "2022-2", path: "./results/2020s/2022-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2021":
      return handleData(
        [
          { year: "2021-1", path: "./results/2020s/2021-1.txt" },
          { year: "2021-2", path: "./results/2020s/2021-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2020":
      return handleData(
        [{ year: "2020", path: "./results/2020s/2020.txt" }],
        team,
        games,
        sortData
      )
    case "2010s":
      return handleData(
        [
          { year: "2010-1", path: "./results/2010s/2010-1.txt" },
          { year: "2010-2", path: "./results/2010s/2010-2.txt" },
          { year: "2011-1", path: "./results/2010s/2011-1.txt" },
          { year: "2011-2", path: "./results/2010s/2011-2.txt" },
          { year: "2012-1", path: "./results/2010s/2012-1.txt" },
          { year: "2012-2", path: "./results/2010s/2012-2.txt" },
          { year: "2013-1", path: "./results/2010s/2013-1.txt" },
          { year: "2013-2", path: "./results/2010s/2013-2.txt" },
          { year: "2014-1", path: "./results/2010s/2014-1.txt" },
          { year: "2014-2", path: "./results/2010s/2014-2.txt" },
          { year: "2015-1", path: "./results/2010s/2015-1.txt" },
          { year: "2015-2", path: "./results/2010s/2015-2.txt" },
          { year: "2016-1", path: "./results/2010s/2016-1.txt" },
          { year: "2016-2", path: "./results/2010s/2016-2.txt" },
          { year: "2017-1", path: "./results/2010s/2017-1.txt" },
          { year: "2017-2", path: "./results/2010s/2017-2.txt" },
          { year: "2018-1", path: "./results/2010s/2018-1.txt" },
          { year: "2018-2", path: "./results/2010s/2018-2.txt" },
          { year: "2019-1", path: "./results/2010s/2019-1.txt" },
          { year: "2019-2", path: "./results/2010s/2019-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2019":
      return handleData(
        [
          { year: "2019-1", path: "./results/2010s/2019-1.txt" },
          { year: "2019-2", path: "./results/2010s/2019-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2018":
      return handleData(
        [
          { year: "2018-1", path: "./results/2010s/2018-1.txt" },
          { year: "2018-2", path: "./results/2010s/2018-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2017":
      return handleData(
        [
          { year: "2017-1", path: "./results/2010s/2017-1.txt" },
          { year: "2017-2", path: "./results/2010s/2017-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2016":
      return handleData(
        [
          { year: "2016-1", path: "./results/2010s/2016-1.txt" },
          { year: "2016-2", path: "./results/2010s/2016-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2015":
      return handleData(
        [
          { year: "2015-1", path: "./results/2010s/2015-1.txt" },
          { year: "2015-2", path: "./results/2010s/2015-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2014":
      return handleData(
        [
          { year: "2014-1", path: "./results/2010s/2014-1.txt" },
          { year: "2014-2", path: "./results/2010s/2014-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2013":
      return handleData(
        [
          { year: "2013-1", path: "./results/2010s/2013-1.txt" },
          { year: "2013-2", path: "./results/2010s/2013-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2012":
      return handleData(
        [
          { year: "2012-1", path: "./results/2010s/2012-1.txt" },
          { year: "2012-2", path: "./results/2010s/2012-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2011":
      return handleData(
        [
          { year: "2011-1", path: "./results/2010s/2011-1.txt" },
          { year: "2011-2", path: "./results/2010s/2011-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2010":
      return handleData(
        [
          { year: "2010-1", path: "./results/2010s/2010-1.txt" },
          { year: "2010-2", path: "./results/2010s/2010-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2009":
      return handleData(
        [
          { year: "2009-1", path: "./results/2000s/2009-1.txt" },
          { year: "2009-2", path: "./results/2000s/2009-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2008":
      return handleData(
        [
          { year: "2008-1", path: "./results/2000s/2008-1.txt" },
          { year: "2008-2", path: "./results/2000s/2008-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2007":
      return handleData(
        [
          { year: "2007-1", path: "./results/2000s/2007-1.txt" },
          { year: "2007-2", path: "./results/2000s/2007-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2006":
      return handleData(
        [
          { year: "2006-1", path: "./results/2000s/2006-1.txt" },
          { year: "2006-2", path: "./results/2000s/2006-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2005":
      return handleData(
        [
          { year: "2005-1", path: "./results/2000s/2005-1.txt" },
          { year: "2005-2", path: "./results/2000s/2005-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2004":
      return handleData(
        [
          { year: "2004-1", path: "./results/2000s/2004-1.txt" },
          { year: "2004-2", path: "./results/2000s/2004-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2003":
      return handleData(
        [
          { year: "2003-1", path: "./results/2000s/2003-1.txt" },
          { year: "2003-2", path: "./results/2000s/2003-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2002":
      return handleData(
        [
          { year: "2002-1", path: "./results/2000s/2002-1.txt" },
          { year: "2002-2", path: "./results/2000s/2002-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "2000s":
      return handleData(
        [
          { year: "2000", path: "./results/2000s/2000.txt" },
          { year: "2001", path: "./results/2000s/2001.txt" },
          { year: "2002-1", path: "./results/2000s/2002-1.txt" },
          { year: "2002-2", path: "./results/2000s/2002-2.txt" },
          { year: "2003-1", path: "./results/2000s/2003-1.txt" },
          { year: "2003-2", path: "./results/2000s/2003-2.txt" },
          { year: "2004-1", path: "./results/2000s/2004-1.txt" },
          { year: "2004-2", path: "./results/2000s/2004-2.txt" },
          { year: "2005-1", path: "./results/2000s/2005-1.txt" },
          { year: "2005-2", path: "./results/2000s/2005-2.txt" },
          { year: "2006-1", path: "./results/2000s/2006-1.txt" },
          { year: "2006-2", path: "./results/2000s/2006-2.txt" },
          { year: "2007-1", path: "./results/2000s/2007-1.txt" },
          { year: "2007-2", path: "./results/2000s/2007-2.txt" },
          { year: "2008-1", path: "./results/2000s/2008-1.txt" },
          { year: "2008-2", path: "./results/2000s/2008-2.txt" },
          { year: "2009-1", path: "./results/2000s/2009-1.txt" },
          { year: "2009-2", path: "./results/2000s/2009-2.txt" },
        ],
        team,
        games,
        sortData
      )
    case "century":
      return handleData(
        [
          { year: "2000", path: "./results/2000s/2000.txt" },
          { year: "2001", path: "./results/2000s/2001.txt" },
          { year: "2002-1", path: "./results/2000s/2002-1.txt" },
          { year: "2002-2", path: "./results/2000s/2002-2.txt" },
          { year: "2003-1", path: "./results/2000s/2003-1.txt" },
          { year: "2003-2", path: "./results/2000s/2003-2.txt" },
          { year: "2004-1", path: "./results/2000s/2004-1.txt" },
          { year: "2004-2", path: "./results/2000s/2004-2.txt" },
          { year: "2005-1", path: "./results/2000s/2005-1.txt" },
          { year: "2005-2", path: "./results/2000s/2005-2.txt" },
          { year: "2006-1", path: "./results/2000s/2006-1.txt" },
          { year: "2006-2", path: "./results/2000s/2006-2.txt" },
          { year: "2007-1", path: "./results/2000s/2007-1.txt" },
          { year: "2007-2", path: "./results/2000s/2007-2.txt" },
          { year: "2008-1", path: "./results/2000s/2008-1.txt" },
          { year: "2008-2", path: "./results/2000s/2008-2.txt" },
          { year: "2009-1", path: "./results/2000s/2009-1.txt" },
          { year: "2009-2", path: "./results/2000s/2009-2.txt" },
          { year: "2010-1", path: "./results/2010s/2010-1.txt" },
          { year: "2010-2", path: "./results/2010s/2010-2.txt" },
          { year: "2011-1", path: "./results/2010s/2011-1.txt" },
          { year: "2011-2", path: "./results/2010s/2011-2.txt" },
          { year: "2012-1", path: "./results/2010s/2012-1.txt" },
          { year: "2012-2", path: "./results/2010s/2012-2.txt" },
          { year: "2013-1", path: "./results/2010s/2013-1.txt" },
          { year: "2013-2", path: "./results/2010s/2013-2.txt" },
          { year: "2014-1", path: "./results/2010s/2014-1.txt" },
          { year: "2014-2", path: "./results/2010s/2014-2.txt" },
          { year: "2015-1", path: "./results/2010s/2015-1.txt" },
          { year: "2015-2", path: "./results/2010s/2015-2.txt" },
          { year: "2016-1", path: "./results/2010s/2016-1.txt" },
          { year: "2016-2", path: "./results/2010s/2016-2.txt" },
          { year: "2017-1", path: "./results/2010s/2017-1.txt" },
          { year: "2017-2", path: "./results/2010s/2017-2.txt" },
          { year: "2018-1", path: "./results/2010s/2018-1.txt" },
          { year: "2018-2", path: "./results/2010s/2018-2.txt" },
          { year: "2019-1", path: "./results/2010s/2019-1.txt" },
          { year: "2019-2", path: "./results/2010s/2019-2.txt" },
          { year: "2020", path: "./results/2020s/2020.txt" },
          { year: "2021-1", path: "./results/2020s/2021-1.txt" },
          { year: "2021-2", path: "./results/2020s/2021-2.txt" },
          { year: "2022-1", path: "./results/2020s/2022-1.txt" },
          { year: "2022-2", path: "./results/2020s/2022-2.txt" },
          { year: "2023-1", path: "./results/2020s/2023-1.txt" },
          { year: "2023-2", path: "./results/2020s/2023-2.txt" },
          { year: "2024-1", path: "./results/2020s/2024-1.txt" },
        ],
        team,
        games,
        sortData
      )
    case "short_tournaments":
      return handleData(
        [
          { year: "2002-1", path: "./results/2000s/2002-1.txt" },
          { year: "2002-2", path: "./results/2000s/2002-2.txt" },
          { year: "2003-1", path: "./results/2000s/2003-1.txt" },
          { year: "2003-2", path: "./results/2000s/2003-2.txt" },
          { year: "2004-1", path: "./results/2000s/2004-1.txt" },
          { year: "2004-2", path: "./results/2000s/2004-2.txt" },
          { year: "2005-1", path: "./results/2000s/2005-1.txt" },
          { year: "2005-2", path: "./results/2000s/2005-2.txt" },
          { year: "2006-1", path: "./results/2000s/2006-1.txt" },
          { year: "2006-2", path: "./results/2000s/2006-2.txt" },
          { year: "2007-1", path: "./results/2000s/2007-1.txt" },
          { year: "2007-2", path: "./results/2000s/2007-2.txt" },
          { year: "2008-1", path: "./results/2000s/2008-1.txt" },
          { year: "2008-2", path: "./results/2000s/2008-2.txt" },
          { year: "2009-1", path: "./results/2000s/2009-1.txt" },
          { year: "2009-2", path: "./results/2000s/2009-2.txt" },
          { year: "2010-1", path: "./results/2010s/2010-1.txt" },
          { year: "2010-2", path: "./results/2010s/2010-2.txt" },
          { year: "2011-1", path: "./results/2010s/2011-1.txt" },
          { year: "2011-2", path: "./results/2010s/2011-2.txt" },
          { year: "2012-1", path: "./results/2010s/2012-1.txt" },
          { year: "2012-2", path: "./results/2010s/2012-2.txt" },
          { year: "2013-1", path: "./results/2010s/2013-1.txt" },
          { year: "2013-2", path: "./results/2010s/2013-2.txt" },
          { year: "2014-1", path: "./results/2010s/2014-1.txt" },
          { year: "2014-2", path: "./results/2010s/2014-2.txt" },
          { year: "2015-1", path: "./results/2010s/2015-1.txt" },
          { year: "2015-2", path: "./results/2010s/2015-2.txt" },
          { year: "2016-1", path: "./results/2010s/2016-1.txt" },
          { year: "2016-2", path: "./results/2010s/2016-2.txt" },
          { year: "2017-1", path: "./results/2010s/2017-1.txt" },
          { year: "2017-2", path: "./results/2010s/2017-2.txt" },
          { year: "2018-1", path: "./results/2010s/2018-1.txt" },
          { year: "2018-2", path: "./results/2010s/2018-2.txt" },
          { year: "2019-1", path: "./results/2010s/2019-1.txt" },
          { year: "2019-2", path: "./results/2010s/2019-2.txt" },
          { year: "2020", path: "./results/2020s/2020.txt" },
          { year: "2021-1", path: "./results/2020s/2021-1.txt" },
          { year: "2021-2", path: "./results/2020s/2021-2.txt" },
          { year: "2022-1", path: "./results/2020s/2022-1.txt" },
          { year: "2022-2", path: "./results/2020s/2022-2.txt" },
          { year: "2023-1", path: "./results/2020s/2023-1.txt" },
          { year: "2023-2", path: "./results/2020s/2023-2.txt" },
          { year: "2024-1", path: "./results/2020s/2024-1.txt" },
        ],
        team,
        games,
        sortData
      )
  }
}

async function handleData(filePaths, team, games, sortData) {
  let tournaments = []
  const promises = filePaths.map(async path => {
    const data = await readFileAsync(path.path)
    const lines = data.split("\n")
    let matches = extractMatches(lines, path.year)
    if (games) matches = matches.filter(match => match.round <= games)
    const tournament = computePerformances(matches)
    tournament.year = path.year
    tournament.general = tournament.general.find(
      campaign => campaign.team === team
    )
    tournament.home = tournament.home.find(campaign => campaign.team === team)
    tournament.away = tournament.away.find(campaign => campaign.team === team)
    tournaments.push(tournament)
  })
  await Promise.all(promises)
  tournaments = tournaments.filter(tournament => tournament.general)
  sortByYear(tournaments)
  if (sortData === "ppts") {
    tournaments.sort(
      (a, b) => b.general.possiblePoints - a.general.possiblePoints
    )
  }
  if (sortData === "-ppts") {
    tournaments.sort(
      (a, b) => a.general.possiblePoints - b.general.possiblePoints
    )
  }
  return tournaments
}

function sortByYear(data) {
  // Custom sorting function
  function compareYears(a, b) {
    // Extracting the year and semester from the "year" field
    const [yearA, semesterA] = a.year.split("-")
    const [yearB, semesterB] = b.year.split("-")

    // Comparing years
    if (yearA !== yearB) {
      return yearA - yearB
    } else {
      // If years are equal, compare semesters
      return parseInt(semesterA) - parseInt(semesterB)
    }
  }

  // Sorting the data array using the custom sorting function
  data.sort(compareYears)
}

export default getTournaments
