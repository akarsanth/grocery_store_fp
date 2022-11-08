import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="w3ls_w3l_banner_nav_right_grid1 mt-2">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
