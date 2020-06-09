import React, { useState, useEffect } from 'react'
import './Saved.css'
import _ from 'lodash'
import { getSavedFromStorage } from '../../helpers'
import Palette from '../palette/Palette'
import Empty from '../empty/Empty'
import Loading from '../loading/Loading'

const Saved = () => {

    const [palettes, setPalettes] = useState(null)
    const [isEmpty, setIsEmpty] = useState(false)

    useEffect(() => {
        let saved = getSavedFromStorage()

        if(saved === null) {
            setIsEmpty(true)
            return
        } 
        setIsEmpty(false)
        setPalettes(saved)
    }, [])

    return (
        <div className="Saved">
        { 
            isEmpty ?
            <Empty /> : 
            _.values(palettes).map( palette => (
                <Palette
                    key={palette.id}
                    palette={palette}
                />
            ))
        }
        </div>
    )
}

export default Saved
