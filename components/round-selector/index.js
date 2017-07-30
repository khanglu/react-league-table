import React, { Component } from "react"
import styled from "styled-components"

class RoundSelector extends Component {
  constructor() {
    super()
    this.state = {
      activeRound: 38
    }
  }

  onNumberClick = num => {
    this.setState({ activeRound: num })
    this.props.onRoundChange(num)
  }

  renderRounds = (firstRound, lastRound) => {
    let nums = []
    for (let i = firstRound; i <= lastRound; i++) {
      nums.push(
        <RoundNumber
          num={i}
          active={this.state.activeRound === i}
          onNumberClick={this.onNumberClick}
        />
      )
    }
    return nums
  }
  render() {
    return (
      <div style={{ margin: "2em 0 1em" }}>
        <div style={{ marginBottom: ".5em" }}>
          {this.renderRounds(1, 19)}
        </div>
        <div>
          {this.renderRounds(20, 38)}
        </div>
      </div>
    )
  }
}

export default RoundSelector

const RoundNumber = ({ num, active, onNumberClick }) =>
  <RoundNumberWrapper active={active} onClick={() => onNumberClick(num)}>
    {num}
  </RoundNumberWrapper>

const RoundNumberWrapper = styled.div`
  display: inline-block;
  width: 2em;
  ${({ active }) => active && "font-weight: 700; transform: scale(1.5);"};
  transition: .5s;
  cursor: pointer;
`
