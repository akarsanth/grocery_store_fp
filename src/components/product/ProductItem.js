import imgOffer from "../../images/offer.png";
import { Link } from "react-router-dom";
import { addToCart } from "../../app/features/cart/cart-actions";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, images, title, unitPrice, hasOffer } = product;

  const addToCartHandler = () => {
    dispatch(addToCart({ productId: id, priceId: unitPrice[0].id }));
  };
  return (
    <div className="col-md-3 w3ls_w3l_banner_left mb-4">
      <div className="hover14 column">
        <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
          {hasOffer && (
            <div className="agile_top_brand_left_grid_pos">
              <img src={imgOffer} alt=" " className="img-responsive" />
            </div>
          )}
          <div className="agile_top_brand_left_grid1">
            <figure>
              <div className="snipcart-item block">
                <div className="snipcart-thumb">
                  <Link to={`/product/${id}`}>
                    <img
                      src={images[0].imageName}
                      alt=" "
                      className="img-responsive"
                    />
                  </Link>
                  <p className="product-title">{title}</p>
                  <h4>
                    Npr. {unitPrice[0].sellingPrice}{" "}
                    {unitPrice[0].hasOffer && (
                      <span>Npr. {unitPrice[0].newPrice}</span>
                    )}
                  </h4>
                </div>
                <div className="snipcart-details">
                  <button className="button" onClick={addToCartHandler}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
