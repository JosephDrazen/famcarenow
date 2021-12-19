import React from 'react'
import { Grid, Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import family from './images/family.png'

const FamilyImg = () => (
  <Box>
    <img src={family} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/familytherapy/main'>Family Therapy</a>
  </Box>
)

export default FamilyImg