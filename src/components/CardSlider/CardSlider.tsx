import { useState, useMemo, useCallback } from 'react';
import Card from '../Card/Card';
import CardSliderBtn from '../CardSliderBtn/CardSliderBtn';
import { cardSliderSett } from './constants';
import { Product } from '../../types/Product';
import './CardSlider.scss';

type Props = {
  products: Product[];
  title: string;
};

const CardSlider: React.FC<Props> = ({ products, title }) => {
  const { width, count } = cardSliderSett;
  const [offset, setOffset] = useState(0);
  const isLeftDis = offset === 0;
  const isRightDis = useMemo(() => {
    return offset === -(width * (products.length - count));
  }, [offset, width, products, count]);

  const onClickRight = useCallback(() => {
    setOffset(prev => prev - width);
  }, [width]);

  const onClickLeft = useCallback(() => {
    setOffset(prev => prev + width);
  }, [width]);

  return (
    <section className="page__section card-slider">
      <div className="container">
        <div className="card-slider__wrapper">
          <h2 className="page__title">
            {title}
          </h2>

          <div
            className="card-slider__list"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {products.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>

          <div className="card-slider__butts">
            <CardSliderBtn
              img="./icons/left.svg"
              isDis={isLeftDis}
              onClick={onClickLeft}
            />

            <CardSliderBtn
              img="./icons/right.svg"
              isDis={isRightDis}
              onClick={onClickRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSlider;
