import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import {Box,Stack,Typography} from '@mui/material'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant ="h3" ml={4} mb={5}>Exercise that target the same muscle group </Typography>
      <Stack direction="row" sx={{p:'2',position : 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar  data={targetMuscleExercises}/>:<Loader />}
      </Stack>
      <Typography variant ="h3" ml={4} mt={5} mb={5}>Exercise that uses the same equipment </Typography>
      <Stack direction="row" sx={{p:'2',position : 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollBar  data={equipmentExercises}/>:<Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
