import "../styles/Card.css";
import BotonComprar from "./Boton";

const Card = ({ producto }) => {
  const { id, img, nombre, descripcion, cantidad, SKU, precio } = producto;
  return (
    <div key={id} className="card">
      <h2>{nombre}</h2>
      <img src={img} alt="" className="card-img" />
      <h3>{descripcion}</h3>
      <h3>Cantidad disponible: {cantidad}</h3>
      <h3>SKU: {SKU}</h3>
      <h3>precio: {precio}</h3>
      <BotonComprar />
    </div>
  );
};
export default Card;