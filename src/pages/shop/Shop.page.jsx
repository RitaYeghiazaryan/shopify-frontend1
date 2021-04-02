import axios from "axios";
import { useEffect, useState } from "react";
import ShopItems from "./Copmonents/shop-items/ShopItems.component";
import styles from "./shop.module.scss";
const Shop = ({ history }) => {
  const [shopState, setShopState] = useState([]);
  useEffect(() => {
    axios.get("shop").then((response) => {
      const { data } = response;
      console.log(data);
      setShopState(data);
    });
  }, []);
  const categories = ["hats", "sneakers", "womens", "mens", "jackets"];
  const handleShopCategoryClick = (category) => {
    console.log(category);
    history.push(`/shop/${category}`);
  };
  return (
    <div className={styles.container}>
      {categories.map((category) => {
        const filteredData = shopState.filter(
          (shopState) => shopState.category === category
        );
        return (
          <div>
            
            <ShopItems
              key={category}
              data={filteredData.slice(0, 4)}
              handleShopCategoryClick={(category) => {
                handleShopCategoryClick(category);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
