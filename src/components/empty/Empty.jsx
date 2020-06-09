import React from 'react'
import './Empty.css'
import { Link } from 'react-router-dom'

const Empty = props => {
    return (
        <div className="Empty">
            <img className="Empty__Img" src="https://assets.website-files.com/5bcb5ee81fb2091a2ec550c7/5c18815260ec1ad2acf8d06e_drawkit-nature-man-colour.svg" alt="nothing saved" />
            <p className="Empty__Text">Nothing found in saved</p>
            <Link to="/" style={{textDecoration: 'none'}}>
                <span className="Empty__Btn">Browse palettes</span>
            </Link>
        </div>
    )
}

export default Empty
