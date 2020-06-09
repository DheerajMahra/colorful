import React, { useState, useEffect } from 'react'
import './Saved.css'
import { getFromStorage, removeFromStorage } from '../../helpers'
import Palette from '../../components/palette/Palette'
import Empty from '../../components/empty/Empty'

const Saved = () => {

    const [palettes, setPalettes] = useState([])

    const unsavePalette = id => {
        setPalettes(palettes.filter(palette => palette.id !== id))
        removeFromStorage(id)
    }

    useEffect(() => {
        let saved = getFromStorage()
        setPalettes(saved)
    }, [])

    return (
        <div className="Saved">
        { 
            palettes.length ?
            palettes.map( palette => (
                <Palette
                    key={palette.id}
                    palette={palette}
                    unsavePalette={unsavePalette}
                />
            )) :
            <Empty /> 
        }
        </div>
    )
}

export default Saved
