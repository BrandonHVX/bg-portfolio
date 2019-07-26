import React from 'react'
import './css/style.css'
import Header from './components/Header'
import Slider from './components/Slider'
import TitleAnimation from './components/TitleAnimation'
import './App.css'
import blogo from './images/blogo.png'
import { Container, Row, Col } from 'reactstrap'

function App() {
  return (
    <div>
      <Header />

      <Container>
        <div id="App-header">
          <TitleAnimation />
        </div>
      </Container>
    </div>
  )
}

export default App
