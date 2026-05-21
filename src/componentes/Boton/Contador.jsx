
import { useState } from "react";
import styles from "./Contador.module.css";

export function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className={styles.boton}>
      <p>Cantidad elegida: {contador}</p>
      <button
        onClick={() => {
          if (contador > 0) {
            setContador(contador - 1);
          }
        }}
      >
        -
      </button>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
}

