import React, { Component } from "react"
import dataJson from "../../data/en.1.json"
import styled from "styled-components"
import LeagueTableRow from "./league-table-row"

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

  onSliderChange = e => {
    this.setState({ round: e.target.value })
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
        key={index}
        position={index + 1}
        name={team[0]}
      />
    )
  }

  render() {
    return (
      <div>
        <input
          name="round-slider"
          type="range"
          min="1"
          max="38"
          step="1"
          value={this.state.round}
          onChange={this.onSliderChange}
        />
        <Table>
          <thead>
            <tr>
              <th />
              <th />
              <th>Pl</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRow(dataJson)}
          </tbody>
        </Table>
      </div>
    )
  }
}

const Table = styled.table`
  overflow: scroll;
  margin: 0 -2px;
  table-layout: fixed;
  letter-spacing: .02em;
`

export default LeagueTable
