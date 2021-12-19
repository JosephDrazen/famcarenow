import React from 'react'
import { Grid, Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import gender from './images/gender.png'

const GenderImg = () => (
  <Box>
    <img src={gender} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/familybulletin/gender'>Gender Diversity</a>
  </Box>
)

export default GenderImg