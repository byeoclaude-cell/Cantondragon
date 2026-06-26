/* ============================================================
   Canton Dragon — menu data
   Sourced from the restaurant's 2025 Dine-In menu.
   Edit prices / descriptions here; the page renders from this.
   ============================================================ */

const IMG = (id, w = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

/* Featured signature dishes (replace images with real plating photos). */
const SIGNATURES = [
  { name: 'BBQ Pork Fried Rice', price: '14.99', note: 'Wok-fried with egg, soy & scallions',          img: 'assets/Entrees/porkfriedrice.png' },
  { name: 'Shrimp Lo Mein',      price: '15.99', note: 'Soft noodles, shrimp, onion & bean sprouts',    img: 'assets/Entrees/Shrimp%20lomein.png' },
  { name: 'Beef Chow Fun',       price: '18.99', note: 'Wide rice noodles, beef, onion & bean sprouts', img: 'assets/Entrees/beefchowfun.png' },
  { name: 'Kung Pao Shrimp',     price: '18.99', note: 'Zucchini, bell pepper & peanuts — spicy',       img: 'assets/Entrees/brocolishrimp.png' },
];

/* Gallery (replace with the restaurant's own photography). */
const GALLERY = [
  { img: IMG('photo-1617093727343-374698b1b08d'), alt: 'Assorted wok-fired Chinese dishes on a table' },
  { img: IMG('photo-1582878826629-29b7ad1cdc43'), alt: 'Stir-fried noodles with vegetables' },
  { img: IMG('photo-1541544741938-0af808871cc0'), alt: 'Steamed dumplings ready to serve' },
  { img: IMG('photo-1559314809-0d155014e29e'),    alt: 'Bowl of hot and sour soup' },
  { img: IMG('photo-1626804475297-41608ea09aeb'), alt: 'Crispy shrimp dish plated' },
  { img: IMG('photo-1455619452474-d2be8b1e70cd'), alt: 'Shared family-style dinner spread' },
  { img: IMG('photo-1552566626-52f8b828add9'),    alt: 'Warm restaurant dining room' },
  { img: IMG('photo-1525755662778-989d0524087e'), alt: 'Bowl of noodles in broth' },
];

/* Full menu, grouped by tab. spice:true adds a chili tag. */
const MENU = [
  {
    id: 'appetizers', label: 'Appetizers',
    note: 'Perfect for sharing.',
    items: [
      { name: 'Canton Sampler', price: '16.99', desc: 'Egg roll (2), crab puff (2), chicken satay (2) & fried shrimp.' },
      { name: 'Chicken Lettuce Wraps', price: '15.99' },
      { name: 'Korean Kalbi (Short Ribs)', price: '11.99' },
      { name: 'Angus Beef Skewers (2)', price: '11.99' },
      { name: 'Spicy Sichuan Dumpling', price: '10.99', spice: true },
      { name: 'Spicy Chicken Wings', price: '10.99', desc: 'Spicy salt & pepper.', spice: true },
      { name: 'Shrimp Toast', price: '9.99' },
      { name: 'Chicken Satay (2)', price: '8.99' },
      { name: 'Golden Fried Shrimp', price: '8.99' },
      { name: 'Spicy Crispy Calamari', price: '8.99', spice: true },
      { name: 'Onion Rings', price: '8.99' },
      { name: 'Crab Angels', price: '7.99' },
      { name: 'Pork Dumplings', price: '7.99' },
      { name: 'Spicy Garlic Edamame', price: '7.99', spice: true },
      { name: 'Vegetable Dumplings', price: '6.99' },
      { name: 'Edamame', price: '5.99' },
      { name: 'Scallion Pancake', price: '4.99' },
      { name: 'Vegetable Egg Roll (2)', price: '2.99' },
      { name: 'Chicken Egg Roll (1)', price: '2.99' },
    ]
  },
  {
    id: 'soups-salads', label: 'Soups & Salads',
    items: [
      { name: 'Wonton Soup', price: 'Cup 7.99 / Bowl 12.99', desc: 'Pork wontons, shrimp & chicken with vegetables in house chicken broth.' },
      { name: 'Sizzling Rice Soup', price: 'Cup 6.99 / Bowl 11.99', desc: 'Shrimp & chicken with vegetables, sizzling crispy rice on top.' },
      { name: 'Hot & Sour Soup', price: 'Cup 4.99 / Bowl 9.99', desc: 'Chicken, tofu, bamboo, egg, white pepper & vinegar.', spice: true },
      { name: 'Egg Drop Soup', price: 'Cup 4.99 / Bowl 9.99', desc: 'A traditional favorite with egg, chicken & corn.' },
      { name: 'Miso Soup', price: 'Cup 4.99', desc: 'Miso base, tofu & seaweed.' },
      { name: 'Dragon Clam Chowder', price: 'Cup 9.99', desc: 'Clams, bacon, potatoes, celery, onions, light creamy broth.' },
      { name: 'Supreme Seafood Stew', price: 'Pot 10.99', desc: 'Clams, mussels, shrimp, potatoes & celery in tomato broth.' },
      { name: 'Asian Shrimp Salad', price: '14.99', desc: 'Shrimp, bacon, mixed greens in house aka-miso dressing. Chicken 13.99.' },
      { name: 'Shrimp Garden Salad', price: '14.99', desc: 'Shrimp, cucumber, carrot, greens & strawberry, sweet chili dressing. Chicken 13.99.', spice: true },
      { name: 'House Salad', price: '7.99', desc: 'Mixed greens, lettuce & strawberry, house aka-miso dressing.' },
    ]
  },
  {
    id: 'lunch', label: 'Lunch Specials',
    note: 'Served 11am–3pm, Mon–Fri with steamed rice, egg roll, and soup or salad. Sub soft noodle +$4.99 or fried rice +$2.99.',
    items: [
      { name: 'Mongolian Beef', price: '16.99' },
      { name: 'Beef Broccoli', price: '15.99' },
      { name: 'Pepper Steak', price: '15.99' },
      { name: 'Shrimp Lo Mein', price: '15.99' },
      { name: 'Shrimp Chop Suey', price: '15.99' },
      { name: 'Kung Pao Shrimp', price: '15.99', spice: true },
      { name: 'Walnut Shrimp', price: '15.99' },
      { name: 'Happy Family', price: '15.99' },
      { name: 'Sweet & Sour Shrimp', price: '15.99' },
      { name: 'Shrimp Vegetables', price: '15.99' },
      { name: 'Chicken Chop Suey', price: '14.99' },
      { name: 'Chicken Lo Mein', price: '14.99' },
      { name: 'Cashew Chicken', price: '14.99' },
      { name: 'Kung Pao Chicken', price: '14.99', spice: true },
      { name: 'Sweet & Sour Chicken', price: '14.99' },
      { name: 'Sweet & Sour Pork', price: '14.99' },
      { name: 'Chicken Vegetables', price: '14.99' },
      { name: 'Teriyaki Chicken', price: '14.99' },
      { name: 'Orange Chicken', price: '14.99', spice: true },
      { name: 'General Tso Chicken', price: '14.99', spice: true },
      { name: 'Sesame Chicken', price: '14.99' },
      { name: 'Moo Goo Gai Pan', price: '14.99' },
      { name: 'Vegetable Lo Mein', price: '13.99' },
      { name: 'Vegetable Delight', price: '13.99' },
      { name: 'Kung Pao Vegetables', price: '13.99', spice: true },
      { name: 'Tofu Vegetable', price: '13.99' },
    ]
  },
  {
    id: 'chef', label: "Chef's Specials",
    items: [
      { name: 'Beef Mignon', price: '27.99', desc: 'Chunks of tender beef quick-stirred with onion in rich roasted black-pepper sauce.' },
      { name: 'Roast Duck', price: '26.99', desc: 'Boneless duck slowly roasted until crispy and golden in a light sauce.' },
      { name: 'Butterfish (Whole)', price: '20.99', desc: 'Charbroiled with sea salt, red onion, white pepper, cilantro & lime juice.' },
      { name: 'Atlantic Salmon', price: '19.99', desc: 'Charbroiled with teriyaki sauce.' },
      { name: 'Combo Egg Fu Yung', price: '19.99', desc: 'Shrimp, chicken & BBQ pork, Canton style with egg & cabbage, brown sauce. Single protein 18.99.' },
      { name: 'Salt & Pepper Squids', price: '18.99', desc: 'Fried squid with peppers & onion in spicy pepper & salt.', spice: true },
      { name: 'Happy Family', price: '18.99', desc: 'Shrimp, chicken & beef with broccoli, carrot, celery & zucchini in brown sauce.' },
      { name: 'Salt & Pepper Pork Chop', price: '17.99', desc: 'Fried pork chop with peppers & onion in spicy pepper & salt.', spice: true },
      { name: 'Sweet & Sour Pork', price: '17.99', desc: 'Fried pork with pepper, onion & pineapple in house sweet & sour sauce.' },
    ]
  },
  {
    id: 'chicken', label: 'Chicken',
    note: 'White meat. Dinner entrées served with steamed rice — all $17.99.',
    items: [
      { name: 'Sweet & Sour Chicken', price: '17.99', desc: 'Fried chicken, red pepper, onion & pineapple in house sweet & sour sauce.' },
      { name: 'Cashew Chicken', price: '17.99', desc: 'Tenderloin with zucchini, celery, carrot & nuts in brown sauce.' },
      { name: 'Kung Pao Chicken', price: '17.99', desc: 'Tenderloin with peppers & peanuts in spicy kung pao sauce.', spice: true },
      { name: 'Orange Chicken', price: '17.99', desc: 'Crispy battered chicken in spicy orange sauce.', spice: true },
      { name: 'General Tso Chicken', price: '17.99', desc: 'Crispy chicken in house-made spicy General sauce.', spice: true },
      { name: 'Sesame Chicken', price: '17.99', desc: 'Crispy chicken in house-made honey sauce.' },
      { name: 'Dragon Chicken', price: '17.99', desc: 'Crispy chicken & black pepper in spicy steak sauce.', spice: true },
      { name: 'Lemon Chicken', price: '17.99', desc: 'Crispy chicken in house-made lemon sauce.' },
      { name: 'Teriyaki Chicken', price: '17.99', desc: 'Grilled white meat in lightly sweetened brown sauce.' },
      { name: 'Red Curry Chicken', price: '17.99', desc: 'Green bean, peppers & onion in spicy coconut-peanut red curry.', spice: true },
      { name: 'Green Curry Chicken', price: '17.99', desc: 'Green bean, peppers & onion in spicy coconut-peanut green curry.', spice: true },
      { name: 'Chicken Eggplant', price: '17.99', desc: 'Tenderloin with Chinese eggplant in Yu Shan sauce.' },
      { name: 'Chicken Vegetables', price: '17.99', desc: 'Bai choy, broccoli, carrot, zucchini & string bean in white sauce.' },
      { name: 'Chicken String Bean', price: '17.99', desc: 'String bean & carrot in light brown garlic sauce.' },
      { name: 'Chicken Chop Suey', price: '17.99', desc: 'Bean sprouts, bai choy, snow peas & carrot in white sauce.' },
      { name: 'Moo Goo Kai Pan', price: '17.99', desc: 'Mushroom, zucchini, snow peas & carrot in white sauce.' },
    ]
  },
  {
    id: 'beef', label: 'Beef',
    note: 'Tenderloin. Served with steamed rice.',
    items: [
      { name: 'Beef Mignon', price: '27.99', desc: 'Tender beef quick-stirred with onion in roasted black-pepper sauce.' },
      { name: 'Mongolian Beef', price: '20.99', desc: 'Green & white onion in chef special soy sauce.' },
      { name: 'Pepper Steak', price: '19.99', desc: 'Red & green bell pepper in brown sauce.' },
      { name: 'Beef String Bean', price: '19.99', desc: 'String bean & carrot, Asian style, light brown garlic sauce.' },
      { name: 'Red Curry Beef', price: '19.99', desc: 'Green bean, peppers & onion in spicy coconut-peanut red curry.', spice: true },
      { name: 'Green Curry Beef', price: '19.99', desc: 'Green bean, peppers & onion in spicy coconut-peanut green curry.', spice: true },
      { name: 'Beef Broccoli', price: '18.99', desc: 'Broccoli & carrot in brown sauce.' },
    ]
  },
  {
    id: 'shrimp', label: 'Jumbo Shrimp',
    note: 'Served with steamed rice — all $18.99.',
    items: [
      { name: 'Kung Pao Shrimp', price: '18.99', desc: 'Zucchini, red bell pepper & peanuts in spicy kung pao sauce.', spice: true },
      { name: 'Walnut Shrimp', price: '18.99', desc: 'Lightly battered, deep fried, special creamy sauce.' },
      { name: 'Sweet & Sour Shrimp', price: '18.99', desc: 'Red pepper, onion & pineapple in house sweet & sour sauce.' },
      { name: 'Salt & Pepper Shrimp', price: '18.99', desc: 'Peppers & onion in spicy pepper & salt.', spice: true },
      { name: 'Shrimp Vegetables', price: '18.99', desc: 'Bai choy, broccoli, carrot, zucchini & string bean in white sauce.' },
      { name: 'Shrimp Chop Suey', price: '18.99', desc: 'Bean sprouts, bai choy, snow peas & carrot in white sauce.' },
    ]
  },
  {
    id: 'veg', label: 'Vegetables',
    items: [
      { name: 'Vegetable Delight', price: '15.99', desc: 'Bai choy, broccoli, snow peas, carrot, celery, zucchini & string bean in white sauce.' },
      { name: 'Kung Pao Vegetable', price: '15.99', desc: 'Zucchini & bell peppers with assorted vegetables & peanuts in spicy kung pao sauce.', spice: true },
      { name: 'Tofu Eggplant', price: '15.99', desc: 'Tofu stir-fried with eggplant in Yu Shan sauce.' },
      { name: 'Tofu String Beans', price: '15.99', desc: 'Tofu stir-fried with string beans in Yu Shan sauce.' },
      { name: 'Brussels Sprout', price: '14.99', desc: 'Fried Brussels sprout with sea salt & Parmesan.' },
    ]
  },
  {
    id: 'noodles', label: 'Noodles',
    note: 'Lo mein, chow fun, chow mein & noodle soups.',
    items: [
      { name: 'Cantonese Chow Mein', price: '20.99', desc: 'Pan-fried thin egg noodles with shrimp, chicken, beef & vegetables.' },
      { name: 'Combo Chow Fun', price: '19.99', desc: 'Wide rice noodles, shrimp, chicken, beef, onion & bean sprouts. Single protein 17.99–18.99.' },
      { name: 'Thai Curry Noodle Soup', price: '16.99', desc: 'Coconut-peanut spicy curry soup with chicken satay (beef skewer 18.99).', spice: true },
      { name: 'Combo Lo Mein', price: '18.99', desc: 'Shrimp, chicken & beef pan-fried with onion & bean sprouts. Single protein 16.99–17.99.' },
      { name: 'Singapore Rice Noodle', price: '18.99', desc: 'Thin rice noodle with egg, shrimp, chicken & peppers in spicy curry powder.', spice: true },
      { name: 'Pork Belly Noodle Soup', price: '17.99', desc: 'Choice of fresh egg noodle or thin rice noodle.' },
      { name: 'BBQ Pork Noodle Soup', price: '16.99', desc: 'Choice of fresh egg noodle or thin rice noodle.' },
      { name: 'Butter Garlic Noodle', price: '12.99', desc: 'Fresh thick egg noodle, melted butter, garlic & Parmesan. Add chicken 4.99 / shrimp 5.99.' },
      { name: 'Soy Egg Noodle', price: '12.99', desc: 'Thin egg noodle, Hong Kong style with onion & soy. Add chicken or BBQ pork 4.99.' },
    ]
  },
  {
    id: 'mushu-rice', label: 'Mu Shu & Fried Rice',
    note: 'Mu shu served with 4 flour tortillas & hoisin.',
    items: [
      { name: 'Mu Shu Shrimp', price: '17.99', desc: 'Stir-fried with cabbage & egg in hoisin; wrap like a burrito.' },
      { name: 'Mu Shu Chicken', price: '16.99', desc: 'Stir-fried with cabbage & egg in hoisin.' },
      { name: 'Mu Shu Pork', price: '16.99', desc: 'Stir-fried with cabbage & egg in hoisin.' },
      { name: 'Combo Fried Rice', price: '15.99', desc: 'Wok-fried rice with egg, soy & scallions.' },
      { name: 'Shrimp Fried Rice', price: '15.99' },
      { name: 'Chicken Fried Rice', price: '14.99' },
      { name: 'BBQ Pork Fried Rice', price: '14.99' },
      { name: 'Vegetable Fried Rice', price: '13.99' },
    ]
  },
  {
    id: 'bar', label: 'Bar',
    note: 'Happy Hour Mon–Fri 12–7pm: $3 off cocktails & wine. Wines by Kim Crawford, Santa Cristina, Conundrum, DAOU, Kendall-Jackson, J. Lohr & Norton.',
    items: [
      { name: 'Gekkeikan Plum Wine', price: '8.00' },
      { name: 'Prosecco', price: '8.00' },
      { name: 'Hot Sake', price: '6.00' },
      { name: 'Well Spirits', price: '6.00' },
      { name: 'Mimosa', price: '5.00', desc: 'Orange, apple, pineapple or grapefruit.' },
    ]
  },
];
