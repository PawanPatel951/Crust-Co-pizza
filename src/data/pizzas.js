
const pizzas = [
  {
    id: 1,
    name: "Margherita Classic",
    description: "Classic tomato sauce, mozzarella cheese and fresh basil.",
    price: 249,
    category: "Vegetarian",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Pepperoni Feast",
    description: "Loaded with pepperoni, mozzarella and rich tomato sauce.",
    price: 349,
    category: "Non-Vegetarian",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=85",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Garden Supreme",
    description: "Bell peppers, onions, olives, mushrooms and sweet corn.",
    price: 299,
    category: "Vegetarian",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85",
    badge: "Fresh",
  },
  {
    id: 4,
    name: "Four Cheese",
    description: "A creamy blend of four delicious cheeses.",
    price: 329,
    category: "Vegetarian",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Farmhouse Delight",
    description: "Onions, capsicum, tomatoes and golden mozzarella.",
    price: 279,
    category: "Vegetarian",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Spicy Mexican",
    description: "Jalapeños, capsicum, onions and a spicy Mexican sauce.",
    price: 319,
    category: "Spicy",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
    badge: "Spicy",
  },
  {
    id: 7,
    name: "BBQ Chicken",
    description: "Smoky barbecue sauce, tender chicken and melted cheese.",
    price: 369,
    category: "Non-Vegetarian",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 8,
    name: "Paneer Tikka",
    description: "Indian-style paneer tikka with peppers and spicy sauce.",
    price: 329,
    category: "Vegetarian",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85",
    badge: "Indian Special",
  },
  {
    id: 9,
    name: "Cheese Burst",
    description: "A rich, cheesy centre with a golden crust.",
    price: 299,
    category: "Cheese Lovers",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 10,
    name: "Peri Peri Paneer",
    description: "Paneer cubes, peri peri seasoning and creamy cheese.",
    price: 339,
    category: "Spicy",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 11,
    name: "Chicken Supreme",
    description: "Chicken pieces, onions, peppers and mozzarella cheese.",
    price: 389,
    category: "Non-Vegetarian",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 12,
    name: "Mushroom Magic",
    description: "Juicy mushrooms, herbs, garlic and mozzarella.",
    price: 289,
    category: "Vegetarian",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 13,
    name: "Olive Garden",
    description: "Black olives, green peppers, tomatoes and Italian herbs.",
    price: 309,
    category: "Vegetarian",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 14,
    name: "Tandoori Chicken",
    description: "Tandoori-spiced chicken with onions and creamy sauce.",
    price: 399,
    category: "Non-Vegetarian",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=85",
    badge: "Chef's Special",
  },
  {
    id: 15,
    name: "Sweet Corn Cheese",
    description: "Sweet corn, mozzarella and a creamy cheese blend.",
    price: 269,
    category: "Vegetarian",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 16,
    name: "Chilli Paneer Pizza",
    description: "Spicy paneer, crunchy peppers and chilli seasoning.",
    price: 349,
    category: "Spicy",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 17,
    name: "Double Pepperoni",
    description: "Extra pepperoni, mozzarella and a crispy golden crust.",
    price: 419,
    category: "Non-Vegetarian",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 18,
    name: "Garlic Cheese Pizza",
    description: "Roasted garlic, herbs and stretchy mozzarella cheese.",
    price: 279,
    category: "Cheese Lovers",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 19,
    name: "Mediterranean Veg",
    description: "Olives, peppers, tomatoes and Mediterranean herbs.",
    price: 339,
    category: "Vegetarian",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 20,
    name: "Ultimate Cheese Feast",
    description: "Extra mozzarella, cheddar and a creamy cheese sauce.",
    price: 379,
    category: "Cheese Lovers",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85",
    badge: "Cheese Lover's Pick",
  },
];

export default pizzas;
