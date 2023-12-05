import React from 'react'
import classes from './PopularProduct.module.scss'
import product from '../../assets/top-product.png'
import product1 from '../../assets/top-product1.png'
import product2 from '../../assets/top-product2.png'
import product3 from '../../assets/top-product3.png'

export default function PopularProduct() {

  const card = [
    {title: "water resistant",
     img: product},
     {title: "charging system",
     img: product},
     {title: "artificial leather",
     img: product},
     {title: "modern clothes",
     img: product},
  ]
  return (
    <div>
      <section className={classes['top-product']}>
        {card.map((item)=>(
          <div className={classes.card}>
            <h3 className={classes['card-title']}>{item.title}</h3>
            <img src={item.img} alt="" className={classes['card-img']} />
          </div>
        ))}
      </section>
    </div>
  )
}
