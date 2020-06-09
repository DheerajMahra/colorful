import React from 'react'
import './Palette.css'
import moment from 'moment'
import { copyCode, savePalette, unsavePalette, format } from '../../helpers'

const Palette = props => {

    let { id, colors, createdAt, fromStorage, savedAt } = props.palette
    let { c1, c2, c3, c4 } = colors

    return (
        <div className="Palette-Box Shadow-Light">
            <div className="Palette">
                <div
                    className="C1"
                    style={{background: c1}}
                    onClick={(e) => copyCode(c1, e)}
                >
                    <span
                        className="C__Code"
                        onClick={(e) => e.stopPropagation()}
                    >{c1}</span>
                </div>
                <div
                    className="C2"
                    style={{background: c2}}
                    onClick={(e) => copyCode(c2, e)}
                >
                    <span
                        className="C__Code"
                        onClick={(e) => e.stopPropagation()}
                    >{c2}</span>
                </div>
                <div
                    className="C3"
                    style={{background: c3}}
                    onClick={(e) => copyCode(c3, e)}
                >
                    <span
                        className="C__Code"
                        onClick={(e) => e.stopPropagation()}
                    >{c3}</span>
                </div>
                <div
                    className="C4"
                    style={{background: c4}}
                    onClick={(e) => copyCode(c4, e)}
                >
                    <span
                        className="C__Code"
                        onClick={(e) => e.stopPropagation()}
                    >{c4}</span>
                </div>
            </div>
            <div className="Controls">
            {
                fromStorage ?

                <div className="Save" onClick={() => unsavePalette(id)}>
                    Unsave
                </div> :

                <>
                <div className="Save" onClick={(e) => savePalette(e, props.palette)}>
                    { localStorage.getItem(`colorful-${id}`) ? 'Saved' : 'Save' }
                </div>
                <div className="Age">{format(moment(createdAt.toDate()).fromNow())}</div>
                </>
            }
            </div>
        </div>
    )
}

export default Palette
