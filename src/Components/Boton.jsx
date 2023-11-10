import React from 'react';
import Swal from 'sweetalert2'; 
import "../styles/Btn.css"

const BotonComprar = () => {
  const handleComprar = () => {
    Swal.fire('Producto comprado con éxito', '', 'success');
  };

  return (
    <button onClick={handleComprar}>Comprar</button>
  );
};

export default BotonComprar;
