export const searchByCategoryFunc = (products, category) => {
  const categorySearchedItems = products.filter(
    (product) => product.category == category
  );

  console.log(categorySearchedItems);
  return categorySearchedItems;
};
