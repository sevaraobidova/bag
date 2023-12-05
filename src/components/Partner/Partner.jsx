import React from 'react'
import classes from './Partner.module.scss'
import partner1 from '../../assets/Company logo.png'
import partner4 from '../../assets/Company logo (1).png'
import partner3 from '../../assets/Company logo (2).png'
import partner2 from '../../assets/Company logo (3).png'
export default function Partner() {

  const cards = [partner1, partner2, partner3, partner4]
  return (
    <div className={classes.partner}>
      {cards.map((item)=>(
        <img src={item} alt="" />
      ))}
</div>
  )
}
