import React from "react"
import styled from "styled-components"
import Link from "next/link"
import LeagueTable from "../components/league-table/index"
import EPLLogo from "../components/logo/epl-logo"

export default () =>
  <MainWrapper>
    <TableWrapper>
      <Title>
        Premier{" "}
        <EPLLogo
          style={{
            width: "1.5em",
            position: "relative",
            top: ".5em",
            margin: "0 .1em"
          }}
        />{" "}
        League
      </Title>
      <div>
        <LeagueTable />
      </div>
    </TableWrapper>
  </MainWrapper>

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
`

const TableWrapper = styled.div`
  text-align: center;
  background-color: #360037;
  color: white;
  border-radius: 3px;
`

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/static/champion2017-bg.jpg') no-repeat center center fixed;
  background-size: cover;
  font-family: PremierLeagueSans;
  font-weight: 300;
  padding: 5em 0;
  min-height: calc(100vh - 10em);
`
