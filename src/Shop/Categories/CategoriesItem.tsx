import React, { useState } from "react"
import "./Categories.scss"
import { ArrayObjType } from "./Categories"


type PropsType = {
    title: string,
    arrayItem: ArrayObjType[],
    showState: boolean,
    setShowState: (showState: boolean) => void,
    handleChange: (e: string) => void
    amount?: number
}

const Item: React.FC<PropsType> = ({ title, arrayItem, showState, setShowState, handleChange, amount }) => {

    const [showAllArray, setShowAllArray] = useState(false)
    const trmmArray = arrayItem.slice(0, amount || 4)

    const showAll = <div onClick={() => setShowAllArray(prev => !prev)}
        className='characteristics__item__angle'
    >
        Показать все
        {/* <i className="fa fa-angle-right" aria-hidden="true"></i> */}
    </div>


    const mapArray = (i: ArrayObjType) => (
        <div key={i.value} >
            <input
                type="checkbox"
                className="custom-checkbox"
                id={i.value}
                checked={i.checked}
                onChange={() => handleChange(i.value)}
            />
            <label htmlFor={i.value}>{i.value.slice(0, -2)}</label>
        </div>
    )

    return (
        <div className='characteristics__item'>
            <h3 onClick={() => setShowState(!showState)}>{title}
                {/* {showState
                    ? <i className="fa fa-angle-up" aria-hidden="true" />
                    : <i className="fa fa-angle-down" aria-hidden="true" />
                } */}
            </h3>
            {
                showState && <div>
                    {showAllArray
                        ? arrayItem.map((i) => mapArray(i))
                        : trmmArray.map((i) => mapArray(i))
                    }
                    {
                        // !showAllArray && arrayItem.length > 4 && 
                        showAll
                    }
                </div>

            }
        </div>
    )
}

export default Item