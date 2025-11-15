import React from "react";
import ProductoCard from "../components/ProductoCard";
import CarritoResumen from "../components/CarritoResumen";

const CATALOGO = [
  { id: 1, nombre: "Teclado", precio: 15000 },
  { id: 2, nombre: "Mouse",   precio: 8000  },
  { id: 3, nombre: "Monitor", precio: 120000 }
];

export default class Ej1Productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carrito: [] }; // [{id, nombre, precio, qty}]
    this.agregarAlCarrito = this.agregarAlCarrito.bind(this);
    this.removerDelCarrito = this.removerDelCarrito.bind(this);
  }

  agregarAlCarrito(producto) {
    const existe = this.state.carrito.find(p => p.id === producto.id);
    if (existe) {
      const actualizado = this.state.carrito.map(p =>
        p.id === producto.id ? { ...p, qty: p.qty + 1 } : p
      );
      this.setState({ carrito: actualizado });
    } else {
      this.setState({
        carrito: [...this.state.carrito, { ...producto, qty: 1 }]
      });
    }
  }

  removerDelCarrito(id) {
    const actualizado = this.state.carrito.filter(p => p.id !== id);
    this.setState({ carrito: actualizado });
  }

  render() {
    return (
      <div className="row g-3">
        <div className="col-md-8">
          <h2>Ejercicio 1 - Lista de Productos</h2>
          <div className="row g-3">
            {CATALOGO.map(prod => (
              <div className="col-md-4" key={prod.id}>
                <ProductoCard
                  producto={prod}
                  onAdd={() => this.agregarAlCarrito(prod)} // hijo → padre
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <CarritoResumen
            items={this.state.carrito}
            onRemove={this.removerDelCarrito}
          />
        </div>
      </div>
    );
  }
}
