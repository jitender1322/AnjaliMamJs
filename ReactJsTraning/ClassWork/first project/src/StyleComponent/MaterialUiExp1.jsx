import React from 'react'
import { Box, Button } from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
export default function MaterialUiExp1() {
    return (
        <div>
            <button>base ui button</button>
            <Button>mui button</Button>
            <Box sx={{ '& button': { m: 1 } }} >
                <Button variant='text'>Text button</Button>
                <Button variant='outlined'>Text button</Button>
                <Button variant='contained'>Text button</Button>
            </Box>
            <Box sx={{ '& button': { m: 1 } }} >
                <Button variant='contained' size='small' >small button</Button>
                <Button variant='contained' size='medium'>medium button</Button>
                <Button variant='contained' size='large'>large button</Button>
            </Box>
            <Box sx={{ '& button': { m: 1 } }} >
                <Button variant='outlined' endIcon={<Edit />} size='medium' >edit button</Button>
                <Button variant='outlined' endIcon={<Delete />} size='medium'>delete button</Button>
            </Box>

        </div>
    )
}
