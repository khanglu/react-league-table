import React, { Component } from "react"
import teamMapping from "../../data/team-mapping.json"
import styled from "styled-components"

// This needs to be a stateful component to work with react-flip-move
class LeagueTableRow extends Component {
  render() {
    const {
      position,
      name,
      played,
      won,
      drawn,
      lost,
      goalFor,
      goalAgainst,
      point
    } = this.props
    return (
      <Tr position={position}>
        <TdPosName style={{ width: "2em" }}>
          {position}
        </TdPosName>
        <TdPosName style={{ textAlign: "left", width: "15em" }}>
          {teamMapping[name]}
        </TdPosName>
        <TdNumber style={{ borderLeft: 0 }}>
          {won + drawn + lost}
        </TdNumber>
        <TdNumber>
          {won}
        </TdNumber>
        <TdNumber>
          {drawn}
        </TdNumber>
        <TdNumber>
          {lost}
        </TdNumber>
        <TdNumber>
          {goalFor}
        </TdNumber>
        <TdNumber>
          {goalAgainst}
        </TdNumber>
        <TdNumber>
          {goalFor - goalAgainst}
        </TdNumber>
        <TdNumber>
          {point}
        </TdNumber>
      </Tr>
    )
  }
}

export default LeagueTableRow

const Tr = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ position }) =>
    position === 1
      ? "#FF0047"
      : position < 5 ? "#E10040" : position > 17 ? "#8A0036" : "#AB0039"};
`
const TdPosName = styled.div`
  padding: .5em;
  border-bottom: solid #360037 1px;
`
const TdNumber = styled.div`
  box-sizing: content-box;
  padding: .5em;
  width: 2em;
  border: solid #360037 1px;
  border-top: 0;
  border-right: 0;
`
