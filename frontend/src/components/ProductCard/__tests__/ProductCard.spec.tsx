import { render, screen } from "@testing-library/react";
import ProductCard from "..";
import { Product } from "types/product";
test('should render ProductCard', () => {
   //Arrange
   const product : Product = {
    name: 'Computador',
    price: 2590.65,
    imgUrl: 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg',
   } as Product;

    //Act
    render(<ProductCard product={product} />);

    //Assert
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByText("R$")).toBeInTheDocument();
    expect(screen.getByText("2.590,65")).toBeInTheDocument();
}
);
