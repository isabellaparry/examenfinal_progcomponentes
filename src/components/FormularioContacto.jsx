import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function FormularioContacto() {
  const [, forceUpdate] = useState(0);
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "Este campo es obligatorio",
        email: "Email inválido",
      },
    })
  );

  const [form, setForm] = useState({ nombre: "", email: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validator.current.allValid()) {
      validator.current.showMessages();
      forceUpdate((x) => x + 1);
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "contactos"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setForm({ nombre: "", email: "" });
      validator.current.hideMessages();
      alert("Datos guardados en Firestore.");
    } catch (err) {
      console.error(err);
      alert("Error al guardar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="card p-3">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          className="form-control"
          name="nombre"
          value={form.nombre}
          onChange={onChange}
        />
        <div className="text-danger small">
          {validator.current.message("nombre", form.nombre, "required")}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <div className="text-danger small">
          {validator.current.message("email", form.email, "required|email")}
        </div>
      </div>

      <button className="btn btn-success" disabled={loading}>
        {loading ? "Guardando..." : "Enviar"}
      </button>
    </form>
  );
}
