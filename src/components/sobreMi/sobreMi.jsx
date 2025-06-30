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
        link.href = '/DevEdgarSteinberg6.pdf'; // Reemplaza con la ruta correcta de tu CV
        link.download = 'DevEdgarSteinberg6.pdf'; // Nombre del archivo que se descargará
        link.click();
    };
    useEffect(() => {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                console.log(json.payload)
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

                    <h1>¡Bienvenido a mi portafolio!</h1>

                    {/*  <div className={styles.imagenes}>
                        <LazyLoadImage className={styles.img_principal} src={`https://porfolio-back-lr6x.onrender.com/image/${item.image}`} alt="imagen personal" effect="blur" threshold={100} />
                        <p className={styles.p}>{item.description}</p>

                    </div> */}
                  
                    <div className={styles.imagenes}>
                        <LazyLoadImage
                            className={styles.img_principal}
                            src={`/yo_transparente.png`}
                            alt="imagen personal"
                            effect="blur"
                            threshold={100} />
                        {/*  <p className={styles.p}>Hola, soy Edgar Steinberg. Soy un desarrollador web apasionado por crear soluciones tanto en el frontend como en el backend. Con experiencia en tecnologías como React y Node.js, me especializo en desarrollar aplicaciones web responsivas y optimizadas, siempre enfocándome en una experiencia de usuario fluida y eficiente. Busco constantemente nuevos desafíos que me permitan seguir aprendiendo y perfeccionando mis habilidades en el mundo del desarrollo web. </p> */}

                        <p className={styles.p}>
                            👋 Soy <strong>Edgar Steinberg</strong>, desarrollador <strong>Full Stack</strong> con experiencia en frontend usando <strong>React</strong> y <strong>Next.js</strong>, y en backend trabajando con <strong>Node.js</strong> y <strong>Express</strong>.
                            🗄️ Manejo bases de datos como <strong>MongoDB</strong> y <strong>MySQL</strong>, combinando rendimiento y escalabilidad.
                            🚀 Me apasiona crear aplicaciones web que no solo funcionen bien, sino que también ofrezcan una excelente experiencia de usuario.
                        </p>

                    </div>

                    <div className={styles.btn} >
                        <Button type='primary' onClick={handleDownload} icon={<DownloadOutlined />}>descargar cv</Button>
                    </div>

                    <br></br>
                    <h1>Proyectos Destacados</h1>
                    <SobreMiProyects />

                    <h1>Tecnologias</h1>
                    <div className={styles.divCotainer_skills}>
                        <br></br>
                        <SobreMiSkills skills={item.skills} />
                    </div>


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
