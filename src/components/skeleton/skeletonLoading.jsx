import { Skeleton } from 'antd';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const SkeletonLoading = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    
    return (
        <>
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
        </>
    )
}

export default SkeletonLoading