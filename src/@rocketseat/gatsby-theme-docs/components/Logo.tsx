import React from 'react'

// Path to the logo file on your project
// @ts-expect-error
import logo from './famcarenow.gif'

const Logo = () => (
  <img src={logo} alt='famcarenow' style={{ width: 180 }} />
)

export default Logo