function createCartItem({ name, code_color, color, actual_price, image }, tamanho, price) {
  return {
    name,
    code_color,
    color,
    actual_price,
    image,
    qtd: 1,
    price,
    tamanho,
  };
}

export { createCartItem };

// calcPrice: () => {
//   return Number(actual_price.replace(',', '.').replace(/[^0-9.-]+/g, ''));
// },
