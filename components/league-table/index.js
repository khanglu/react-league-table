import React, { Component } from "react"
import dataJson from "../../data/en.1.json"
import styled from "styled-components"
import LeagueTableRow from "./league-table-row"
import FlipMove from "react-flip-move"
import RoundSelector from "../round-selector/index"

const newTeam = {
  won: 0,
  drawn: 0,
  lost: 0,
  goalFor: 0,
  goalAgainst: 0,
  point: 0
}

class LeagueTable extends Component {
  constructor() {
    super()
    this.state = {
      round: 38
    }
  }

  onRoundChange = num => {
    this.setState({ round: num })
  }

  renderRow = json => {
    let teams = {}
    for (let i = 0; i < this.state.round; i++) {
      const round = json[i]
      round.forEach(function(match) {
        const team1 = match.substring(0, 3)
        const score1 = match.substring(3, 4) * 1 // performant string to number conversion
        const score2 = match.substring(5, 6) * 1
        const team2 = match.substring(6, 9)
        if (!teams[team1]) {
          teams[team1] = Object.assign({}, newTeam)
        }
        if (!teams[team2]) {
          teams[team2] = Object.assign({}, newTeam)
        }
        teams[team1].goalFor += score1
        teams[team2].goalFor += score2
        teams[team1].goalAgainst += score2
        teams[team2].goalAgainst += score1
        if (score1 - score2 > 0) {
          teams[team1].won += 1
          teams[team2].lost += 1
          teams[team1].point += 3
        } else if (score1 - score2 === 0) {
          teams[team1].drawn += 1
          teams[team2].drawn += 1
          teams[team1].point += 1
          teams[team2].point += 1
        } else {
          teams[team1].lost += 1
          teams[team2].won += 1
          teams[team2].point += 3
        }
      }, this)
    }
    const sortedTeams = Object.entries(teams).sort((teamA, teamB) => {
      if (teamA[1].point > teamB[1].point) {
        return -1
      } else if (teamA[1].point < teamB[1].point) {
        return 1
      } else {
        return -1
      }
    })
    return sortedTeams.map((team, index) =>
      <LeagueTableRow
        {...team[1]}
        key={team[0]}
        position={index + 1}
        name={team[0]}
      />
    )
  }

  render() {
    return (
      <div>
        <RoundSelector onRoundChange={this.onRoundChange} />
        <Table>
          <TableHeader />
          <FlipMove duration={750} easing="ease-out">
            {this.renderRow(dataJson)}
          </FlipMove>
        </Table>
      </div>
    )
  }
}

export default LeagueTable

const Table = styled.div`
  letter-spacing: .02em;
  display: flex;
  flex-direction: column;
`
const TableHeader = () =>
  <div style={{ display: "flex", flexDirection: "row-reverse" }}>
    <Th>Pl</Th>
    <Th>W</Th>
    <Th>D</Th>
    <Th>L</Th>
    <Th>GF</Th>
    <Th>GA</Th>
    <Th>GD</Th>
    <Th>Pts</Th>
  </div>

const Th = styled.div`
  width: 2em;
  padding: .5em;
  border: solid #360037 1px;
  border-right: 0;
  font-weight: 400;
`
