import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50vw - 100px);
  transform-style: preserve-3d;
  transition: .5s transform cubic-bezier(.44,.17,.52,.99);
  transform-origin: top;
  ${props =>
    props.topPanelOpen
      ? 'transform: rotateX(0deg);'
      : 'transform: rotateX(180deg);'} z-index: 2;
`

const TopPanel = ({ topPanelOpen, topPanelComponent }) => {
  const Comp = topPanelComponent
  return (
    <Wrapper topPanelOpen={topPanelOpen}>
      {topPanelComponent && <Comp />}
    </Wrapper>
  )
}

export default connect(state => state.layout)(TopPanel)
