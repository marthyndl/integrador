import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { Product } from "../../Context/types";

const Products: React.FC = (): JSX.Element | null => {
  const appContext = useContext(DataContext);

  if (!appContext) return null;
  const { productsFiltered } = appContext;

  return (
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {productsFiltered.map((producto: Product) => {
          return (
            <tr key={producto.id}>
              <td>{producto.userId}</td>
              <td>{producto.title}</td>
              <td>{producto.body}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Products;
