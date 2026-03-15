import allImages from "./imagesProvider";

//for images
const { addtocart } = allImages;

const navItems = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "SHOP",
    path: "/shop",
    hasMegaMenu: true,
    megaMenuData: [
      {
        title: "SHOP PAGES",
        links: [
          { name: "Default", link: "/shop" },
          { name: "Topbar", link: "/shop-topbar" },
          { name: "Collapse", link: "/shop-collapse" },
          { name: "Simple", link: "/shop-simple" },
          { name: "Masonry", link: "/shop-masonry" },
        ],
      },
      {
        title: "PRODUCT PAGES",
        links: [
          { name: "Default", link: "/shop-single" },
          { name: "Images Left", link: "/product-left" },
          { name: "Image Grid", link: "/product-grid" },
          { name: "Image Slider", link: "/product-slider" },
          { name: "Images Stacked", link: "/product-stacked" },
        ],
      },
      {
        title: "OTHER PAGES",
        links: [
          { name: "Collection", link: "/collection" },
          { name: "LookBook", link: "/lookbook" },
          { name: "Categories Page", link: "/categories" },
          { name: "Shopping Cart", link: "/cart" },
          { name: "Wishlist", link: "/wishlist" },
          { name: "Order Tracking", link: "/order-tracking" },
          { name: "Checkout", link: "/checkout" },
          { name: "Checkout — 2 Columns", link: "/checkout-2-columns" },
        ],
      },
      {
        title: "ELEMENTS",
        links: [
          { name: "Accordion", link: "/elements/accordion" },
          { name: "Pricing Table", link: "/elements/pricing" },
          { name: "Google Maps", link: "/elements/maps" },
          { name: "Message Box", link: "/elements/message-box" },
          { name: "Progress Bars", link: "/elements/progress" },
          { name: "Charts", link: "/elements/charts" },
          { name: "Icon Box", link: "/elements/icon-box" },
          { name: "Product Tabs", link: "/elements/product-tabs" },
          { name: "Products Grid", link: "/elements/products-grid" },
          { name: "Tabs", link: "/elements/tabs" },
          { name: "Video Players", link: "/elements/video-players" },
          { name: "Team", link: "/elements/team" },
          { name: "Buttons", link: "/elements/buttons" },
          { name: "Testimonials", link: "/elements/testimonials" },
          { name: "Social Icons", link: "/elements/social-icons" },
          { name: "Blog Posts", link: "/elements/blog-posts" },
        ],
      },
    ],
  },
  {
    label: "COLLECTION",
    path: "/collection",
  },
  {
    label: "JOURNAL",
    path: "/journal",
    hasMegaMenu: true,
    megaMenuData: [
      {
        title: "BLOG STYLES",
        links: [
          { name: "Alternative", link: "/journal/alternative" },
          { name: "Small images", link: "/journal/small-images" },
          { name: "Blog chess", link: "/journal/chess" },
          { name: "Masonry grid", link: "/journal/masonry" },
          { name: "Infinit scrolling", link: "/journal/infinite-scrolling" },
          { name: "With background", link: "/journal/with-background" },
          { name: "Blog flat", link: "/journal/blog-flat" },
          { name: "Default flat", link: "/journal/default-flat" },
          { name: "Blog mask", link: "/journal/blog-mask" },
        ],
      },
      {
        title: "SINGLE POST",
        links: [
          { name: "Standard Post", link: "/journal/standard" },
          { name: "Image Post", link: "/journal/image" },
          { name: "Video Post", link: "/journal/video" },
          { name: "Audio Post", link: "/journal/audio" },
          { name: "Gallery Post", link: "/journal/gallery" },
        ],
      },
      {
        title: "NAVIGATION",
        links: [
          { name: "Simple", link: "/journal/nav-simple" },
          { name: "Image Background", link: "/journal/nav-bg" },
        ],
      },
    ],
  },
  {
    label: "LOOKBOOK",
    path: "/lookbook",
  },
  {
    label: "PAGES",
    path: "#",
    hasDropdown: true,
    dropdownData: [
      { name: "About", link: "/about" },
      { name: "My Account", link: "/dashboard" },
      { name: "Login / Register", link: "/login-register" },
      { name: "Contact Us", link: "/contact" },
      { name: "Store Locator", link: "/store-locator" },
      { name: "FAQ", link: "/faq" },
      { name: "Coming Soon", link: "/coming-soon" },
      { name: "404", link: "/404" },
    ],
  },
];

const quickLinks = {
  title: "QUICKLINKS",
  links: [
    { id: 1, name: "New Arrivals", link: "/new-arrivals" },
    { id: 2, name: "Dresses", link: "/dresses" },
    { id: 3, name: "Accessories", link: "/accessories" },
    { id: 4, name: "Footwear", link: "/footwear" },
    { id: 5, name: "Sweatshirt", link: "/sweatshirt" },
  ],
};

const cartItems = [
  {
    id: 1,
    name: "Zessi Dresses",
    color: "Yellow",
    size: "L",
    quantity: 4,
    price: 99,
    image: addtocart,
  },
  {
    id: 2,
    name: "Kirby T-Shirt",
    color: "Yellow",
    size: "L",
    quantity: 4,
    price: 99,
    image: addtocart,
  },
  {
    id: 3,
    name: "Cableknit Shawl",
    color: "Yellow",
    size: "L",
    quantity: 4,
    price: 99,
    image: addtocart,
  },
];

const navTabsData = [
  {
    id: 1,
    tab: "WOMEN",
    categories: [
      { id: 1, name: "WOMEN", link: "/women", isActive: true },
      { id: 2, name: "MAN", link: "/men" },
      { id: 3, name: "KIDS", link: "/kids" },
      { id: 4, name: "HOME", link: "/home" },
      { id: 5, name: "COLLECTION", link: "/collection" },
      { id: 6, name: "SALE UP TO 50% OFF", link: "/sale", isRed: true },
      { id: 7, name: "NEW", link: "/new" },
      { id: 8, name: "SHOES", link: "/shoes" },
      { id: 9, name: "ACCESSORIES", link: "/accessories" },
      { id: 10, name: "JOIN LIFE", link: "/join-life" },
      { id: 11, name: "#UOMOSTYLE", link: "/uomostyle" },
    ],
    subLinks: [
      { id: 1, name: "New", link: "/women/new" },
      { id: 2, name: "Best Sellers", link: "/women/best-sellers" },
      { id: 3, name: "Collaborations®", link: "/women/collaborations" },
      { id: 4, name: "Sets", link: "/women/sets" },
      { id: 5, name: "Denim", link: "/women/denim" },
      { id: 6, name: "Jackets & Coats", link: "/women/jackets-coats" },
      { id: 7, name: "Overshirts", link: "/women/overshirts" },
      { id: 8, name: "Trousers", link: "/women/trousers" },
      { id: 9, name: "Jeans", link: "/women/jeans" },
      { id: 10, name: "Dresses", link: "/women/dresses" },
      { id: 11, name: "Sweatshirts and Hoodies", link: "/women/sweatshirts" },
      { id: 12, name: "T-shirts & Tops", link: "/women/tshirts" },
      { id: 13, name: "Shirts & Blouses", link: "/women/shirts" },
      { id: 14, name: "Shorts and Bermudas", link: "/women/shorts" },
      { id: 15, name: "Shoes", link: "/women/shoes" },
      { id: 16, name: "Accessories", link: "/women/accessories" },
      { id: 17, name: "Bags", link: "/women/bags" },
      { id: 18, name: "Gift Card", link: "/women/gift-card" },
    ],
  },
  {
    id: 2,
    tab: "MEN",
    categories: [
      { id: 1, name: "MEN", link: "/men", isActive: true },
      { id: 2, name: "WOMEN", link: "/women" },
      { id: 3, name: "KIDS", link: "/kids" },
      { id: 4, name: "HOME", link: "/home" },
      { id: 5, name: "COLLECTION", link: "/collection" },
      { id: 6, name: "SALE UP TO 50% OFF", link: "/sale", isRed: true },
      { id: 7, name: "NEW", link: "/new" },
      { id: 8, name: "SHOES", link: "/shoes" },
      { id: 9, name: "ACCESSORIES", link: "/accessories" },
      { id: 10, name: "JOIN LIFE", link: "/join-life" },
      { id: 11, name: "#UOMOSTYLE", link: "/uomostyle" },
    ],
    subLinks: [
      { id: 1, name: "New", link: "/men/new" },
      { id: 2, name: "Best Sellers", link: "/men/best-sellers" },
      { id: 3, name: "Collaborations®", link: "/men/collaborations" },
      { id: 4, name: "Sets", link: "/men/sets" },
      { id: 5, name: "Denim", link: "/men/denim" },
      { id: 6, name: "Jackets & Coats", link: "/men/jackets-coats" },
      { id: 7, name: "Overshirts", link: "/men/overshirts" },
      { id: 8, name: "Trousers", link: "/men/trousers" },
      { id: 9, name: "Jeans", link: "/men/jeans" },
      { id: 10, name: "T-shirts & Tops", link: "/men/tshirts" },
      { id: 11, name: "Shirts & Blouses", link: "/men/shirts" },
      { id: 12, name: "Shorts and Bermudas", link: "/men/shorts" },
      { id: 13, name: "Shoes", link: "/men/shoes" },
      { id: 14, name: "Accessories", link: "/men/accessories" },
      { id: 15, name: "Bags", link: "/men/bags" },
      { id: 16, name: "Gift Card", link: "/men/gift-card" },
    ],
  },
  {
    id: 3,
    tab: "KIDS",
    categories: [
      { id: 1, name: "KIDS", link: "/kids", isActive: true },
      { id: 2, name: "WOMEN", link: "/women" },
      { id: 3, name: "MEN", link: "/men" },
      { id: 4, name: "HOME", link: "/home" },
      { id: 5, name: "COLLECTION", link: "/collection" },
      { id: 6, name: "SALE UP TO 50% OFF", link: "/sale", isRed: true },
      { id: 7, name: "NEW", link: "/new" },
      { id: 8, name: "SHOES", link: "/shoes" },
      { id: 9, name: "ACCESSORIES", link: "/accessories" },
      { id: 10, name: "JOIN LIFE", link: "/join-life" },
      { id: 11, name: "#UOMOSTYLE", link: "/uomostyle" },
    ],
    subLinks: [
      { id: 1, name: "New", link: "/kids/new" },
      { id: 2, name: "Best Sellers", link: "/kids/best-sellers" },
      { id: 3, name: "Sets", link: "/kids/sets" },
      { id: 4, name: "Jackets & Coats", link: "/kids/jackets-coats" },
      { id: 5, name: "Trousers", link: "/kids/trousers" },
      { id: 6, name: "Jeans", link: "/kids/jeans" },
      { id: 7, name: "Dresses", link: "/kids/dresses" },
      { id: 8, name: "Sweatshirts and Hoodies", link: "/kids/sweatshirts" },
      { id: 9, name: "T-shirts & Tops", link: "/kids/tshirts" },
      { id: 10, name: "Shoes", link: "/kids/shoes" },
      { id: 11, name: "Accessories", link: "/kids/accessories" },
      { id: 12, name: "Gift Card", link: "/kids/gift-card" },
    ],
  },
];

const footerData = {
  columns: [
    {
      title: "COMPANY",
      links: [
        { id: 1, name: "About Us", link: "/about" },
        { id: 2, name: "Careers", link: "/careers" },
        { id: 3, name: "Affiliates", link: "/affiliates" },
        { id: 4, name: "Blog", link: "/journal" },
        { id: 5, name: "Contact Us", link: "/contact" },
      ],
    },
    {
      title: "SHOP",
      links: [
        { id: 1, name: "New Arrivals", link: "/new-arrivals" },
        { id: 2, name: "Accessories", link: "/accessories" },
        { id: 3, name: "Men", link: "/men" },
        { id: 4, name: "Women", link: "/women" },
        { id: 5, name: "Shop All", link: "/shop" },
      ],
    },
    {
      title: "HELP",
      links: [
        { id: 1, name: "Customer Service", link: "/contact" },
        { id: 2, name: "My Account", link: "/my-account", isItalic: true },
        { id: 3, name: "Find a Store", link: "/store-locator" },
        { id: 4, name: "Legal & Privacy", link: "/legal-privacy" },
        { id: 5, name: "Contact", link: "/contact" },
        { id: 6, name: "Gift Card", link: "/gift-card" },
      ],
    },
  ],
};

const shopList1 = [
  { id: 1, title: "#STAYHOME", value: "stayhome" },
  { id: 2, title: "NEW IN", value: "new-in" },
  { id: 3, title: "JACKETS", value: "jackets" },
  { id: 4, title: "HOODIES", value: "hoodies", active: true },
  { id: 5, title: "MEN", value: "men" },
  { id: 6, title: "WOMEN", value: "women" },
  { id: 7, title: "TROUSERS", value: "trousers" },
  { id: 8, title: "ACCESSORIES", value: "accessories" },
  { id: 9, title: "SHOES", value: "shoes" },
];

export { navItems, quickLinks, cartItems, navTabsData, footerData, shopList1 };
