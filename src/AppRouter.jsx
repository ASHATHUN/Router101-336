// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Product from './pages/Product';  // Dynamic route for product
// import User from './pages/User';        // Dynamic route for user
// import About from './pages/About';

// function AppRouter() {
//   return (
//     <Router>
//       <Routes>
//             <Route path="/" element={<Home />} />


//             <Route path="/about" element={<About />} />
//             <Route path="/product" element={<Product />} />  
//             {/* กำหนดเส้นทาง component path นี้จะไปเชื่อม component ไหน dev ต้องบอกได้ว่าเชื่อมไปเส้นทางไหน */}

//         {/* Dynamic Route for product */}
//         <Route path="/product/:productId" element={<Product />} />
//         {/* Dynamic Route for user */}
//         <Route path="/user/:userId" element={<User />} />
//       </Routes>
//     </Router>
//   );
// }

// export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

