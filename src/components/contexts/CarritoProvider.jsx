import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

export const CarritoProvider = ({ children }) => {
  const addProd = "Agregar Producto";
  const delProd = "Borrar Producto";
  const addCant = "Aumentar Cantidad";
  const delCant = "Disminuir Cantidad";

  const AddProd = (item) => {
    const action = {
      type: addProd,
      payload: item,
    };
    dispatch(action);
  };

  const DelProd = (id) => {
    const action = {
      type: delProd,
      payload: id,
    };
    dispatch(action);
  };

  const AddCant = (id) => {
    const action = {
      type: addCant,
      payload: id,
    };
    dispatch(action);
  };

  const DelCant = (id) => {
    const action = {
      type: delCant,
      payload: id,
    };
    dispatch(action);
  };

  const CompraReducer = (state = [], action = {}) => {
    switch (action.type) {
      case addProd:
        return [...state, action.payload];

      case delProd:
        return state.filter((item) => item.id !== action.payload);

      case addCant:
        return state.map((item) => {
          const cant = item.cant + 1;
          if (item.id === action.payload) return { ...item, cant: cant };
          return item;
        });

      case delCant:
        return state.map((item) => {
          const cant = item.cant - 1;
          if (item.id === action.payload && item.cant > 1)
            return { ...item, cant: cant };
          return item;
        });

      default:
        return state;
    }
  };

  const [compra, dispatch] = useReducer(CompraReducer, []);

  return (
    <CarritoContext.Provider
      value={{ compra, AddProd, DelProd, AddCant, DelCant }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
