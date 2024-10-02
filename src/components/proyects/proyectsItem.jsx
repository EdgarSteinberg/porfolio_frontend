import styles from './styles.module.css';
import { Button, Skeleton } from 'antd';
import { GithubOutlined, RightSquareOutlined } from '@ant-design/icons';

const ProyectsItem = ({ proyectos }) => {
    const { title, description, thumbnail, technologies, url } = proyectos;
    return (
        <>
            <div className={`${styles.divCards } ${styles.fullScreen}`} >

                <div className={styles.technologiesContainer}>
                    <h3>{title}</h3>
                    {thumbnail && thumbnail.length > 0 ? (
                        <img
                            className={styles.img}
                            src={`http://localhost:8080/img/${thumbnail[0]}`}
                            alt={title}
                            style={{ width: '100%', height: 'auto' }}  // Asegúrate que las imágenes ocupen todo el espacio disponible
                        />
                    ) : (
                        <p >Descripción: {description}</p>
                    )}
                    <p >Descripción: {description}</p>
                </div>

                <div className={styles.technologiesContainer}>
                    {technologies && technologies.length > 0 ? (
                        technologies.map((techImage, techIndex) => (
                            <img
                                key={techIndex}
                                className={styles.techImg}
                                src={`http://localhost:8080/technologies/${techImage}`}
                                alt={`Technology ${techIndex}`}
                            />
                        ))
                    ) : (
                        <p>No hay imágenes de tecnologías disponibles</p>
                    )}
                </div>


                <br />
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    {url && url.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                            <Button type="primary">
                                {index === 0 ? <><RightSquareOutlined /> Ver Proyecto</> : <><GithubOutlined /> GitHub</>}
                            </Button>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProyectsItem;