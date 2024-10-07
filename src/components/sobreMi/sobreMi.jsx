import { useEffect, useState, useContext } from 'react';
import styles from './styles.module.css';
import { Button, Flex, Skeleton } from 'antd';
import { GithubOutlined, RightSquareOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SobreMiSkills from './SobreMiSkills';
import SobreMiProyects from './sobreMiProyects';
import SobreMiCertificaciones from './sobreMiCertificaciones';
import { ThemeContext } from '../../context/ThemeContext';

//'https://porfolio-back-lr6x.onrender.com/api/aboutme'
const SobreMi = () => {
    const [aboutMe, setAboutMe] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const isProduction = window.location.hostname !== 'localhost'; // Cambia según tu lógica de producción
    const url = isProduction
        ?  'http://porfolioback-production-bbd6.up.railway.app/api/aboutme'
        : 'http://localhost:8080/api/aboutme';

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
        <div style={{
            backgroundColor: isDarkMode ? '#202334' : '#fff', // Cambia el color de fondo según el tema
            color: isDarkMode ? '#c7c7c7' : '#202334', // Cambia el color del texto según el tema
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'  // Esto asegura que el contenedor ocupe toda la altura de la ventana
        }}>
            <Skeleton
                active
                avatar
                paragraph={{ rows: 10 }}  // Número de líneas del texto en el Skeleton
                title={{ width: '70%' }}  // Ancho del título del Skeleton
            />
        </div>
    );
    if (error) return <div>{error}</div>;

    return (
        <div className={`${styles.divContainer} ${isDarkMode ? styles.dark : styles.light}`}> {/* Aplicar estilos según el tema */}
            {aboutMe && aboutMe.map((item, index) => (
                <div key={index} >

                    <h1>Edgar Steinberg</h1>
                    <div className={styles.imagenes}>
                        <img className={styles.img_principal} src={`https://porfolio-back-lr6x.onrender.com/image/${item.image}`} alt="imagen personal" />
                        <p className={styles.p}>{item.description}</p>
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
