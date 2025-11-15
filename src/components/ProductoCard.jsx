export default function ProductoCard({ producto, onAdd }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">
          ${producto.precio.toLocaleString("es-CL")}
        </p>
        <button className="btn btn-primary" onClick={onAdd}>
          Agregar
        </button>
      </div>
    </div>
  );
}
