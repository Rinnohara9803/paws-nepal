export const addPet = async (pet, token) => {
  const url = "http://localhost:3009/pet/createproduct";
  const formData = new FormData();
  console.log("here");
  console.log(pet);
  console.log("here");

  const imageFile = new File([pet.images[0]], pet.images[0].name);

  formData.append("name", pet.petName);
  formData.append("category", pet.category);
  formData.append("breed", pet.breed);
  formData.append("age", pet.age);
  formData.append("price", pet.price);
  formData.append("description", pet.description);
  formData.append("image", imageFile);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.status);
    const jsonData = await response.json();
    console.log(jsonData);

    if (response.status === 200) {
      return jsonData;
    } else {
      console.log(jsonData);
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const addPetFood = async (food, token) => {
  const url = "http://localhost:3009/pet/create-pet-food";
  const formData = new FormData();
  console.log("here");
  console.log(food);
  console.log("here");

  const imageFile = new File([food.images[0]], food.images[0].name);

  formData.append("name", food.productName);
  formData.append("category", food.category);
  formData.append("brand", food.brand);
  formData.append("price", food.price);
  formData.append("description", food.shortDescription);
  formData.append("protein", food.protein);
  formData.append("fat", food.fat);
  formData.append("fiber", food.fiber);
  formData.append("moisture", food.moisture);
  formData.append("ingredients", food.ingredients);
  formData.append("image", imageFile);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.status);
    const jsonData = await response.json();
    console.log(jsonData);

    if (response.status === 200) {
      return jsonData;
    } else {
      console.log(jsonData);
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const addPetAccessory = async (accessory, token) => {
  const url = "http://localhost:3009/pet/create-accessories";
  const formData = new FormData();
  console.log("here");
  console.log(accessory);
  console.log("here");

  const imageFile = new File([accessory.images[0]], accessory.images[0].name);

  formData.append("name", accessory.productName);
  formData.append("category", accessory.category);
  formData.append("brand", accessory.brand);
  formData.append("price", accessory.price);
  formData.append("size", accessory.size);
  formData.append("description", accessory.description);
  formData.append("materials", accessory.materials);
  formData.append("image", imageFile);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.status);
    const jsonData = await response.json();
    console.log(jsonData);

    if (response.status === 200) {
      return jsonData;
    } else {
      console.log(jsonData);
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const fetchPets = async () => {
  const url = "http://localhost:3009/product/get-pet-product";

  console.log('here fetch pets');

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const jsonData = await response.json();

    if (response.status === 200) {
      return jsonData;
    } else {
      console.log(jsonData);
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const fetchPetFoods = async () => {
  const url = "http://localhost:3009/product/get-petfood-product";

  console.log('here fetch pets');

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const jsonData = await response.json();

    if (response.status === 200) {
      return jsonData;
    } else {
      console.log(jsonData);
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const fetchPetAccessories = async () => {
  const url = "http://localhost:3009/product/get-petaccessories-product";

  console.log('here fetch pets');

  try {
    const response = await fetch(url, {
      method: "GET",
    });
    console.log(response.status);
    const jsonData = await response.json();
    console.log(jsonData);

    if (response.status === 200) {
      return jsonData;
    } else {
      console.log(jsonData);
      throw Error(jsonData.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
