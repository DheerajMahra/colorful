import React, { useState } from 'react'
import './Create.css'
import { SketchPicker } from 'react-color'
import { withRouter } from 'react-router-dom'
import db from '../../config/firebase'
import Loading from '../loading/Loading'

const Create = props => {

    const [colors, setColors] = useState({
        c1: '#dddddd',
        c2: '#cccccc',
        c3: '#bbbbbb',
        c4: '#aaaaaa'
    })
    const [picker, setPicker] = useState({ isVisible: false, toggler: null })
    const [isCreateBtnVisible, setIsCreateBtnVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleColorChange = ({hex}) => {
        setColors({ ...colors, [picker.toggler]: hex.toUpperCase() })
        setIsCreateBtnVisible(true)
    }

    const saveToDb = async () => {

        setIsLoading(true)

        // Add a new document with auto-generated id
        let newPalette = {
            colors: { ...colors },
            createdAt: new Date(),
            isLiked: false,
            likes: 0
        }

        try {
            await db.collection('palettes').add(newPalette)
            setIsLoading(false)
            props.history.push('/')

        } catch(e) {
            setIsLoading(false)
            alert("An error occured: ", e);
        }
    }

    return (
        <div className="Create">
            {
                isLoading && <Loading />
            }
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
                {
                    isCreateBtnVisible && 
                    <span
                        className="Palette-New__CreateBtn"
                        onClick={saveToDb}
                    >Create</span>
                }   
            </div>
        </div>
    )
}

export default withRouter(Create)
