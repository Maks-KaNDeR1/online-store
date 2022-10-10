import React, { useEffect, useState } from 'react'
import s from './Footer.module.scss'

type PropsType = {

}

export const Footer: React.FC<PropsType> = () => {

    const [mobile, setMobile] = useState(false)

    const [showBuyers, setShowBuyers] = useState(false)
    const [showPartners, setShowPartners] = useState(false)
    const [showCompany, setShowCompany] = useState(false)
    const [showSocial, setShowSocial] = useState(false)

    function myFunction(x: any) {
        if (x.matches) { // If media query matches
            setMobile(true)
        } else {
            setMobile(false)
        }
    }
    useEffect(() => {
        var x = window.matchMedia("(max-width: 450px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes
    }, [])

    return (
        <footer>
            <div className={s.angle} />
            <div className={s.angleSent} />
            {
                mobile ?
                    <div className={s.footerContent} >
                        <div className={s.items}>
                            <h3 onClick={() => setShowBuyers(state => !state)} >  Покупателям
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </h3>
                            {showBuyers && <span>
                                <span>Как сделать заказ</span>
                                <span>Способ оплаты</span>
                                <span>Доставка</span>
                                <span>Возврат товара</span>
                                <span>Правила пользования торговой площадкой</span>
                                <span>Новости</span>
                                <span>Вопросы и ответы</span>
                            </span>
                            }
                        </div>
                        <div className={s.items}>
                            <h3 onClick={() => setShowPartners(state => !state)}> Партнерам
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </h3>
                            {showPartners && <span>
                                <span>Продавайте на Dwerka.ru</span>
                                <span>Перевозчикам</span>
                            </span>
                            }
                        </div>
                        <div className={s.items}>
                            <h3 onClick={() => setShowCompany(state => !state)}> Компания
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </h3>
                            {showCompany && <span>
                                <span>О нас</span>
                                <span>Контакты</span>
                                <span>Публичная оферта</span>
                                <span>Полтика конфиденциальности</span>
                            </span>
                            }
                        </div>
                        <div className={s.items}>
                            <h3 onClick={() => setShowSocial(state => !state)}>  Мы в соцсетях
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </h3>
                            {showSocial && <span>
                                <span>info@dwerks.ru</span>
                                <span>Dwerka2020@mail.ru</span>
                            </span>
                            }
                        </div>
                        <div className={s.items}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png?20140711182052" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png?20170118154621" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mir-logo.SVG.svg/400px-Mir-logo.SVG.svg.png" alt="" />
                        </div>
                    </div>
                    :
                    <div className={s.footerContent} >
                        <div className={s.items}>
                            <h3>  Покупателям</h3>
                            <span>Как сделать заказ</span>
                            <span>Способ оплаты</span>
                            <span>Доставка</span>
                            <span>Возврат товара</span>
                            <span>Правила пользования торговой площадкой</span>
                            <span>Новости</span>
                            <span>Вопросы и ответы</span>
                        </div>
                        <div className={s.items}>
                            <h3> Партнерам </h3>
                            <span>Продавайте на Dwerka.ru</span>
                            <span>Перевозчикам</span>
                        </div>
                        <div className={s.items}>
                            <h3> Компания  </h3>
                            <span>О нас</span>
                            <span>Контакты</span>
                            <span>Публичная оферта</span>
                            <span>Полтика конфиденциальности</span>
                        </div>
                        <div className={s.items}>
                            <h3>  Мы в соцсетях </h3>
                            <span>info@dwerks.ru</span>
                            <span>Dwerka2020@mail.ru</span>
                        </div>
                        <div className={s.items}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png?20140711182052" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/800px-Visa_Inc._logo.svg.png?20170118154621" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mir-logo.SVG.svg/400px-Mir-logo.SVG.svg.png" alt="" />
                        </div>
                    </div>
            }
        </footer>
    )
}
