import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

export default function AddButton({label, size}) {
  return (
    <Button variant='contained' size={size} startIcon={<Add/>}>{label}</Button>
  )
}
