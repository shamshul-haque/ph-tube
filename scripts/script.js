// loading all categories
const loadCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const categories = data.data;
  displayCategories(categories);
};

// showing the loaded categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categories.forEach((category) => {
    const categoryName = document.createElement("div");
    categoryName.innerHTML = `
        <button onclick="loadSingleCategory('${category.category_id}')" class="bg-neutral-300 px-4 py-2 rounded-md text-base font-medium text-gray-600">${category.category}</button>
    `;
    categoryContainer.appendChild(categoryName);
  });
};

// loading the items of every single category
const loadSingleCategory = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  const items = data.data;
  displayCategoryItems(items);
};

// showing the loaded items of every single category
const displayCategoryItems = (items) => {
  const itemsContainer = document.getElementById("items-container");
  itemsContainer.textContent = "";
  if (items.length === 0) {
    itemsContainer.classList.remove(
      "grid",
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-4",
      "gap-5"
    );
    const categoryItem = document.createElement("div");
    categoryItem.classList = `w-full pt-10 space-y-5 pb-10`;
    categoryItem.innerHTML = `
        <img src="../images/Icon.png" alt="icon" class="mx-auto"/>
        <p class="text-center text-2xl text-black font-bold">Oops!! Sorry, There is no content here!</p>
    `;
    itemsContainer.appendChild(categoryItem);
  } else {
    items.forEach((item) => {
      itemsContainer.classList = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 border border-red-500 pb-5`;
      const categoryItem = document.createElement("div");
      categoryItem.classList = `space-y-3`;
      categoryItem.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}" 
            class="h-40 w-60 rounded-md"/>
            <div class="flex">
                <img src="${item?.authors[0]?.profile_picture}" 
                alt="${item?.authors[0]?.profile_name}" 
                class="w-10 h-10 rounded-full"/>
                <div class="ml-2">
                    <p class="text-base text-black font-bold">${item.title}</p>
                    <p class="text-sm text-gray-400-400 font-normal flex items-center gap-2">
                        ${item?.authors[0]?.profile_name}
                        <span>${
                          item?.authors[0]?.verified === true
                            ? `<img src="../images/verify.png" alt="verify" class="w-3 h-3"/>`
                            : ``
                        }</span> 
                    </p>
                    <p class="text-sm text-gray-400-400 font-normal">${
                      item?.others?.views
                    }</p>
                </div>
            </div>
        `;
      itemsContainer.appendChild(categoryItem);
    });
  }
};
loadCategories();
