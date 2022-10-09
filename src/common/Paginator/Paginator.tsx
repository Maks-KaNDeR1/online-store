import React, { useState } from 'react';
import s from "./Paginator.module.scss";
import cn from "classnames";

type PropsType = {
    pageSize: number
    totalItemsCount: number
    onPageChanged: (pageNumber: number) => void
    currentPage?: number
    portionSize?: number
}

const Paginator: React.FC<PropsType> = (
    {
        pageSize, totalItemsCount, onPageChanged,
        currentPage, portionSize = 5,
    }
) => {


    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const onClickNextPageHandler = () => {
        if (currentPage === portionSize) return
        const nextPage = currentPage && currentPage + 1
        nextPage && onPageChanged(nextPage)
    }

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber,] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={s.paginator}>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [s.selectedPage]: currentPage === p
                    }, s.pageNumber)}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p);
                        }}>{p}</span>
                })}
            {portionCount > portionNumber &&

                <span className={s.nextPage}>
                    <span className={s.ellipsis} >...</span>
                    <span onClick={onClickNextPageHandler} >
                        Следующая страница
                        <i className='fa fa-long-arrow-right' style={{ opacity: '0' }} ></i>
                        <i className='fa fa-long-arrow-right' ></i>
                    </span>
                </span>
            }
        </div>
    )
}

export default Paginator;