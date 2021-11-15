export const addItemToCart = (cartItems, cartItemToAdd) => {
  return cartItems.map((item) =>
    item.id === cartItemToAdd.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
