const products = [
  {
    id: "redshoe",
    description: "Red shoe",
    price: 42.12,
  },
  {
    id: "bluejean",
    description: "Blue jeans",
    price: 55.55,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
