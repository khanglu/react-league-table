import React from "react"
import styled from "styled-components"
import Link from "next/link"
import LeagueTable from "../components/league-table/index"

const Title = styled.h1`
  color: rebeccapurple;
  font-size: 50px;
`

export default () =>
  <div>
    <Title>EPL Table</Title>
    <div>
      <LeagueTable />
    </div>
  </div>
