import React from "react"
import teamMapping from "../../data/team-mapping.json"
import styled from "styled-components"

const LeagueTableRow = ({
  position,
  name,
  played,
  won,
  drawn,
  lost,
  goalFor,
  goalAgainst,
  point
}) => {
  return (
    <tr
      style={{
        backgroundColor:
          position === 1
            ? "#FF0047"
            : position < 5 ? "#E10040" : position > 17 ? "#8A0036" : "#AB0039"
      }}
    >
      <Td style={{ borderLeftWidth: 0 }}>
        {position}
      </Td>
      <Td style={{ textAlign: "left", width: "15em" }}>
        {teamMapping[name]}
      </Td>
      <Td style={{ width: "2em" }}>
        {won + drawn + lost}
      </Td>
      <Td style={{ width: "2em" }}>
        {won}
      </Td>
      <Td style={{ width: "2em" }}>
        {drawn}
      </Td>
      <Td style={{ width: "2em" }}>
        {lost}
      </Td>
      <Td style={{ width: "2em" }}>
        {goalFor}
      </Td>
      <Td style={{ width: "2em" }}>
        {goalAgainst}
      </Td>
      <Td style={{ width: "2em" }}>
        {goalFor - goalAgainst}
      </Td>
      <Td style={{ width: "2em" }}>
        {point}
      </Td>
    </tr>
  )
}

export default LeagueTableRow
const Td = styled.td`padding: .5em;`
