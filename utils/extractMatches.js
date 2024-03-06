const teams = [
  "Alianza",
  "América",
  "Águilas",
  "Bucaramanga",
  "Cali",
  "Cartagena",
  "Centauros",
  "Chicó",
  "Cúcuta",
  "Pasto",
  "Envigado",
  "Fortaleza",
  "Huila",
  "Itagüí",
  "Jaguares",
  "Junior",
  "La Equidad",
  "Leones",
  "Magdalena",
  "Medellín",
  "Millonarios",
  "Nacional",
  "Once Caldas",
  "Patriotas",
  "Pasto",
  "Pereira",
  "Quindío",
  "Santa Fe",
  "Tigres",
  "Tolima",
  "Tuluá",
  "Uniautónoma",
]

const roundKeywords = ["Fecha", "Jornada", "Legs", "Leg", "Partidos", "Round"]

function isMatch(line) {
  if (line.includes(":") || line.includes("-")) {
    const resultSeparator = line.includes(":") ? ":" : "-"
    const indexOfSeparator = line.indexOf(resultSeparator)
    let home
    let away
    teams.forEach(team => {
      if (line.includes(team) && line.indexOf(team) < indexOfSeparator)
        home = team
    })
    teams.forEach(team => {
      if (line.includes(team) && team != home) away = team
    })
    if (home && away) return { home, away }
  }

  return false
}

function extractMatchInfo(line, year = null, round = null) {
  const match = isMatch(line)
  if (!match) return null
  const resultSeparator = line.includes(":") ? ":" : "-"
  const indexOfSeparator = line.indexOf(resultSeparator)
  const homeGoals = +line.slice(indexOfSeparator - 3, indexOfSeparator).trim()
  const awayGoals = +line
    .slice(indexOfSeparator + 1, indexOfSeparator + 3)
    .trim()
  const matchInfo = { home: match.home, homeGoals, awayGoals, away: match.away }
  if (year) matchInfo.year = year
  if (round) matchInfo.round = round
  return matchInfo
}

function isRound(line) {
  return roundKeywords.some(keyword => line.includes(keyword))
}

export default function extractMatches(lines, year) {
  let round = 0
  const matches = []

  lines.forEach(line => {
    const lineIsRound = isRound(line)
    const lineIsMatch = isMatch(line)
    if (lineIsRound) round++
    if (lineIsMatch) {
      const matchInfo = extractMatchInfo(line, year, round)
      matches.push(matchInfo)
    }
  })

  return matches
}
