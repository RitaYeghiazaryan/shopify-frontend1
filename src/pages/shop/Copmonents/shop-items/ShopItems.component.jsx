//COMPONENT
import classNames from "classnames";
import ShopItem from "../shop-item/ShopItem.component";
//STYLES
import styles from "./ShopItems.module.scss";
const ShopItems = (props) => {
  const { category, data,handleShopCategoryClick } = props;
  const titleClasses = classNames({
    [styles.title]: true,
    "u-cursor--pointer": !!handleShopCategoryClick,
});
  return (
    <div className={styles.container}>
      <h1  className={titleClasses} onClick={handleShopCategoryClick}>{category}</h1>
      <div className={styles.list}>
        {data.map((shopItem) => {
          return <ShopItem key={category} shopItem={shopItem} />;
        })}
      </div>
    </div>
  );
};

export default ShopItems;
