import React from 'react'
import './Palette.css'

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

const Palette = () => {

    return (
        <div className="Palette-Box Shadow-Light">
            <div className="Palette">
                <div
                    className="C1"
                    style={{background: "#654062"}}
                    onClick={(e) => copyCode("#654062", e)}
                >
                    <span
                        className="C__Code"
                        onClick={(e) => e.stopPropagation()}
                    >#654062</span>
                </div>
                <div
                    className="C2"
                    style={{background: "#FF9C71"}}
                    onClick={(e) => copyCode("#FF9C71", e)}
                >
                    <span
                        className="C__Code"
                        onClick={(e) => e.stopPropagation()}
                    >#FF9C71</span>
                </div>
                <div
                    className="C3"
                    style={{background: "#FBD46D"}}
                    onClick={(e) => copyCode("#FBD46D", e)}
                >
                    <span
                        className="C__Code"
                        onClick={(e) => e.stopPropagation()}
                    >#FBD46D</span>
                </div>
                <div
                    className="C4"
                    style={{background: "#E8EAD3"}}
                    onClick={(e) => copyCode("#E8EAD3", e)}
                >
                    <span
                        className="C__Code"
                        onClick={(e) => e.stopPropagation()}
                    >#E8EAD3</span>
                </div>
            </div>
            <div className="Controls">
                <div className="Like">
                    <span className="Like__Icon">&#10084;</span>
                    <span className="Like__Count">29</span>
                </div>
                <div className="Age">5 months</div>
            </div>
        </div>
    )
}

export default Palette
