import React from 'react'
import { Grid, Chip } from '@material-ui/core'

const TagContainer = (props) => {
    const { tags, deleteTag } = props
    return (
        <>
            {tags.map((tag, index) => {
                return (
                    <Grid item>
                        <Chip
                            label={tag.name}
                            onDelete={deleteTag !== undefined ? () => deleteTag({ type: 'DELETE-TAG', index: index }) : undefined}
                        />
                    </Grid>
                )
            })}
        </>
    )
}

export default TagContainer