export default function CarritoResumen({ items, onRemove }) {
  const total = items.reduce((acc, it) => acc + it.precio * it.qty, 0);

  return (
    <div className="card">
      <div className="card-body">
        <h4>Carrito</h4>
        {items.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul className="list-group">
            {items.map(it => (
              <li
                key={it.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  {it.nombre} x {it.qty}
                </div>
                <div>
                  ${(it.precio * it.qty).toLocaleString("es-CL")}
                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={() => onRemove(it.id)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-3">
          <strong>Total:</strong> ${total.toLocaleString("es-CL")}
        </div>
      </div>
    </div>
  );
}
