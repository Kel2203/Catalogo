import { render, screen } from "@testing-library/react";
import ProductPrice from "..";

test('should render ProductPrice', () => {
   //Arrange
   const price = 10.1;
    //Act
    render(<ProductPrice price={price} />);

    //Assert
    expect(screen.getByText("R$")).toBeInTheDocument();
    expect(screen.getByText("10,10")).toBeInTheDocument();
}
);
