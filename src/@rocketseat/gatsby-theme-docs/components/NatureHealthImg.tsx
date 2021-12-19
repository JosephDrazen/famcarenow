import React from 'react'
import { Box } from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import nature from './images/naturementalhealth.png'

const ReligionImg = () => (
  <Box>
    <img src={nature} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/familybulletin/nature'>Nature and Your Mental Health</a>
  </Box>
)

export default ReligionImg