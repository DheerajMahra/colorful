import React, { useState, useEffect } from 'react'
import './Feed.css'
import db from '../../config/firebase'
import Palette from '../../components/palette/Palette'
import Loading from '../../components/loading/Loading'

const Feed = props => {

    const [palette, setPalette] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [start, setStart] = useState("")
    const [totalPalettes, setTotalPalettes] = useState(0)
    const [totalLoadMoreAllowed, setTotalLoadMoreAllowed] = useState(0)
    const [totalLoadMoreClicks, setTotalLoadMoreClicks] = useState(0)
    const chunks = 2

    const loadMore = start => {

        if(totalLoadMoreClicks >= totalLoadMoreAllowed) {
            return
        }
        setIsLoading(true)
        setTotalLoadMoreClicks(prevState => prevState + 1)
        getTotalPalettes()

        db.collection('palettes').orderBy("createdAt", "desc")
        .startAfter(start).limit(chunks).get()
        .then(snaps => {
            snaps.docs.forEach(snap => {
                setPalette( prevPalette => ( [...prevPalette, snap.data()] ))
                setIsLoading(false)
            })
        })
    }

    const getTotalPalettes = () => {
        db.collection('counter').doc('counter').get()
        .then(snap => { setTotalPalettes(snap.data().count) })
        .catch(e => alert('Some error occured', e))
    }


    const LoadMoreAllowed = () => {
        let totalLoadMoreAllowed = Math.floor((totalPalettes/chunks) - 1)
        setTotalLoadMoreAllowed(totalLoadMoreAllowed)
    }

    const fetchPalette = () => {

        db.collection('palettes').orderBy("createdAt", "desc")
        .startAfter(start).limit(chunks).get()
        .then(snaps => {
            snaps.docs.forEach(snap => {
                setPalette( prevPalette => ( [...prevPalette, snap.data()] ))
                setIsLoading(false)
            })
            console.log('prevstate', start)
            console.log(snaps.docs[snaps.docs.length - 1].data())
        setStart(snaps.docs[snaps.docs.length - 1])
        })
    }

    useEffect(() => {
        getTotalPalettes()
        fetchPalette()
        return () => { setStart("") }
    }, [])

    useEffect(() => {
        LoadMoreAllowed();
    }, [totalPalettes]);

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
        {
            !isLoading &&
            <a className="LoadMore__Btn" onClick={() => loadMore(start)}>Load more</a>
        }
        </div>
    )
}

export default Feed
