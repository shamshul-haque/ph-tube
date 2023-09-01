// loading categories
const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const categories = data.data;
  handleCategories(categories);
};

// handling the loaded categories
const handleCategories = (categories) => {
  console.log(categories);
  categories.forEach((category) => {
    category.categories;
    console.log(category);
  });
};
loadCategories();
