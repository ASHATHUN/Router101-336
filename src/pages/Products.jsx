import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, removeProduct } from '../features/productSlice';


function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

const handleAddProduct = () => {
  const product = {
      id: productList.length + 1, // สร้าง id อัตโนมัติ
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description
    };

    dispatch(addProduct(product));

    setNewProduct({ name: '', price: '', description: '' }); // รีเซ็ตฟอร์ม
  };


  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
            <button onClick={() => handleRemoveProduct(product.id)} style={{ marginLeft: '10px' }}>Remove</button>  
          </li>
        ))}
      </ul>

      <h3>Add New Product</h3>
      
        <p>Product Name :</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
         value={newProduct.name}
          onChange={handleChange}
        />
      
        <p>Product Price :</p>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          min="0"
        />
      
        <p>Product Description :</p>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default Products;
