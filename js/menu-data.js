/* ============================================================
   Canton Dragon — menu data
   Sourced from the restaurant's 2025 Dine-In menu.
   Edit prices / descriptions here; the page renders from this.
   ============================================================ */

/* Three-panel featured section — card stack per category */
const FEATURED = [
  {
    label: 'The Bar',
    name:  'Craft Cocktails',
    tag:   'Happy Hour Daily',
    desc:  'Yuzu margaritas, butterfly pea orchid cocktails and a curated wine list from Kim Crawford to DAOU. Pull up Monday–Friday, 12–7pm — every cocktail and glass of wine is $3 off.',
    images: [
      'assets/drinks/orchid (1).webp',
      'assets/drinks/YuzuMarga.webp',
      'assets/drinks/lycheemart.webp',
      'assets/drinks/prickly (1).webp',
      'assets/drinks/mojitos.webp',
      'assets/drinks/TokyoGlow.webp',
      'assets/drinks/pamplemousse.webp',
      'assets/drinks/oldfashionfront_genSwap.webp',
      'assets/drinks/pomelli_photoshoot_image_9_16_0609 (4).webp',
      'assets/drinks/stem.webp',
    ],
  },
  {
    label: 'Desserts',
    name:  'A Sweet Finale',
    tag:   'House-Made',
    desc:  'Seven house-made and imported desserts — from a velvety New York cheesecake to vibrant ube cake and golden honey banana. The perfect ending to a wok-fired meal.',
    images: [
      'assets/Dessert/Ube.webp',
      'assets/Dessert/cheesecake.webp',
      'assets/Dessert/HoneyBanana.webp',
      'assets/Dessert/DarkChoc.webp',
      'assets/Dessert/WhiteChoc.webp',
      'assets/Dessert/Fryapple.webp',
      'assets/Dessert/ICECREAMCAKE.webp',
    ],
  },
  {
    label: "Chef's Signatures",
    name:  "The Dishes We're Known For",
    tag:   'Wok-Fired',
    desc:  'Four defining dishes — BBQ pork fried rice, shrimp lo mein, beef chow fun and kung pao shrimp. Each one wok-fired to order over screaming-hot fire, each one a reason to come back.',
    images: [
      'assets/Entrees/porkfriedrice.webp',
      'assets/Entrees/beefchowfun.webp',
      'assets/Entrees/shrimplomein.webp',
      'assets/Entrees/mongolianbeef.webp',
      'assets/Entrees/lemonchx.webp',
      'assets/Entrees/shrimpbrocolli.webp',
      'assets/Entrees/teriyakichx.webp',
      'assets/Entrees/thaicurrynoodle.webp',
      'assets/Entrees/tofuveg.webp',
    ],
  },
];

/* Curated bar — 5 cocktail hero panels */
const DRINKS = [
  {
    name:  'Lychee Martini',
    tag:   'House Favourite',
    price: '13.00',
    note:  'Lychee · vodka · elderflower',
    desc:  'Delicate and floral — fresh lychee, premium vodka and a touch of elderflower liqueur. The drink that convinced half our regulars to skip beer entirely.',
    img:   'assets/drinks/lycheemart.webp',
  },
  {
    name:  'Yuzu Margarita',
    tag:   'The Citrus Hit',
    price: '13.00',
    note:  'Yuzu · tequila · triple sec · salt rim',
    desc:  'Bright, tart and impossible to put down. Fresh yuzu juice, blanco tequila and triple sec over ice, finished with a salted rim. East meets West in a glass.',
    img:   'assets/drinks/YuzuMarga.webp',
  },
  {
    name:  'Orchid',
    tag:   'The Showstopper',
    price: '14.00',
    note:  'Butterfly pea gin · lemon · honey · tonic',
    desc:  'Butterfly pea flower gin shifts from deep violet to pink as the citrus hits the glass. Our most photographed drink — and, by a wide margin, the most reordered.',
    img:   'assets/drinks/orchid (1).webp',
  },
  {
    name:  'Prickly Pear',
    tag:   'The Wild One',
    price: '13.00',
    note:  'Mezcal · prickly pear · lime · chili rim',
    desc:  'Smoky mezcal meets the vivid crimson of prickly pear, balanced with fresh lime and a house chili-salt rim. For those who need something unexpected.',
    img:   'assets/drinks/prickly (1).webp',
  },
  {
    name:  'Old Fashioned',
    tag:   'The Classic',
    price: '14.00',
    note:  'Bourbon · Angostura · orange peel · cube',
    desc:  'Stirred, not shaken. Barrel-aged bourbon, Angostura bitters and a single sugar cube, finished with a flamed orange peel. The way it has always been done.',
    img:   'assets/drinks/oldfashionfront_genSwap.webp',
  },
];

/* Featured signature dishes (replace images with real plating photos). */
const SIGNATURES = [
  {
    name:  'BBQ Pork Fried Rice',
    tag:   'The Classic',
    price: '14.99',
    note:  'Wok-fried · egg · scallions · house soy',
    desc:  'House-marinated BBQ pork tossed with egg, scallions and house-blend soy over screaming-hot wok fire. The dish that built Canton Dragon\'s reputation — unchanged since day one.',
    img:   'assets/Entrees/porkfriedrice.webp',
  },
  {
    name:  'Shrimp Lo Mein',
    tag:   'Guest Favourite',
    price: '15.99',
    note:  'Soft noodles · jumbo shrimp · bean sprouts',
    desc:  'Jumbo shrimp and soft egg noodles tossed with caramelised onion and fresh bean sprouts in a silky, savory sauce. Our most reordered dish for a reason.',
    img:   'assets/Entrees/shrimplomein.webp',
  },
  {
    name:  'Beef Chow Fun',
    tag:   'The Signature',
    price: '18.99',
    note:  'Wide rice noodles · flank steak · onion',
    desc:  'Premium flank steak and wide rice noodles tossed in a screaming-hot wok with onion and bean sprouts. Requires maximum heat — our chef\'s most demanding dish.',
    img:   'assets/Entrees/beefchowfun.webp',
  },
  {
    name:  'Kung Pao Shrimp',
    tag:   'The Bold One',
    price: '18.99',
    note:  'Zucchini · bell pepper · peanuts · spicy',
    desc:  'Jumbo shrimp in a fiery Kung Pao sauce with zucchini, tri-colour pepper, dried chilies and whole roasted peanuts. For those who like it loud.',
    img:   'assets/Entrees/shrimpbrocolli.webp',
  },
];

/* Dessert items */
const DESSERTS = [
  {
    name: 'New York Cheesecake',  tag: 'The Classic',       price: '7.99',
    note: 'Rich and creamy, classic style',
    desc: 'Dense, velvety and perfectly balanced — a true New York-style cheesecake on a buttery graham cracker base. Simple, iconic, impossible to share.',
    img:  'assets/Dessert/cheesecake.webp',
  },
  {
    name: 'Dark Chocolate Cake',  tag: 'For the Bold',      price: '7.99',
    note: 'Decadent layers of dark chocolate',
    desc: 'Layers of bittersweet dark chocolate ganache and moist cake for those who don\'t do things by halves. Intensely rich, deeply satisfying.',
    img:  'assets/Dessert/DarkChoc.webp',
  },
  {
    name: 'White Chocolate Cake', tag: 'Light & Silky',     price: '7.99',
    note: 'Light, silky white chocolate mousse cake',
    desc: 'Airy white chocolate mousse between delicate layers of sponge. Light enough to order after a full wok dinner — you\'ll want every single bite.',
    img:  'assets/Dessert/WhiteChoc.webp',
  },
  {
    name: 'Ube Cake',             tag: 'Asian Classic',     price: '7.99',
    note: 'Purple yam — a beloved Asian classic',
    desc: 'Vivid purple from real ube yam, with a subtle earthy sweetness that\'s uniquely its own. A beloved classic from the islands — and instantly one of ours.',
    img:  'assets/Dessert/Ube.webp',
  },
  {
    name: 'Ice Cream Cake',       tag: 'The Crowd-Pleaser', price: '7.99',
    note: 'Layers of ice cream and soft cake',
    desc: 'Creamy ice cream and soft cake in alternating layers, frozen to perfection. The one everyone at the table argues over. Order two.',
    img:  'assets/Dessert/ICECREAMCAKE.webp',
  },
  {
    name: 'Honey Banana',         tag: 'The Comfort',       price: '6.99',
    note: 'Golden-fried with a honey drizzle',
    desc: 'Ripe banana in a crisp golden batter, finished with a warm honey drizzle and sesame seeds. A simple, honest pleasure — perfectly executed.',
    img:  'assets/Dessert/HoneyBanana.webp',
  },
  {
    name: 'Fried Apple',          tag: 'The Finale',        price: '6.99',
    note: 'Crispy caramelized apple dessert',
    desc: 'Caramelized apple wrapped in a shatteringly crisp crust, dusted with cinnamon sugar. The dessert that ends every Canton Dragon experience on the highest note.',
    img:  'assets/Dessert/Fryapple.webp',
  },
];

/* Gallery — real Canton Dragon photography. */
const GALLERY = [
  { img: 'assets/Entrees/beefchowfun.webp',        alt: 'Beef chow fun — wide rice noodles with beef and bean sprouts' },
  { img: 'assets/Entrees/mongolianbeef.webp',       alt: 'Mongolian beef with scallions in a rich savory sauce' },
  { img: 'assets/Entrees/lemonchx.webp',            alt: 'Lemon chicken — crispy chicken in bright lemon glaze' },
  { img: 'assets/Entrees/thaicurrynoodle.webp',     alt: 'Thai curry noodle bowl with fragrant coconut broth' },
  { img: 'assets/Entrees/tofuveg.webp',             alt: 'Tofu vegetable stir-fry' },
  { img: 'assets/Entrees/teriyakichx.webp',         alt: 'Teriyaki chicken glazed and plated' },
  { img: 'assets/others/table%20of%20food.webp',    alt: 'A full spread of Canton Dragon dishes family-style' },
  { img: 'assets/others/interiornarrow.webp',       alt: 'Canton Dragon dining room' },
  { img: 'assets/promos/mocktailflight.jpeg',       alt: 'A flight of house mocktails' },
  { img: 'assets/drinks/pamplemousse.webp',         alt: 'Pamplemousse — a bright grapefruit cocktail' },
  { img: 'assets/drinks/Singha.webp',               alt: 'Singha — Thai lager served ice-cold' },
  { img: 'assets/drinks/pomelli_photoshoot_image_9_16_0609%20(4).webp', alt: 'Pomelli — a craft cocktail at the bar' },
  { img: 'assets/appertizers/onionrings.webp',      alt: 'Golden crispy onion rings' },
  { img: 'assets/appertizers/shrimptoast.webp',     alt: 'Shrimp toast — crisp golden appetizer' },
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

/* ============================================================
   Specials / Promotions — edit this to update the What's New section.
   badgeStyle: 'gold' | 'lacquer' | 'neutral'
   ============================================================ */
const PROMOS = [
  {
    badge: 'New Item',
    badgeStyle: 'gold',
    label: 'Thai Curry Noodle',
    desc: 'Wok-tossed noodles in a rich coconut-lemongrass broth. Your choice of chicken, shrimp, or tofu.',
    img: 'assets/Entrees/thaicurrynoodle.webp',
  },
  {
    badge: "Chef's Pick",
    badgeStyle: 'neutral',
    label: 'Teriyaki Chicken',
    desc: 'Tender glazed chicken over steamed rice, finished with a house teriyaki sauce made from scratch every day.',
    img: 'assets/Entrees/teriyakichx.webp',
  },
  {
    badge: 'Mon–Fri · 12–7pm',
    badgeStyle: 'lacquer',
    label: 'Happy Hour',
    desc: 'Every cocktail and glass of wine is $3 off. Pull up to the bar and stay a while.',
    img: 'assets/drinks/orchid (1).webp',
  },
];
