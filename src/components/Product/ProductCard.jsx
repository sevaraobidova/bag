import styles from './ProductCard.module.scss';

function ProductCard(props) {
    return ( 
        <div style={{backgroundColor:`${props.backColor}`}} className={styles['product-card']}>
            <img src={props.image} alt="" />
        </div>
     );
}

export default ProductCard;