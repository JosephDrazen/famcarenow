import React from 'react'
import { Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import bpd from './images/bpd.png'

const BPDImg = () => (
  <Box>
    <img src={bpd} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/familybulletin/bpd'>Borderline Personality Disorder</a>
  </Box>
)

export default BPDImg