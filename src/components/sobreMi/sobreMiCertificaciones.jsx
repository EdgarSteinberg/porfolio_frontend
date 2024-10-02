import styles from './styles.module.css';

const SobreMiCertificaciones = ({certificates}) => {
    return(
        <>
          <div className={styles.imagenes_certificates}>
                        {certificates && certificates.length > 0 && certificates.map((cert, index) => (
                            <div key={index}>
                                <img className={styles.img_certificates} src={`http://localhost:8080/certificates/${cert}`} alt={`certificate ${index}`} />
                            </div>
                        ))}
                    </div>
        </>
    )
}

export default SobreMiCertificaciones;