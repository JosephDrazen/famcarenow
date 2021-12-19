import React from 'react'
import { Grid, Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import group from './images/group.png'

const GroupImg = () => (
  <Box>
    <img src={group} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/consultation/main'>Consultation</a>
  </Box>
)

export default GroupImg