import React from 'react'
import './Info.css'
import LogoImg from '../../img/logo.png'

const Info = () => {
    return (
        <div className="Info">

            <img className="Logo" src={LogoImg} alt=""/>

            <h1 className="Info__Head">Hope you are loving Colorful</h1>
            <p className="Info__Desc Info__Desc--main">Colorful is an app that helps designers and developers to choose color palettes for their next successful project.
            It has a collection of fresh palettes created by people everyday.<br />
            Just browse some palettes and make your project colorful.
            </p>

            <h1 className="Info__Head">How to use the app</h1>
            <p className="Info__Desc">
                Browse and search for a palette<br />
                Hover over the palette for color code<br />
                Click on colors to copy color code<br />
            </p>

            <h1 className="Info__Head">Meet the developer</h1>
            <span className="Info__Links">
                <a
                    className="Links-Item"
                    href="https://www.linkedin.com/in/dheerajmahra"
                    target="_blank"
                    rel="noopener noreferrer"
                >LinkedIn</a>
                <a
                    className="Links-Item"
                    href="https://github.com/DheerajMahra"
                    target="_blank"
                    rel="noopener noreferrer"
                >Github</a>
                <a
                    className="Links-Item"
                    href="https://medium.com/@dheerajmahra"
                    target="_blank"
                    rel="noopener noreferrer"
                >Medium</a>
                <a
                    className="Links-Item"
                    href="https://www.instagram.com/madsemicolon/"
                    target="_blank"
                    rel="noopener noreferrer"
                >Instagram</a>
            </span>

            <h1 className="Info__Head">&copy; Colorful 2020</h1>
            <p className="Info__Desc">
                Made with React by Dheeraj Mahra
            </p>
        </div>
    )
}

export default Info
