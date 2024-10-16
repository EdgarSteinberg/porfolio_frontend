import styles from './styles.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SobreMiCertificaciones = ({ certificates }) => {
    return (
        <>
            <div className={styles.imagenes_certificates}>
                {certificates && certificates.length > 0 && certificates.map((cert, index) => (
                    <div key={index}>
                        <LazyLoadImage className={styles.img_certificates} src={`https://porfolioback-production-bbd6.up.railway.app/certificates/${cert}`} alt={`certificate ${index}`} effect="blur" threshold={10}/> 
                    </div>
                ))}
            </div>
        </>
    )
}

export default SobreMiCertificaciones;