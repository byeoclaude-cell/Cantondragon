/* ============================================================
   Canton Dragon — menu data
   Sourced from the restaurant's 2025 Dine-In menu.
   Edit prices / descriptions here; the page renders from this.
   ============================================================ */

/* Three-panel featured section — card stack per category */
const FEATURED = [
  {
    label: 'Cocktails & Wine',
    name:  'Craft Cocktails and Wine',
    tag:   'Happy Hour Daily',
    link:  'bar', tabId: 'barpanel-cocktails',
    desc:  'Yuzu margaritas, Pamplemousses spritz and a curated wine list from Kim Crawford to DAOU. Pull up Monday–Friday, 12–7pm — every cocktail or glass of wine is $3 off.',
    images: [
      'assets/drinks/TokyoGlow.webp',
      'assets/drinks/orchid (1).webp',
      'assets/drinks/YuzuMarga.webp',
      'assets/drinks/lycheemart.webp',
      'assets/drinks/prickly (1).webp',
      'assets/drinks/mojitos.webp',
      'assets/drinks/pamplemousse.webp',
      'assets/drinks/oldfashionfront_genSwap.webp',
      'assets/drinks/pomelli_photoshoot_image_9_16_0609 (4).webp',
      'assets/drinks/stem.webp',
    ],
  },
  {
    label: 'Beer',
    name:  'Asian Imports, Bottled',
    tag:   'Cold & Crisp',
    link:  'bar', tabId: 'barpanel-beer',
    desc:  'Six imported Asian lagers in the bottle — Tsingtao, Asahi, Kirin Ichiban, Kirin Light, Singha and Lucky Buddha. Light, clean and made to pair with wok fire.',
    images: [
      'assets/beer/tsingtao.webp',
      'assets/beer/Asahi.webp',
      'assets/beer/kirinichiban.webp',
      'assets/beer/kirinlight.webp',
      'assets/beer/Singha.webp',
      'assets/beer/Luckybuddha.webp',
    ],
  },
  {
    label: 'Desserts',
    name:  'A Sweet Finale',
    tag:   'Curated',
    link:  'menu', tabId: 'panel-desserts',
    desc:  'Seven desserts — some house-made from scratch, others curated from the best. From vibrant ube cake and golden honey banana to rich cheesecake and dark chocolate layers.',
    images: [
      { src: 'assets/Dessert/cheesecake.webp',   made: 'Curated'    },
      { src: 'assets/Dessert/Ube.webp',          made: 'Curated'    },
      { src: 'assets/Dessert/HoneyBanana.webp',  made: 'House-Made' },
      { src: 'assets/Dessert/DarkChoc.webp',     made: 'Curated'    },
      { src: 'assets/Dessert/WhiteChoc.webp',    made: 'Curated'    },
      { src: 'assets/Dessert/Fryapple.webp',     made: 'House-Made' },
      { src: 'assets/Dessert/ICECREAMCAKE.webp', made: 'House-Made' },
    ],
  },
  {
    label: "The Kitchen",
    name:  "The Dishes We're Known For",
    tag:   'House Classics',
    link:  'menu', tabId: 'panel-chef',
    desc:  'Four defining dishes — Mongolian beef, shrimp lo mein, roast duck and happy family. Each one made to order, each one a reason to come back.',
    images: [
      'assets/Entrees/shrimplomein.webp',
      'assets/Entrees/porkfriedrice.webp',
      'assets/Entrees/beefchowfun.webp',
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
    id: 'appetizers', label: 'Appetizers', group: 'Starters',
    note: 'Perfect for sharing.',
    items: [
      { name: 'Canton Sampler', price: '16.99', desc: 'Egg roll (2), crab puff (2), chicken satay (2) & fried shrimp.' },
      { name: 'Chicken Lettuce Wraps', price: '15.99' },
      { name: 'Angus Beef Skewers (2)', price: '11.99' },
      { name: 'Spicy Sichuan Dumpling', price: '10.99', spice: true },
      { name: 'Spicy Thai Curry Puff', price: '9.99', spice: true },
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
      { name: 'Crispy Chips', price: '2.99', desc: 'Bowl.' },
    ]
  },
  {
    id: 'soups-salads', label: 'Soups & Salads', group: 'Starters',
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
    id: 'lunch', label: 'Lunch Specials', group: 'Lunch Specials',
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
    id: 'chef', label: "Chef's Signatures", group: 'Entrées',
    items: [
      { name: 'Beef Mignon', price: '27.99', desc: 'Chunks of tender beef quick-stirred with onion in rich roasted black-pepper sauce.' },
      { name: 'Roast Duck', price: '26.99', desc: 'Boneless duck slowly roasted until crispy and golden in a light sauce.' },
      { name: 'Butterfish (Whole)', price: '20.99', desc: 'Charbroiled with sea salt, red onion, white pepper, cilantro & lime juice.' },
      { name: 'Atlantic Salmon', price: '19.99', desc: 'Charbroiled with teriyaki sauce.' },
      { name: 'Combo Egg Fu Yung', price: '19.99', desc: 'Shrimp, chicken & BBQ pork, Canton style with egg & cabbage, brown sauce. Shrimp only $19.99 · Chicken or BBQ pork $18.99.' },
      { name: 'Salt & Pepper Squids', price: '18.99', desc: 'Fried squid with peppers & onion in spicy pepper & salt.', spice: true },
      { name: 'Salt & Pepper Fish', price: '18.99', desc: 'Fried fish with red pepper, green pepper & onion in spicy salt & pepper.', spice: true },
      { name: 'Happy Family', price: '18.99', desc: 'Shrimp, chicken & beef with broccoli, carrot, celery & zucchini in brown sauce.' },
      { name: 'Salt & Pepper Pork Chop', price: '17.99', desc: 'Fried pork chop with peppers & onion in spicy pepper & salt.', spice: true },
    ]
  },
  {
    id: 'chicken', label: 'Chicken', group: 'Entrées',
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
      { name: 'Moo Goo Gai Pan', price: '17.99', desc: 'Mushroom, zucchini, snow peas & carrot in white sauce.' },
    ]
  },
  {
    id: 'beef', label: 'Beef', group: 'Entrées',
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
    id: 'shrimp', label: 'Jumbo Shrimp', group: 'Entrées',
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
    id: 'veg', label: 'Vegetables', group: 'Entrées',
    items: [
      { name: 'Vegetable Delight', price: '15.99', desc: 'Bai choy, broccoli, snow peas, carrot, celery, zucchini & string bean in white sauce.' },
      { name: 'Kung Pao Vegetable', price: '15.99', desc: 'Zucchini & bell peppers with assorted vegetables & peanuts in spicy kung pao sauce.', spice: true },
      { name: 'Tofu Eggplant', price: '15.99', desc: 'Tofu stir-fried with eggplant in Yu Shan sauce.' },
      { name: 'Tofu String Beans', price: '15.99', desc: 'Tofu stir-fried with string beans in Yu Shan sauce.' },
      { name: 'Brussels Sprout', price: '14.99', desc: 'Fried Brussels sprout with sea salt & Parmesan.' },
    ]
  },
  {
    id: 'noodles', label: 'Noodles', group: 'Noodles & Rice',
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
    id: 'mushu-rice', label: 'Mu Shu & Fried Rice', group: 'Noodles & Rice',
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
    id: 'desserts', label: 'Desserts', group: 'Desserts',
    items: [
      { name: 'Lava Cheesecake', popular: true, price: '10.00' },
      { name: 'Ube Cheesecake', price: '10.00' },
      { name: 'Marquise Mousse Cake', price: '9.00' },
      { name: 'Triple Chocolate Mousse Cake', price: '9.00' },
      { name: 'Honey Banana', star: true, desc: 'House-made.', price: '9.00' },
      { name: 'Honey Apple', star: true, desc: 'House-made.', price: '9.00' },
      { name: 'Fried Ice Cream', star: true, desc: 'House-made.', price: '9.00' },
    ]
  },
];

/* ============================================================
   Bar menu — cocktails, beer, wine, spirits, sake & more.
   Sourced from the restaurant's bar & dessert menu. `groups` (optional)
   renders sub-headed sections within a tab — e.g. wine by tier, beer by
   country. `star: true` marks a house-favourite, mirroring the ★ on the
   printed menu.
   ============================================================ */
const BAR = [
  {
    id: 'cocktails', label: 'Cocktails', group: 'Cocktails',
    note: 'Happy Hour: $3 off every cocktail, Monday–Friday 12–7pm. All cocktails $15 unless noted.',
    items: [
      { name: 'Passion Lover', price: '15.00', desc: 'Absolut Mango vodka, lime juice, peach schnapps & syrup, Chambord raspberry liqueur and Passoã — served frozen.' },
      { name: 'Paloma', price: '15.00', desc: 'Grapefruit & lime juice, agave nectar, tequila (mezcal or reposado).' },
      { name: 'Aperol Spritz', price: '15.00', desc: 'Prosecco, Aperol, soda water & orange slice.' },
      { name: 'Espresso Martini', price: '15.00', star: true, desc: 'Espresso, vodka, maple syrup, Kahlúa & Irish cream.' },
      { name: 'Yuzu Smash', price: '15.00', desc: 'Tincup bourbon, Giffard Fruit de la Passion liqueur, lime juice & Monin yuzu purée.' },
      { name: 'Highballer', price: '15.00', desc: 'St. George Baller, Giffard apricot liqueur & soda.' },
      { name: 'U & Me Old Fashioned', price: '15.00', star: true, desc: 'Yellowstone whiskey, bitters, maple syrup, orange peel & maraschino cherries.' },
      { name: 'Dragon Spritz', price: '15.00', star: true, desc: 'Breckenridge pear vodka, Choya yuzu liqueur, Re\'al pear, lemon juice & soda.' },
      { name: 'Canton Collins', price: '15.00', desc: 'Pearl cucumber vodka, lime juice, Mahina coco liqueur & Monin cantaloupe.' },
      { name: 'Dragon & the Maiden', price: '15.00', desc: 'Zephyr gin, Giffard lychee liqueur, Re\'al raspberry, lemon juice & Snow Maiden Junmai Nigori sake.' },
      { name: 'Tokyo Margarita', price: '15.00', desc: 'Ghost reposado tequila, lemon juice, Giffard ginger liqueur & Re\'al vanilla purée.' },
      { name: 'Yuzu Margarita', price: '15.00', desc: 'Azunia blanco tequila, Choya yuzu liqueur, lemon juice & simple syrup.' },
      { name: 'Dragon Back Daq', price: '15.00', desc: 'Bumbu rum, Re\'al mango & lime juice.' },
      { name: 'Manhattan', price: '15.00', star: true, desc: 'Bulleit bourbon, sweet vermouth & Angostura bitters.' },
      { name: 'Hugo Spritz', price: '15.00', desc: 'Elderflower liqueur, Prosecco, lime & mint.' },
      { name: 'Chocolate Martini', price: '15.00', desc: 'Vanilla vodka, Mahina coco liqueur & espresso liqueur.' },
      { name: 'Mojito', price: '15.00', star: true, desc: 'Coconut, strawberry or mango — rum, mint & lime juice.' },
      { name: 'Ghostini', price: '15.00', desc: 'Ghost reposado tequila & espresso liqueur.' },
      { name: 'Spice in Bloom', price: '15.00', desc: 'Ghost blanco tequila, elderflower liqueur, lime & cucumber.' },
      { name: 'Mai Tai', price: '15.00', desc: 'Bacardi rum, orange curaçao, orgeat, pineapple juice, sweet & sour and Trader Vic\'s dark rum.' },
      { name: 'Prickly Cactus', price: '15.00', star: true, desc: 'Ghost blanco tequila & prickly pear syrup.' },
    ]
  },
  {
    id: 'beer', label: 'Beer', group: 'Beer & Wine',
    note: 'All bottles $6 — all day, every day.',
    groups: [
      { label: 'United States', items: [
        { name: 'Lagunitas IPA', price: '6.00' },
        { name: 'Blue Moon', price: '6.00' },
        { name: 'Miller Lite', price: '6.00' },
        { name: 'Coors Light', price: '6.00' },
      ]},
      { label: 'Mexico', items: [
        { name: 'Corona', price: '6.00' },
        { name: 'Dos Equis', price: '6.00' },
      ]},
      { label: 'China', items: [
        { name: 'Tsingtao', price: '6.00' },
        { name: 'Tsingtao 0.0', price: '6.00', desc: 'Non-alcoholic.' },
        { name: 'Lucky Buddha', price: '6.00' },
      ]},
      { label: 'Japan', items: [
        { name: 'Kirin', price: '6.00' },
        { name: 'Kirin Light', price: '6.00' },
        { name: 'Sapporo', price: '6.00' },
        { name: 'Asahi', price: '6.00' },
      ]},
      { label: 'Thailand', items: [
        { name: 'Singha', price: '6.00' },
      ]},
    ]
  },
  {
    id: 'wine', label: 'Wine', group: 'Beer & Wine',
    note: 'Happy Hour: $3 off every glass, Monday–Friday 12–7pm.',
    groups: [
      { label: 'White Wine', items: [
        { name: 'House White — Chardonnay / Pinot Grigio', price: 'Glass 8 · Bottle 20' },
        { name: 'Santa Cristina Pinot Grigio · Château St. Michelle Riesling · Kendall-Jackson Chardonnay', price: 'Glass 12 · Bottle 38' },
        { name: 'Kim Crawford Sauvignon Blanc · DAOU Rosé', price: 'Glass 15 · Bottle 40' },
        { name: 'Stella Rosa Prosecco', price: 'Bottle 8', desc: '187ml.' },
      ]},
      { label: 'Red Wine', items: [
        { name: 'House Red — Cabernet / Merlot', price: 'Glass 8 · Bottle 20' },
        { name: 'J. Lohr Pinot Noir · Conundrum Red Blend · Mark West Pinot Noir', price: 'Glass 14 · Bottle 38' },
        { name: 'DAOU Cabernet Sauvignon', price: 'Glass 16 · Bottle 40' },
      ]},
    ]
  },
  {
    id: 'spirits', label: 'Spirits', group: 'Spirits & More',
    note: 'Ask your server for pricing — well spirits $6.',
    groups: [
      { label: 'Vodka', items: [
        { name: 'Stolichnaya' }, { name: 'Grey Goose' }, { name: 'Belvedere' }, { name: 'Tito\'s' }, { name: 'Ketel One' },
      ]},
      { label: 'Gin', items: [
        { name: 'Tanqueray' }, { name: 'Hendrick\'s' },
      ]},
      { label: 'Tequila & Mezcal', items: [
        { name: 'Don Julio' }, { name: 'Mezcal' }, { name: '1800 Reposado' },
      ]},
      { label: 'Whiskey · Bourbon · Scotch', items: [
        { name: 'Jack Daniel\'s' }, { name: 'Yellowstone' }, { name: 'Maker\'s Mark' }, { name: 'Crown Royal' }, { name: 'Chivas' }, { name: 'Johnnie Walker' },
      ]},
      { label: 'Rum', items: [
        { name: 'Captain Morgan' }, { name: 'Blue Chair Bay Coconut' },
      ]},
      { label: 'Brandy', items: [
        { name: 'Torres' },
      ]},
    ]
  },
  {
    id: 'sake', label: 'Sake & More', group: 'Spirits & More',
    groups: [
      { label: 'Sake & Plum Wine', items: [
        { name: 'Tozai Junmai Nigori Sake', price: '15.00' },
        { name: 'House Sake Bomber', price: '15.00' },
        { name: 'Sho Chiku Bai Nigori Sake', price: '8.00' },
        { name: 'Kinsen Plum Wine', price: '8.00' },
        { name: 'House Hot Sake', price: '6.00' },
      ]},
      { label: 'Mimosas', items: [
        { name: 'Mimosa', price: '5.00', star: true, desc: 'Orange · apple · mango · pineapple · cranberry.' },
      ]},
      { label: 'Soft Drinks & More', items: [
        { name: 'Flavored Iced Tea / Lemonade', price: '4.00', desc: 'Raspberry · peach · strawberry · mango.' },
        { name: 'Iced Tea', price: '3.00', desc: 'Classic or Arnold Palmer.' },
        { name: 'Fountain Drinks', price: '3.00', desc: 'Coke/Diet · Sprite · Orange · Root Beer · Mr. Pibb · Pink Lemonade.' },
        { name: 'Hong Kong Milk Tea · Thai Tea', price: '5.00' },
        { name: 'Coffee / Tea', price: '3.00' },
      ]},
    ]
  },
  {
    id: 'summer', label: 'Summer Specials', group: 'Cocktails',
    note: 'Cocktails $15 · Happy Hour $3 off, Mon–Fri 12–7pm · Zero Proof mocktails $8 all day.',
    groups: [
      { label: 'Cocktails', items: [
        { name: 'Lychee Mojito',         price: '15.00', desc: 'Lychee syrup, rum, lime juice, fresh mint and club soda.' },
        { name: 'Pamplemousse Spritz',   price: '15.00', popular: true, desc: 'Pamplemousse liqueur, gin blanco tequila, Prosecco and club soda.' },
        { name: 'Scarlet Spritz',        price: '15.00', desc: 'Blood orange liqueur, gin, lemon juice and sparkling wine.' },
        { name: 'Crimson Old Fashioned', price: '15.00', desc: 'Bourbon, blood orange liqueur and orange bitters.' },
      ]},
      { label: 'Zero Proof', items: [
        { name: 'Melon Mirage',  price: '8.00', popular: true, desc: 'Watermelon, lime, fresh mint and sprite. With a choice of popping boba.' },
        { name: 'Jade Pearl',    price: '8.00', desc: 'Lychee, cucumber, fresh mint, lime and club soda. With a choice of popping boba.' },
        { name: 'Tokyo Glow',    price: '8.00', desc: 'Yuzu, pineapple and sparkling water. With a choice of popping boba.' },
        { name: 'Tropical Fizz', price: '8.00', popular: true, desc: 'Orange, pineapple, ginger beer and vanilla. With a choice of popping boba.' },
      ]},
      { label: 'Summer Crush Flight', items: [
        { name: 'Jade Pearl · Tokyo Glow · Melon Mirage · Tropical Fizz', price: '18.00', desc: 'A mocktail flight of four zero proof drinks.' },
      ]},
    ],
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
