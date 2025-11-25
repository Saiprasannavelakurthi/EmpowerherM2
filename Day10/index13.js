function processCategories(categories) {
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  return categoryCount;
}

function sortCategoriesByCount(categories) {
  const categoryCount = processCategories(categories);
  const sorted = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
  return sorted;
}

const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(processCategories(categories));
console.log(sortCategoriesByCount(categories));
