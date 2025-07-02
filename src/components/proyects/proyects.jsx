import React, { useEffect, useState, useContext } from "react";
import styles from './styles.module.css';
import ProyectsItem from "./proyectsItem";
import { ThemeContext } from '../../context/ThemeContext';
import SkeletonLoading from "../skeleton/skeletonLoading";

const Proyects = () => {
    const [proyects, setProyects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isDarkMode } = useContext(ThemeContext);


    const isProduction = window.location.hostname !== 'localhost'; // Cambia según tu lógica de producción
    const url = isProduction
        ? 'https://porfolio-back-lr6x.onrender.com/api/proyects'
        : 'http://localhost:8080/api/proyects';


    useEffect(() => {
        fetch(url, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then((json) => {
                setProyects(json.payload);
            })
            .catch((error) => console.error('Error fetching data:', error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className={`${isDarkMode ? styles.dark : styles.light}`}>
            <div className={styles.div}>
                {loading ? (
                    <SkeletonLoading />
                ) : (
                    <>
                        <br></br>
                        <h1 className={styles.heading}>PROYECTOS</h1>
                        <div  style={{display: 'flex', flexWrap: 'wrap'}}>
                             {proyects.map((proyect, index) => (
                            <ProyectsItem key={index} proyectos={proyect} />
                        )).reverse()}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Proyects;
