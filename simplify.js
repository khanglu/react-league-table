const simplifyJson = json => {
  const simpleObject = json.rounds.map(round => {
    return round.matches.map(match => {
      return (
        match.team1.code + match.score1 + '-' + match.score2 + match.team2.code
      )
    })
  })
  console.log(JSON.stringify(simpleObject))
  return simpleObject.toString()
}
