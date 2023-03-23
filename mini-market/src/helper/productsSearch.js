const productsSearch = (array, productName) => {
  let filterArray = [];

  if (!productName.trim()) {
    return array
  }

  filterArray = array.filter(product => product.name.toLowerCase().includes(productName.trim().toLowerCase()));
  
  return filterArray
}

export default productsSearch;