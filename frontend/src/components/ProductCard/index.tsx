import './styles.css';

import ProductImage from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';

const ProductCard = () => {
  return (
    <div className='base-card product-card'>
      <div className='card-top-container'>
      <img src={ProductImage} alt="Nome do produto" />
      </div>
      <div className='card-bottom-container'>
        <h6>
            Nome do produto
        </h6>
      <ProductPrice />
      </div>
    </div>
  );
};

export default ProductCard;
