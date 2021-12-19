import * as React from 'react'
import { Grid, Box} from 'theme-ui'
import NatureImg from './NatureImg'
import SelfCareImg from './SelfCareImg'
import GroupImg from './GroupImg'
import FamilyImg from './FamilyImg'




function Nav() {

  return (
    <React.Fragment>
      <Grid width={[128, null, 192]}>
        <NatureImg/>
        <SelfCareImg />
        <FamilyImg />
        <GroupImg />
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  )
}


export default Nav