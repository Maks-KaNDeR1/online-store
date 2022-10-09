import React from 'react'
import { Item } from '../Item/Item'
import s from './ShopHistory.module.scss'


type PropsType = {

}


export const ShopHistory: React.FC<PropsType> = () => {
    return (
        <div className={s.historyBlock} >
            <h2>Вы смотрели <span>Смотреть все</span></h2>
            <div className={s.items} >
                <Item
                    title='"Ллойд" / дверь'
                    icon='https://dwerka.ru/image/cache/catalog/%D0%A4%D0%BE%D1%82%D0%BE%20%D0%B4%D0%B2%D0%B5%D1%80%D0%B5%D0%B8%CC%86/%D0%9A%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B8%20%D1%82%D0%B0%D0%BD%D0%B4%D0%BE%D1%80/%D0%9C%D0%B5%D0%B6%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D0%B5/500/500-195x246.jpg'
                    price={16610}
                    min
                />
                <Item
                    title='"Олива" / дверь'
                    icon='https://dwerka.ru/image/cache/catalog/%D0%A4%D0%BE%D1%82%D0%BE%20%D0%B4%D0%B2%D0%B5%D1%80%D0%B5%D0%B8%CC%86/%D0%9A%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B8%20%D1%8D%D0%B2%D0%B5%D1%80%D0%B5%D1%81%D1%82/%D0%9C%D0%B5%D0%B6%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D0%B5/IN2/869uj-195x246.jpg'
                    price={39850}
                    min
                />
            </div>
        </div>
    )
}
