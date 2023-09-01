// loading all categories
const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const categories = data.data;
  displayCategories(categories);
};
loadCategories();

// showing the loaded categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categories.forEach((category) => {
    const categoryItem = document.createElement("div");
    categoryItem.innerHTML = `
        <button onclick="loadSingleCategory('${category.category_id}')" class="bg-neutral-300 px-4 py-2 rounded-md text-base font-medium text-gray-600">${category.category}</button>
    `;
    categoryContainer.appendChild(categoryItem);
  });
};
