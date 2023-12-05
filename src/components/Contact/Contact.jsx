import React from 'react'
import classes from './Contact.module.scss'
import Button from '../Common/Button'
export default function Contact() {
  return (
    <section className='container'>
    <div className={classes.join}>
        <div className={classes['join-image']}>
            <div className={classes.overlay}></div>
        </div>
        <div className={classes['join-form']}>
            <h3 className={classes['join-title']}>
                Lorem ipsum dolor sit amet  adipiscing elit.
            </h3>
            <form action="">
                <div className={classes['input-row']}>
                    <input className={classes.input} type="text" placeholder='Name' />
                    <input className={classes.input} type="email" placeholder='Email' />
                </div>
                <input type="text" className={classes.input} placeholder='Address' />
                <div className={classes['input-row']} >
                    <input type="checkbox" name="" id="agree" />
                    <label style={{ color: 'white', opacity: '0.5', paddingRight: '30px' }} htmlFor="agree">Lorem ipsum dolor sit amet.</label>
                    <Button btnText="Join Now" customStyle="orange"  />
                </div>
            </form>
        </div>
    </div>
</section>
  )
}
