import { useContext, useMemo } from 'react';

import { ProductsContext } from '../../contexts/ProductsContext';
import { filterProducts } from '../../utils/filterProducts';
import { Filter } from '../../types/Filter';

import CardSlider from '../../components/CardSlider/CardSlider';
import MainSlider from './MainSlider/MainSlider';
import Category from './Category/Category';

const Home = () => {
  const { phones, tablets, accessories } = useContext(ProductsContext);

  const hotProducts = useMemo(() => {
    return filterProducts([...phones, ...tablets, ...accessories], Filter.HOT);
  }, [phones, tablets, accessories, filterProducts]);
  const brandProducts = useMemo(() => {
    return filterProducts([...phones, ...tablets, ...accessories], Filter.BRAND);
  }, [phones, tablets, accessories, filterProducts]);

  return (
    <>
      <MainSlider />

      <CardSlider products={hotProducts} title="Hot prices" />

      <Category
        phonesLength={phones.length}
        tabletsLength={tablets.length}
        accessoriesLength={accessories.length}
      />

      <CardSlider products={brandProducts} title="Brand new models" />
    </>
  );
};

export default Home;
