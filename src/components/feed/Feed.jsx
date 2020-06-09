import React from 'react'
import './Feed.css'
import _ from 'lodash'
import Palette from '../palette/Palette'

const Feed = props => {

    const { palette } = props

    return (
        <div className="Feed">
        {   
            _.values(palette).map( palette => (
                <Palette
                    key={palette.id}
                    palette={palette}
                />
            ))
        }
        </div>
    )
}

export default Feed
