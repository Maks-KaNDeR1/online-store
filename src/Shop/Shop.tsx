import React, { useState } from 'react'
import Paginator from '../common/Paginator/Paginator'
import { Categories } from './Categories/Categories'
import { Item } from './Item/Item'
import { items } from './items'
import s from './Shop.module.scss'
import { ShopHistory } from './ShopHistory/ShopHistory'

type PropsType = {

}


export const Shop: React.FC<PropsType> = () => {

    const [pageSize,] = useState(32)
    const [totalUsersCount,] = useState(500)
    const [currentPage, setCurrentPage] = useState(1)

    const onPageChanged = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className={s.shopBlock}>
            <div className={s.shopHeader}>
                <div className={s.shopHeaderIcon}>
                    <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                </div>
                <div className={s.shopHeaderTitle}> По запросу "декоративные накладки" найдено</div>
            </div>

            <div className={s.shopContent}>
                <Categories />
                <div className={s.itemsBlock}>
                    <span className={s.spanSorting}>Сортировать</span>
                    <div className={s.items}>
                        {items.map((i, indx) => <Item
                            key={i + '-' + indx}
                            title={i.title}
                            icon={i.icon}
                            price={i.price}
                            originalPrice={i.originalPrice}
                        />)}
                    </div>
                    <div className={s.buttonLoadmore}>
                        <button>
                            Показать еще
                            <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                            <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className={s.preloader}>
                        <Paginator
                            pageSize={pageSize}
                            totalItemsCount={totalUsersCount}
                            onPageChanged={onPageChanged}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
            <ShopHistory />
        </div>
    )
}
