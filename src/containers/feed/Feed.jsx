import React, { useState, useEffect } from 'react'
import './Feed.css'
import _ from 'lodash'
import db from '../../config/firebase'
import Palette from '../../components/palette/Palette'

const updateLikes = (id) => {
    db.collection('palettes').doc(id).update({ likes: 1 })
}

const Feed = () => {

    const [palette, setPalette] = useState({})

    useEffect(() => {
       fetchPalette()
    }, [])

    const fetchPalette = () => {

         db.collection('palettes').onSnapshot(snapshot => {
             console.log(snapshot.docs)
            snapshot.docChanges().forEach(change => {

                if (change.type === "added") {
                    setPalette( prevPalette => ({ 
                        [change.doc.id]: { 
                            id: change.doc.id,
                            ...change.doc.data()
                        },
                        ...prevPalette
                    }))
                }
                if (change.type === "modified") {
                    console.log(change.doc.data())
                     setPalette( prevPalette => ({ 
                        [change.doc.id]: { 
                            id: change.doc.id,
                            ...change.doc.data()
                        },
                        ...prevPalette
                    }))
                }
            })
        })
    }

    return (
        <div className="Feed">
        {   
            _.values(palette).map( palette => (
                <Palette
                    key={palette.id}
                    {...palette}
                    updateLikes={updateLikes}    
                />
            ))
        }
        </div>
    )
}

export default Feed
