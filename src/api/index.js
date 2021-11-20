export const fetchProductList = async () => {
  try {
    const data = await fetch("https://random-data-api.com/api/food/random_food?size=30");

    if (data.ok) {
      return await data.json();
    }
  } catch (err) {
    console.error("halt!", err);
  }
};
