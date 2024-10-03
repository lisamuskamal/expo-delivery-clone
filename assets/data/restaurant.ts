export const getDishById = (id: number) => {
  const meals = restaurants.flatMap((restaurant) =>
    restaurant.food.flatMap((category) => category.meals)
  );
  return meals.find((meal) => meal.id === id);
};

export const getRestaurantById = (id: number) => {
  return restaurants.find((restaurant) => restaurant.id === id);
};
  
  export const restaurants = [{
    name: 'Vapiano',
    id: 1,
    rating: '4.7 Excellent',
    ratings: '(300+)',
    img: require('@/assets/data/vapianoheader.jpeg'),
    distance: '1.2 miles away',
    delivery: '15–25 min',
    tags: ['Italian', 'Pizza', 'Pasta', 'Salads', 'Vegetarian'],
    about: 'A cozy spot for traditional Italian dishes, wood-fired pizza, and fresh pasta.',
    food: [
      {
        category: 'Pasta Specials',
        meals: [
          {
            id: 1,
            name: 'Spaghetti Carbonara 🍝',
            price: 18,
            info: 'A rich and creamy dish with pancetta and a parmesan-egg sauce.',
            img: require('@/assets/data/r1f1.jpg')
          },
          {
            id: 2,
            name: 'Penne Arrabiata 🌶️',
            price: 16,
            info: 'A spicy tomato-based pasta with fresh chili, garlic, and olive oil.',
            img: require('@/assets/data/r1f2.jpg')

          },
        ],
      },
      {
        category: 'Pizza',
        meals: [
          {
            id: 3,
            name: 'Margherita Pizza 🍕',
            price: 14,
            info: 'A classic pizza topped with fresh mozzarella, basil, and tomato sauce.',
            img: require('@/assets/data/r1f3.jpg')

          },
          {
            id: 4,
            name: 'Pepperoni Pizza 🍕',
            price: 17,
            info: 'A favorite, loaded with spicy pepperoni and mozzarella cheese.',
            img: require('@/assets/data/r1f4.jpg')

          },
        ],
      },
      {
        category: 'Salads',
        meals: [
          {
            id: 5,
            name: 'Caesar Salad 🥗',
            price: 12,
            info: 'Crispy romaine, croutons, parmesan, and a creamy Caesar dressing.',
            img: require('@/assets/data/r1f5.jpg')

          },
          {
            id: 6,
            name: 'Caprese Salad 🍅',
            price: 14,
            info: 'Fresh tomatoes, mozzarella, basil, and a drizzle of balsamic glaze.',
            img: require('@/assets/data/caprese.jpg')

          },
          {
            id: 7,
            name: 'Caprese Salad 🍅',
            price: 14,
            info: 'Fresh tomatoes, mozzarella, basil, and a drizzle of balsamic glaze.',
            img: require('@/assets/data/caprese.jpg')

          },
          {
            id: 8,
            name: 'Caprese Salad 🍅',
            price: 14,
            info: 'Fresh tomatoes, mozzarella, basil, and a drizzle of balsamic glaze.',
            img: require('@/assets/data/caprese.jpg')

          },
          {
            id: 9,
            name: 'Caprese Salad 🍅',
            price: 14,
            info: 'Fresh tomatoes, mozzarella, basil, and a drizzle of balsamic glaze.',
            img: require('@/assets/data/caprese.jpg')

          },
        ],
      },
    ],
  },
  {
    name: 'Sushi Palace',
    id: 2,
    rating: '4.6 Very Good',
    ratings: '(250+)',
    img: require('@/assets/data/sushiheader.jpg'),
    distance: '2.0 miles away',
    delivery: '20–30 min',
    tags: ['Japanese', 'Sushi', 'Seafood'],
    about: 'Fresh sushi and sashimi, crafted by expert chefs using the finest ingredients.',
    food: [
      {
        category: 'Sushi Rolls',
        meals: [
          {
            id: 7,
            name: 'California Roll 🍣',
            price: 12,
            info: 'Crab, avocado, cucumber, and sesame seeds, wrapped in sushi rice and seaweed.',
            img: require('@/assets/data/california rolls.jpg')
          },
          {
            id: 8,
            name: 'Spicy Tuna Roll 🌶️',
            price: 14,
            info: 'Fresh tuna mixed with spicy mayo, cucumber, and sesame seeds.',
            img: require('@/assets/data/spicyroll.jpg')
          },
        ],
      },
      {
        category: 'Sashimi',
        meals: [
          {
            id: 9,
            name: 'Salmon Sashimi 🐟',
            price: 18,
            info: 'Thinly sliced fresh salmon, served with soy sauce and wasabi.',
            img: require('@/assets/data/salmon sashimi.jpg')
          },
          {
            id: 10,
            name: 'Tuna Sashimi 🐟',
            price: 20,
            info: 'Thinly sliced fresh tuna, served with soy sauce and wasabi.',
            img: require('@/assets/data/tuna sashimi.jpg')
          },
        ],
      },
    ],
  },
  {
    name: 'Burger King',
    id: 3,
    rating: '4.4 Good',
    ratings: '(500+)',
    img: require('@/assets/data/bkheader.png'),
    distance: '1.0 miles away',
    delivery: '10–20 min',
    tags: ['American', 'Burgers', 'Fast Food'],
    about: 'Classic fast-food burgers, fries, and shakes.',
    food: [
      {
        category: 'Burgers',
        meals: [
          {
            id: 11,
            name: 'Whopper 🍔',
            price: 8,
            info: 'Flame-grilled beef patty, topped with lettuce, tomato, onions, pickles, and mayonnaise.',
            img: require('@/assets/data/whopper.jpg')
          },
          {
            id: 12,
            name: 'Double Cheeseburger 🍔',
            price: 9,
            info: 'Two flame-grilled beef patties with double cheese, lettuce, and tomato.',
            img: require('@/assets/data/doublecheese.jpg')
          },
        ],
      },
      {
        category: 'Sides',
        meals: [
          {
            id: 13,
            name: 'French Fries 🍟',
            price: 3,
            info: 'Golden crispy fries with a hint of salt.',
            img: require('@/assets/data/fries.jpg')
          },
          {
            id: 14,
            name: 'Onion Rings 🧅',
            price: 4,
            info: 'Crispy, fried onion rings served with a dipping sauce.',
            img: require('@/assets/data/onionrings.jpg')
          },
        ],
      },
    ],
  },
  ]
  