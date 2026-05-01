export const navLinks = [
  { name: "Home", href: "/", hasChildren: false },
  { name: "Shop", href: "/products", hasChildren: false },
  {
    name: "Categories",
    href: "/categories",
    hasChildren: true,
    children: [
      { name: "All Categories", href: "/categories" },
      {
        name: "Electronics",
        href: "/products?category=6439d2d167d9aa4ca970649f",
      },
      {
        name: "Women's Fashion",
        href: "/products?category=6439d58a0049ad0b52b9003f",
      },
      {
        name: "Men's Fashion",
        href: "/products?category=6439d5b90049ad0b52b90048",
      },
      {
        name: "Beauty & Health",
        href: "/products?category=6439d30b67d9aa4ca97064b1",
      },
    ],
  },
  { name: "Brands", href: "/brands", hasChildren: false },
];