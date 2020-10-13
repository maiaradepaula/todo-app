import React from 'react'
import IconButton from '../template/IconButton'
import Grid from './Grid'

export default props => (
    <div role='form' className='todoFrom'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa'>
            </input>
        </Grid>
        <Grid cols='12 3 2 ' >
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
)