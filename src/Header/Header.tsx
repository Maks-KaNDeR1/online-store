import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import s from './Header.module.scss'
import basket from '../assets/image/basket.svg'
import adresses from '../assets/image/adresses.svg'
import profile from '../assets/image/profile.svg'
import burgerMenu from '../assets/image/burger-menu.svg'
import dwerkaLogo from '../assets/image/dwerka-logo.svg'
import search from '../assets/image/search.svg'

type PropsType = {

}



export const Header: React.FC<PropsType> = () => {

    const [value, setValue] = useState('')
    const [drop, setDrop] = useState(true)
    const [history, setHistory] = useState([
        'Скрытые двери',
        'Раздвижные двери',
        'Мэджик',
        'Глазки',
        'Задвижки',
        'Ключницы',
        'Навесы',
        'Входдные двери',
        'Деколративные накладки',
        'Межкомнатные двери',
    ])

    const handleClick = () => setDrop(false)
    const handleClickDelete = () => setHistory([])

    const onClickInputSearchHandler = () => setDrop(true)

    const onChangeInputSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onChangeHandler = (e: FormEvent<HTMLDivElement>) => {
        // console.log(e.target.innerText)
    }




    const inBasket = 3



    const myRef = React.createRef<HTMLInputElement>();

    useEffect(() => {
        const onClick = (e: { target: any }) => myRef.current?.contains(e.target) || setDrop(false)
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [myRef]);


    return (
        <header>
            <div className={s.background} />
            <div className={s.headerContent}>
                <div className={s.head}>
                    <div className={s.leftSide}>
                        <div> <i className="fa fa-map-marker" aria-hidden="true"></i>
                            Россия </div>
                        <div> Бесплатная доставка </div>
                        <button className={s.buttonDwerka}> Продавайте на Dwerka.ru </button>
                    </div>

                    <button className={s.buttonProblem} >
                        Сообщить о проблеме
                        <i className="fa fa-commenting" aria-hidden="true"></i>
                    </button>

                </div>
                <div className={s.headonSearch}>
                    <div className={s.leftSideSearch}>
                        <div className={s.burgerMenu}>
                            <img src={burgerMenu} alt="" />
                        </div>
                        <img src={dwerkaLogo} alt="" />
                        <div ref={myRef} className={s.inputSearchBlock}  >
                            <input
                                className={s.inputSearch}
                                style={drop ? { borderRadius: '17px 17px 0 0' } : { borderRadius: '17px' }}
                                type="search"
                                value={value}
                                onChange={onChangeInputSearchHandler}
                                onClick={onClickInputSearchHandler}
                            />
                            {
                                drop &&
                                <div onClick={handleClick} className={s.dropDown}>
                                    <div onClick={handleClickDelete} className={s.droptitle}>Очистить историю</div>
                                    {
                                        history.map((h, i) => (
                                            <div onClick={onChangeHandler} key={h + '-' + i} className={s.itemHistory}>
                                                <img src={search} alt="" />
                                                {h}
                                            </div>))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div className={s.icons} >
                        <div className={s.icon}>
                            <img src={adresses} alt="" />
                        </div>
                        <div className={s.icon}>
                            <img src={profile} alt="" />
                        </div>
                        <div className={s.icon}>
                            <img src={basket} alt="" />
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            <span className={s.basket}>{inBasket}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
