import React from 'react'
import { Grid, Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import nature from './images/nature.png'

const NatureImg = () => (
  <Box>
    <img src={nature} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/familybulletin/main'>General Education</a>
  </Box>
)

export default NatureImg