import { render, screen } from "@testing-library/react";
import ButtonIcon from "..";

test('ButtonIcon should render button with given text', () => {
   //Arrange
   const text = 'Fazer login';
    //Act
    render(<ButtonIcon text={text} />);

    //Assert
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByTestId('arrow')).toBeInTheDocument();
}
);
