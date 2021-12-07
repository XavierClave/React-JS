import React from "react";
import { useState } from "react";

function ItemCount() {
    const [contador, setContador] = useState(0);
    const handlerClick = () => {
        setContador(contador +1);
    };

    return (
        <div>
            <p>{contador}</p>
            <button onClick={handlerClick}>Agregar</button>
            <button onClick={() => setContador(contador -1)}>Quitar</button>
        </div>
    );
}
export default ItemCount;