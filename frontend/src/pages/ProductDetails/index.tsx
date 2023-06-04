import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import './styles.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from 'types/product';
import { BASE_URL } from 'util/request';

import { useEffect, useState } from 'react';
import ProductDetailsLoader from './ProductDetailsLoader';
import ProductInfoLoader from './ProductInfoLoader';

type UrlParams = {
  productId: string;
};

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams<UrlParams>();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            {isLoading ? (
              <ProductDetailsLoader />
            ) : (
              <>
                <div className="img-container">
                  <img src={product?.imgUrl} alt={product?.name} />
                </div>
                <div className="name-price-container">
                  <h1>{product?.name}</h1>
                  {product && <ProductPrice price={product?.price} />}
                </div>
              </>
            )}
          </div>
          {isLoading ? (
            <ProductInfoLoader />
          ) : (
            <div className="col-xl-6">
              <div className="description-container">
                <h1>Descrição do Produto</h1>
                <p>{product?.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
