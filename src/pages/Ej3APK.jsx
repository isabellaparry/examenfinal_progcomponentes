import { useEffect, useState } from "react";
import { auth, storage } from "../firebase";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Ej3APK() {
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    signInAnonymously(auth).catch(console.error);
    return () => unsub();
  }, []);

  const subir = async () => {
    try {
      if (!file || !user) return;
      const r = ref(storage, `uploads/${user.uid}/${file.name}`);
      await uploadBytes(r, file);
      const link = await getDownloadURL(r);
      setUrl(link);
      alert("Archivo subido correctamente.");
    } catch (err) {
      console.error(err);
      alert("Error al subir archivo.");
    }
  };

  return (
    <div>
      <h2>Ejercicio 3 - Auth & Storage</h2>
      <p><strong>Usuario:</strong> {user ? user.uid : "No autenticado aún"}</p>

      <div className="card p-3">
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={subir}
          disabled={!file || !user}
        >
          Subir archivo
        </button>

        {url && (
          <div className="mt-2">
            <a href={url} target="_blank" rel="noreferrer">
              Ver archivo subido
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
