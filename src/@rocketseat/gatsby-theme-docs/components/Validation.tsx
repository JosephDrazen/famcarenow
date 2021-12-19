import React from 'react'
import { Grid, Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import validation from './images/validation.png'

const Validation = () => (
  <Box>
    <img src={validation} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/familybulletin/validation'>Validation</a>
  </Box>
)

export default Validation