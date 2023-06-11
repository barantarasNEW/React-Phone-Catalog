import { Link } from 'react-router-dom';
import { getCategories } from './constants';
import './Category.scss';

type Props = {
  phonesLength: number;
  tabletsLength: number;
  accessoriesLength: number;
};

const Category: React.FC<Props> = ({
  phonesLength,
  tabletsLength,
  accessoriesLength,
}) => {
  const categories = getCategories({
    phonesLength,
    tabletsLength,
    accessoriesLength,
  });

  return (
    <section className="page__section category">
      <div className="container">
        <h2 className="page__title">
          Shop by category
        </h2>

        <ul className="category__list">
          {categories.map(({
            href,
            img,
            title,
            count,
          }) => (
            <li key={href} className="category__item">
              <Link className="category__link" to={href}>
                <figure>
                  <div className="category__img-block">
                    <img
                      className="category__img"
                      src={img}
                      alt="category"
                    />
                  </div>

                  <figcaption>
                    <h3 className="category__name">
                      {title}
                    </h3>

                    <span className="category__models">
                      {`${count} models`}
                    </span>
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
