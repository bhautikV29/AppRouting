import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      main
    </div>
  );
}


// /app
//   ├── layout.js              // Global layout with header and footer
//   ├── page.js                // Home page route
//   ├── about
//   │   └── page.js            // About page route
//   ├── products
//   │   ├── page.js            // Products listing page
//   │   ├── [id]
//   │   │   └── page.js        // Dynamic route for product details
//   │   └── category
//   │       └── page.js        // Nested route for product category
//   └── error.js               // Global error boundary


// /app
//   ├── layout.js         // Global layout for the whole app
//   ├── page.js           // Home page
//   ├── about
//   │   └── page.js       // About page
//   ├── products
//   │   ├── layout.js     // Nested layout for products
//   │   ├── page.js       // Products list page
//   │   └── [id]
//   │       └── page.js   // Dynamic product detail page
//   └── admin
//       ├── layout.js     // Nested layout for the admin section
//       ├── page.js       // Admin dashboard
//       └── settings
//           └── page.js   // Admin settings page


// Parallel Layouts
  // /app
  //   ├── layout.js        // Global layout for the entire app
  //   ├── products
  //   │   ├── layout.js    // Main layout for the product page
  //   │   ├── sidebar.js   // Sidebar layout
  //   │   └── page.js      // Product list page

// Route Groups

  // /app
  // ├── /admin
  // │   ├── (dashboard)
  // │   │   └── page.js       // Admin dashboard page
  // │   └── (settings)
  // │       └── page.js       // Admin settings page
  // ├── /user
  // │   ├── (profile)
  // │   │   └── page.js       // User profile page
  // │   └── (settings)
  // │       └── page.js       // User settings page
  // └── layout.js             // Global layout for the app