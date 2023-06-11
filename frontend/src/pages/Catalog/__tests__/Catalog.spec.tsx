import { render, screen, waitFor } from "@testing-library/react";
import Catalog from "..";
import { Router } from 'react-router-dom';
import history from 'util/history';

test(' should render Catalog with products', async () => {
   //Arrange
  
    //Act
    render(
    <Router history={history}>
        <Catalog  />
    </Router>
    );
    //Assert
  
    expect(screen.getByText("Catálogo de produtos")).toBeInTheDocument();

    await waitFor(() => {
        expect(screen.getByText("Macbook Pro")).toBeInTheDocument();
    }
    );


}
);
