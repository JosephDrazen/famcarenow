import * as React from 'react'
import { Grid, Box} from 'theme-ui'
import NatureHealthImg from './NatureHealthImg'
import ReligionImg from './ReligionImg'
import BPDImg from './BPDImg'
import GenderImg from './GenderImg'
import Validation from './Validation'
import CBTImage from './CBTImage'
import BSTImage from './BSTImage'
import TheoreticalImg from './TheoreticalImg'

function EducationNav() {

  return (
    <React.Fragment>
      <Grid width={[128, null, 192]}>
        <NatureHealthImg />
        <ReligionImg />
        <BPDImg />
        <GenderImg />
        <Validation />
        <CBTImage />
        <BSTImage />
        <TheoreticalImg />
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  )
}


export default EducationNav