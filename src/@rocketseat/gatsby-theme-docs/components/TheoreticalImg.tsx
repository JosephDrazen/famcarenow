import React from 'react'
import { Grid, Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import model from './images/model.png'

const TheoreticalImg = () => (
  <Box>
    <img src={model} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/familybulletin/theoretical'>Transtheoretical Model</a>
  </Box>
)

export default TheoreticalImg