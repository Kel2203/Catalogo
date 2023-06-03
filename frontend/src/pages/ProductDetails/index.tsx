import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import './styles.css';
import { Link } from 'react-router-dom';
const ProductDetails = () => {
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
            <div className="img-container">
                <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg" alt="Produto" />

            </div>
            <div className="name-price-container">
                <h1>Computador Desktop - Intel Core i7</h1>
              <ProductPrice price={2345.67}/>


            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
                <h1>Descrição do Produto</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent vitae eros eget tellus tristique bibendum.
                    Donec rutrum sed sem quis venenatis. Proin viverra risus
                    a eros volutpat tempor. In quis arcu et eros porta
                    lobortis sit amet eu ex. Ut eget tellus euismod,
                    lacinia ipsum sed, fermentum metus. Phasellus pretium
                    nunc sed metus convallis, eget convallis nisl
                    ultricies. Sed euismod, massa quis aliquam
                    porttitor, enim lectus pretium quam, vitae
                    dignissim neque urna sed turpis. Nulla
                    facilisi. Sed ut erat ligula. Nam
                    tincidunt vestibulum interdum.
                    Donec vitae tempor dolor.
                    Donec auctor, sapien
                    eget feugiat molestie,
                    nisl ligula porta
                    magna, sed
                    imperdiet
                    enim
                    eros
                    in
                    massa.
                    Donec
                    ut
                    ex
                    ac

                    </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
