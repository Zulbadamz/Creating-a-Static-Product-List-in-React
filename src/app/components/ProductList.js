// src/app/components/ProductList.js

import products from './products'; // ✅ correct path

const ProductList = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Product List</h2>
      {products.map(({ id, name, description, price }) => (
        <div
          key={id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{name}</h3>
          <p>{description}</p>
          <p>
            <strong>Price:</strong> ${price.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

