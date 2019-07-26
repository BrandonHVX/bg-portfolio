import React from 'react'
import blogo from '../images/blogo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import { fadeInLeft } from 'react-animations'
import { fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const fadeRight = keyframes`${fadeInLeft}`
const BouncyDiv = styled.div`
  animation: 1s ${fadeRight};
`

const fadeInAni = keyframes`${fadeIn}`
const FadeInDiv = styled.div`
  animation: 2s ${fadeInAni};
`

function LogoAni() {
  return (
    <BouncyDiv>
      <div id="slide">
        <img src={blogo} width={60} />
      </div>
    </BouncyDiv>
  )
}

function Menu() {
  return (
    <div class="menu-wrap">
      <input type="checkbox" class="toggler" />
      <div class="hamburger">
        <div />
      </div>
      <div class="menu">
        <div>
          <div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div>
        <LogoAni />
        <Menu />
      </div>
    )
  }
}
