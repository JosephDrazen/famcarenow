import React from 'react'
import { Grid, Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import bst from './images/bst.png'

const BSTImage = () => (
  <Box>
    <img src={bst} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/familybulletin/behaviourtherapy'>Behavioral Support Therapy</a>
  </Box>
)

export default BSTImage