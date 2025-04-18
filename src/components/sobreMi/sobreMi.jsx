import { useEffect, useState, useContext } from 'react';
import styles from './styles.module.css';
import { Button, Flex } from 'antd';
import { RightSquareOutlined, DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SobreMiSkills from './SobreMiSkills';
import SobreMiProyects from './sobreMiProyects';
import SobreMiCertificaciones from './sobreMiCertificaciones';
import { ThemeContext } from '../../context/ThemeContext';
import SkeletonLoading from '../skeleton/skeletonLoading';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//'https://porfolio-back-lr6x.onrender.com/api/aboutme'
const SobreMi = () => {
    const [aboutMe, setAboutMe] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const isProduction = window.location.hostname !== 'localhost'; // Cambia según tu lógica de producción
    const url = isProduction
        ? 'https://porfolio-back-lr6x.onrender.com/api/aboutme'
        : 'http://localhost:8080/api/aboutme';


    const handleDownload = () => {
        // Aquí puedes implementar la lógica para descargar el CV
        const link = document.createElement('a');
        link.href = '/cv_developer_edgar_steinberg_abril.pdf'; // Reemplaza con la ruta correcta de tu CV
        link.download = 'cv_developer_edgar_steinberg_abril.pdf'; // Nombre del archivo que se descargará
        link.click();
    };
    useEffect(() => {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                //console.log(json.payload)
                setAboutMe(json.payload);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError('Error fetching data');

            })
            .finally(() => setLoading(false))
    }, []);

    if (loading) return (
        <SkeletonLoading />
    );


    return (
        <div className={`${styles.divContainer} ${isDarkMode ? styles.dark : styles.light}`}> {/* Aplicar estilos según el tema */}
            {aboutMe && aboutMe.map((item, index) => (
                <div key={index} >

                    <h1>Edgar Steinberg</h1>
                    <div className={styles.imagenes}>
                        <LazyLoadImage className={styles.img_principal} src={`https://porfolio-back-lr6x.onrender.com/image/${item.image}`} alt="imagen personal" effect="blur" threshold={100}/>
                        <p className={styles.p}>{item.description}</p>
                        
                    </div>
                    <div className={styles.btn} >
                    <Button type='primary' onClick={handleDownload} icon={<DownloadOutlined />}>descargar cv</Button>
                    </div>
                  

                    <h1>Tecnologias</h1>
                    <div className={styles.divCotainer_skills}>
                        <br></br>
                        <SobreMiSkills skills={item.skills} />
                    </div>

                    <br></br>
                    <h1>Proyectos Destacados</h1>
                    <SobreMiProyects />

                    <br></br>
                    <Flex className={styles.divContainerTools}>
                        <Link to={'/proyects'}><Button type='primary'><RightSquareOutlined />ver mas proyectos</Button></Link>
                    </Flex>

                    <br></br>
                    <h1>Mis Certificaciones</h1>
                    <SobreMiCertificaciones certificates={item.certificates} />

                </div>
            ))}
        </div>
    );
}

export default SobreMi;
