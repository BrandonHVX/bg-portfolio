import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../images/greeting.json'

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: ''
      }
    }

    return (
      <div>
        <Lottie options={defaultOptions} width={'75minvw'} />
      </div>
    )
  }
}

export default UncontrolledLottie
