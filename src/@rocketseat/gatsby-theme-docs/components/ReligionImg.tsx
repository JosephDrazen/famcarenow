import React from 'react'
import { Box} from 'theme-ui'


// Path to the logo file on your project
// @ts-expect-error
import religion from './images/religion.png'

const ReligionImg = () => (
  <Box>
    <img src={religion} alt='health in nature' style={{ width: 280, height: 200 }} />
    <a href='/familybulletin/religion'>Exploring Religion and Spiritually</a>
  </Box>
)

export default ReligionImg