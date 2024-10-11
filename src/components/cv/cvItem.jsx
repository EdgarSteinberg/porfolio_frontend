import styles from './styles.module.css'

const CvItem = ({ cv }) => {

  const formatDate = (dateString) => {
    if (!dateString) return null; // Manejar fechas nulas
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES'); // Formato español
  };


  const formatDescription = (description) => {
    // Suponiendo que las líneas están separadas por saltos de línea
    return description.split('\n').map((line, index) => (
      <h4 key={index}>{line}</h4>
    ));
  };

  return (
    <>
      <div className={styles.divContainer}>
        <h1>{cv.empresa}</h1>
        {/* <p>Desde: {cv.fechaInicio} Hasta: {cv.fechaFin}</p> */}
        <p>Desde: {formatDate(cv.fechaInicio)} Hasta: {formatDate(cv.fechaFin)}</p>
        {/* <p>Puesto: {cv.puesto}</p> */}
        <p>{formatDescription(cv.descripcionTareas)} </p>
        <br></br>
        <p>Tecnologias: {cv.tecnologias}</p>
      </div>
    </>
  )
}

export default CvItem