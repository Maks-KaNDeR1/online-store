import React from 'react'
import s from './Item.module.scss'

type PropsType = {
  title: string
  icon: string
  price: number
  originalPrice?: number
  min?: boolean
}


const numbFmt = (numb: number) => new Intl.NumberFormat('ru-RU').format(numb)

export const Item: React.FC<PropsType> = ({ title, icon, price, originalPrice, min }) => {
  return (
    <div className={!min ? s.itemBlock : s.itemBlockMin}>
      <div className={s.item}>
        <img src={icon} alt="" />
      </div>
      <div className={s.price}>
        {numbFmt(price)} р
        <span>{originalPrice ? `${numbFmt(originalPrice)} p` : ''}</span>
      </div>
      <span className={s.title}>
        {title}
      </span>
    </div>
  )
}