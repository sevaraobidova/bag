import React from 'react';
import ProductCard from './ProductCard';
import classes from './Product.module.scss';
import product1 from '../../assets/product.png';
import product2 from '../../assets/product1.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';
import product5 from '../../assets/product5.png';
import product6 from '../../assets/product6.png';
import product7 from '../../assets/product.png';
import product8 from '../../assets/product.png';
import Button from '../Common/Button';


const card = [
    {
        image: product1,
        backColor:'#FFE1E8'
    },
    {
        image: product2,
        backColor: '#FFE1E8'
    },
    {
        image: product3,
        backColor: '#F9DCFF'
    },
    {
        image: product4,
        backColor: '#FFDEE7'
    },
    {
        image: product5,
        backColor: '#ECF1FF'
    },
    {
        image: product6,
        backColor: '#FADADE'
    },
    {
        image: product7,
        backColor: '#D9E6FE'
    },
    {
        image: product8,
        backColor: '#EBF4BF'
    },
]
function Product() {
    return (
        <section className='container' style={{textAlign:'center'}} id='product'>
            <h2 className={classes['product-heading']} style={{fontSize:'3.1rem', fontWeight: 700}}>our available product</h2>
            <p className={classes['product-heading']}>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <div className={classes['product-box']}>
                {card.map((product,index) => {
                    return (
                        <ProductCard key={index} image={product.image} backColor={ product.backColor} />
                    )
                })}
            </div>

            <Button btnText="See More" customStyle="transparent" />
        </section>
    );
}

export default Product;