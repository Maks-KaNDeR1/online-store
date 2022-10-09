import React, { useState } from 'react'
// import Slider from 'rc-slider'
import "./Categories.scss"
import 'rc-slider/assets/index.css';
import Item from './CategoriesItem';


type PropsType = {
    // minPrice: number
    // maxPrice: number
    // stock: string[]
    // size: string[]
    // material: string[]
}


export type ArrayObjType = { value: string, checked: boolean }

export const Categories: React.FC<PropsType> = () => {


    // const stocks = ['Все', 'Ценовая', 'Скидочная', 'Подарочная']
    const material = ['Эко шпон', 'ПВX', 'Эко шпон', 'ПВX', 'Эко шпон', 'ПВX', 'Эко шпон', 'ПВX', 'Эко шпон', 'ПВX', 'Эко шпон']
    const size = ['60', '70', '80', '90', '100', '110', '120']

    const arrayObject = (array: string[]) => array.map((value, i) => ({ value: value + '-' + i, checked: false }))

    // const arrayString = (arrayObj: ArrayObjType[]) => arrayObj.filter(ar => ar.checked === true).map(arrayObj => arrayObj.value)


    // const [stocksValue, setStocksValue] = useState(arrayObject(stocks))
    const [materialValue, setMaterialValue] = useState(arrayObject(material))
    const [sizeValue, setSizeValue] = useState(arrayObject(size))

    const [minPrice, setMinPrice] = useState(500)
    const [maxPrice, setMaxPrice] = useState(5000)

    const [showPrice, setShowPrice] = useState(true)
    const [showStock, setShowStock] = useState(true)
    const [showMaterial, setShowMaterial] = useState(true)
    const [showSize, setShowSize] = useState(true)

    // const handleRangeChange = (value: any) => {
    //     setMinPrice(value[0])
    //     setMaxPrice(value[1])
    // }

    const handleMinPriceChange = (e: any) => {
        setMinPrice(e.currentTarget.value)
    }

    const handleMaxPriceChange = (e: any) => {
        setMaxPrice(e.currentTarget.value)
    }


    const handleChange = (
        name: string,
        Obj: ArrayObjType[],
        setObject: (Obj: ArrayObjType[]) => void,
    ) => {
        const newObj = Obj.map(o => o.value === name ?
            { ...o, checked: !o.checked } : o)
        setObject(newObj)
    }

    // const handleStocksChange = (name: string) => handleChange(name, stocksValue, setStocksValue)

    const handlematerialChange = (name: string) => handleChange(name, materialValue, setMaterialValue)

    const handlesizeChange = (name: string) => handleChange(name, sizeValue, setSizeValue)


    // const handleReset = () => {
    //     setStocksValue(arrayObject(stocks))
    //     setMaterialValue(arrayObject(material))
    //     setSizeValue(arrayObject(size))
    // }

    // const handleSubmit = () => {
    //     console.log(
    //         arrayString(stocksValue),
    //         arrayString(materialValue),
    //         arrayString(sizeValue),
    //     );
    // };

    const colorsObj = [
        {
            name: 'Белый',
            color: '#fff'
        },
        {
            name: 'серый',
            color: '#AFAFAF'
        },
        {
            name: 'Коричневый',
            color: '#695853'
        },
        {
            name: 'темно-серый',
            color: '#2F2F2F'
        },
        {
            name: 'Черный',
            color: '#1C1C1C'
        },
        {
            name: 'Белый',
            color: '#fff'
        },
        {
            name: 'серый',
            color: '#AFAFAF'
        },
        {
            name: 'Коричневый',
            color: '#695853'
        },
        {
            name: 'темно-серый',
            color: '#2F2F2F'
        },
        {
            name: 'Черный',
            color: '#1C1C1C'
        }
    ]

    return (
        <div className='characteristics' >
            <div className='characteristics__price' >
                <h3 onClick={() => setShowPrice(!showPrice)} >Цена
                    {/* {showPrice
                        ? <i className="fa fa-angle-up" aria-hidden="true" />
                        : <i className="fa fa-angle-down" aria-hidden="true" />
                    } */}
                </h3>
                {
                    showPrice && <div>
                        <div className='characteristics__price__inputs' >
                            <div className='characteristics__price__inputs__input' >
                                <span>От</span>
                                <input value={minPrice} onChange={handleMinPriceChange} />
                            </div>
                            <div className='characteristics__price__inputs__input' >
                                <span>До</span>
                                <input value={maxPrice} onChange={handleMaxPriceChange} />
                            </div>
                        </div>
                        {/* <div className='characteristics__price__slider'>
                            <Slider
                                min={500}
                                max={5000}
                                range
                                value={[minPrice, maxPrice]}
                                onChange={handleRangeChange}
                                trackStyle={{ backgroundColor: '#E00029', border: 'none', boxShadow: 'none' }}
                                handleStyle={{ backgroundColor: '#E00029', border: 'none', boxShadow: 'none' }}
                                // railStyle={{ backgroundColor: '#E00029', border: 'none', boxShadow: 'none' }}
                                // dotStyle={{ backgroundColor: '#E00029', border: 'none', boxShadow: 'none' }}
                                activeDotStyle={{ backgroundColor: '#E00029', border: 'none', boxShadow: 'none' }}

                            />
                        </div> */}
                    </div>
                }
            </div>
            <div className='characteristics__colors'>
                <h3 onClick={() => setShowStock(!showStock)} >Цвет
                    {/* {showPrice
                        ? <i className="fa fa-angle-up" aria-hidden="true" />
                        : <i className="fa fa-angle-down" aria-hidden="true" />
                    } */}
                </h3>
                {
                    showStock && <div>
                        <div className='characteristics__colors__items'>
                            {
                                colorsObj.map((c, i) => <div key={c + '-' + i}
                                    style={{ background: c.color }}
                                    className='characteristics__colors__items__item'>
                                    <span  >{c.name}</span>
                                </div>
                                )
                            }
                        </div>
                        <div className='characteristics__colors__angle'>
                            Показать все
                            {/* <i className="fa fa-angle-right" aria-hidden="true"></i> */}
                        </div>
                    </div>
                }
            </div>
            <Item
                title='Материал'
                arrayItem={materialValue}
                showState={showMaterial}
                setShowState={setShowMaterial}
                handleChange={(value) => handlematerialChange(value)}
                amount={7}
            />
            <Item
                title='Размер'
                arrayItem={sizeValue}
                showState={showSize}
                setShowState={setShowSize}
                handleChange={(value) => handlesizeChange(value)}
            />
        </div>
    )
}
