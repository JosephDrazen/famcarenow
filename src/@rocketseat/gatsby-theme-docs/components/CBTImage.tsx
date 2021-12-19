import React from 'react'
import { Grid, Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import cbt from './images/cbt.png'

const CBTImage = () => (
  <Box>
    <img src={cbt} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/familybulletin/cbt'>Cognitive Behavioural Therapy</a>
  </Box>
)

export default CBTImage