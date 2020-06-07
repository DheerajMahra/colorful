import React, { useState } from 'react'
import './Create.css'
import { SketchPicker } from 'react-color'

const Create = () => {

    const [colors, setColors] = useState({
        c1: '#dddddd',
        c2: '#cccccc',
        c3: '#bbbbbb',
        c4: '#aaaaaa'
    })

    const [picker, setPicker] = useState({ isVisible: false, toggler: null })

    const handleColorChange = ({hex}) => {

        setColors({ ...colors, [picker.toggler]: hex })
    }

    return (
        <div className="Create">
    
            <div className="Palette-New Shadow-Light">
                 {
                    picker.isVisible &&
                    <>
                    <SketchPicker
                        color={colors[picker.toggler]}
                        onChange={ handleColorChange }
                    />
                    <span
                        className="Picker-CloseBtn Shadow-Light"
                        onClick={() => setPicker({ isVisible: false, toggler: null })}
                    >&#10005;</span>
                    </>
                }

                <div
                    className="New-C1"
                    style={{background: colors.c1}}
                    onClick={() => setPicker({isVisible: true, toggler: 'c1'})}
                >
                </div>

                <div
                    className="New-C2"
                    style={{background: colors.c2}}
                    onClick={() => setPicker({isVisible: true, toggler: 'c2'})}
                ></div>

                <div
                    className="New-C3"
                    style={{background: colors.c3}}
                    onClick={() => setPicker({isVisible: true, toggler: 'c3'})}
                ></div>

                <div
                    className="New-C4"
                    style={{background: colors.c4}}
                    onClick={() => setPicker({isVisible: true, toggler: 'c4'})}
                ></div>

            </div>

        </div>
    )
}

export default Create
