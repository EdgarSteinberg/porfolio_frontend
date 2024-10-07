import React, { useEffect, useState, useContext } from "react";
import styles from './styles.module.css';
import { Button, Skeleton } from 'antd';
import { GithubOutlined, RightSquareOutlined } from '@ant-design/icons';
import ProyectsItem from "./proyectsItem";
import { ThemeContext } from '../../context/ThemeContext';

const Proyects = () => {
    const [proyects, setProyects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);


    const isProduction = window.location.hostname !== 'localhost'; // Cambia según tu lógica de producción
    const url = isProduction
        ? 'https://porfolioback-production-bbd6.up.railway.app/api/proyects'
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
            <br></br>
            <h1 className={styles.heading}>PROYECTOS</h1>
            <div className={styles.div}>
                {loading ? (
                    <Skeleton
                        active
                        avatar
                        paragraph={{ rows: 16 }}  // Número de líneas del texto en el Skeleton
                        title={{ width: '70%' }}  // Ancho del título del Skeleton
                    />
                ) : (
                    proyects.map((proyect, index) =>

                        <ProyectsItem key={index} proyectos={proyect} />

                    ).reverse()
                )}
            </div>
        </div>
    );
};

export default Proyects;
