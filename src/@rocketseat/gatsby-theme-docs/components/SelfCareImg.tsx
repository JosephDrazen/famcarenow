import React from 'react'
import { Grid, Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import selfcare from './images/selfcare.png'

const SelfCareImg = () => (
  <Box>
    <img src={selfcare} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/psychotherapy/main'>Psycho-Education</a>
  </Box>
)

export default SelfCareImg