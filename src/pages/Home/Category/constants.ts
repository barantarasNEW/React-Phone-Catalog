type Categories = {
  phonesLength: number;
  tabletsLength: number;
  accessoriesLength: number;
};

export const getCategories = ({
  phonesLength,
  tabletsLength,
  accessoriesLength,
}: Categories) => {
  return [
    {
      href: '/phones',
      img: './img/categories/category-phones.png',
      title: 'Mobile phones',
      count: phonesLength,
    },
    {
      href: '/tablets',
      img: './img/categories/category-tablets.png',
      title: 'Tablets',
      count: tabletsLength,
    },
    {
      href: '/accessories',
      img: './img/categories/category-accessories.png',
      title: 'Accessories',
      count: accessoriesLength,
    },
  ];
};
