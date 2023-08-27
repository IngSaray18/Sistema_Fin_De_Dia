import { useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000/");

export default function App() {
  const [mensaje, setMensaje] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", mensaje);

    setMensaje("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mensaje" placeholder="ingresa tu mensaj.">
          Mensaje:
        </label>
        <input
          type="text"
          placeholder="ingresa tu mensaje..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button type="submit"> Enviar.</button>
      </form>
    </div>
  );
}
