import React, { useState, useEffect } from 'react'
import './Feed.css'
import db from '../../config/firebase'
import Palette from '../../components/palette/Palette'
import Loading from '../../components/loading/Loading'

const Feed = props => {

    const [palette, setPalette] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const fetchPalette = () => {

        db.collection('palettes').orderBy("createdAt").onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                
                if (change.type === "added") {
                    setPalette( prevPalette => ([
                        { id: change.doc.id, ...change.doc.data() },
                        ...prevPalette
                    ]))
                    setIsLoading(false)
                }
            })
        })
    }

    useEffect(() => {
        fetchPalette()
    }, [])

    return (
        <div className="Feed">
        {
            isLoading && <Loading />
        }
        {   
            palette.map( palette => (
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
