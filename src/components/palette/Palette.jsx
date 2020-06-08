import React from 'react'
import './Palette.css'
import moment from 'moment'

 const copyCode = (code, e) => {

    let codeElem = e.target.firstElementChild
    //select hexcode
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(codeElem);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(codeElem);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        alert("Your browser doesn't support copy to clipboard.");
    }
    //execute copy command on whatever code is selected
    document.execCommand("copy");

    codeElem.innerHTML = "<i>Copied!</i>"
    //set hexcode back after 1s
    setInterval(() => {
        codeElem.innerHTML = code
    }, 1000);
}

const Palette = props => {

    let { id, colors, likes, isLiked, createdAt, updateLikes } = props
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
                <div className="Like" onClick={() => updateLikes(id)}>
                    <span className="Like__Icon">&#10084;</span>
                    <span className="Like__Count">{likes}</span>
                </div>
                <div className="Age">{moment(createdAt.toDate()).fromNow()}</div>
            </div>
        </div>
    )
}

export default Palette
