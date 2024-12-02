import { useEffect, useState, useContext } from "react"
import CvItem from "./cvItem"
import { ThemeContext } from "../../context/ThemeContext"
import styles from './styles.module.css'
import { Button, Flex, Skeleton } from 'antd';

const Cv = () => {
    const [cv, setCv] = useState([])
    const [loading, setLoading] = useState(true)
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    //https://porfolio-back-lr6x.onrender.com/api/cv
    useEffect(() => {
        fetch('https://porfolio-back-lr6x.onrender.com/api/cv', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                //console.log(json.payload)
                setCv(json.payload)
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }, [])

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
    return (
        <>
            <div className={`${isDarkMode ? styles.dark : styles.light}`}>
                {
                    cv.map((cvs, index) => (
                        <CvItem key={index} cv={cvs} />
                    ))
                }
            </div>
        </>
    )
}

export default Cv