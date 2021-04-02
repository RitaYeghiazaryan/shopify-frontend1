import styles from "./ShopItem.module.scss";
const ShopItem = (props) => {
  const { shopItem } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
       <button className={styles.btn}>Add to Cart</button>
        <img
          className={styles.image}
          src={shopItem.imageUrl.replace(" ", "")}
          alt=""
        />
        
      </div>
      <div className={styles.info}>
          <span>{shopItem.name}</span>
          <span>{shopItem.price}</span>

      </div>
    </div>
  );
};

export default ShopItem;
