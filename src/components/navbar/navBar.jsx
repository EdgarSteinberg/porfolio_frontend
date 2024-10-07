
// import React, { useContext, useState, useEffect } from 'react';
// import { ThemeContext } from '../../context/ThemeContext';
// import { Button, Menu } from 'antd';
// import { Link } from 'react-router-dom';
// import styles from './styles.module.css';

// import {
//     AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, FilePdfOutlined,
//     GithubOutlined,
//     LinkedinOutlined,
//     BulbOutlined // Icono para el botón de Light Mode
// } from '@ant-design/icons';

// const NavBar = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const { isDarkMode, toggleTheme } = useContext(ThemeContext);

//     const toggleCollapsed = () => {
//         setCollapsed(!collapsed);
//     };
//     // Efecto para detectar cambios en el tamaño de la ventana
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth > 900) {
//                 setCollapsed(false);  // Cuando el tamaño de la pantalla es mayor a 900px, el menú siempre estará visible
//             }else{
//                 setCollapsed(true)
//             }
//         };

//         // Agregar el event listener
//         window.addEventListener('resize', handleResize);

//         // Ejecutar el efecto inmediatamente al cargar
//         handleResize();

//         // Limpiar el event listener cuando el componente se desmonte
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);
//     // Definir el array de items dentro del componente para acceder a toggleTheme y isDarkMode
//     const items = [
//         {
//             key: '10',
//             icon: <BulbOutlined />, // Icono para cambiar el tema
//             label: (
//                 <span onClick={toggleTheme}  >
//                     Cambiar a {isDarkMode ? 'Light' : 'Dark'} Mode
//                 </span>
//             ),
//         },
//         {
//             key: '1',
//             icon: <PieChartOutlined />,
//             label: <Link to="/">Sobre Mi</Link>,
//         },
//         {
//             key: '2',
//             icon: <DesktopOutlined />,
//             label: <Link to="/proyects">Proyectos</Link>,
//         },
//         {
//             key: '3',
//             icon: <ContainerOutlined />,
//             label: <Link to="/login">Iniciar Sesión</Link>,
//         },
//         {
//             key: '4',
//             icon: <MailOutlined />,
//             label: <Link to="/register">Registro</Link>,
//         },
//         {
//             key: '5',
//             icon: <AppstoreOutlined />,
//             label: <Link to="/contact">Contacto</Link>,
//         },
//         {
//             key: '6',
//             icon: <FilePdfOutlined />,
//             label: <Link to="/cv">CV</Link>,
//         },
//         {
//             key: '7',
//             icon: <AppstoreOutlined />,
//             label: <a href="http://localhost:8080/api/docs/" target='_blank' rel="noopener noreferrer">API Docs</a>,
//         },
//         {
//             key: '8',
//             icon: <GithubOutlined />,
//             label: <a href="https://github.com/EdgarSteinberg" target='_blank'>Github</a>,
//         },
//         {
//             key: '9',
//             icon: <LinkedinOutlined />,
//             label: <a href='https://linkedin.com/in/edgar-steinberg-378183239' target='_blank'>Linkedin</a>,
//         },

//     ];

//     return (

//         <div className={`${styles.nav} ${isDarkMode ? styles.dark : styles.light}`}>
//             <div className={`${styles.navbarContainer} ${collapsed ? styles.collapsedMenu : ''}`}> {/* Agrega clase condicional */}

//                 {/* Botón de hamburguesa */}
//                 {/* <Button
//                     type="primary"
//                     onClick={toggleCollapsed}
//                     style={{ marginBottom: 16, width: 50}} // Ajusta el ancho al contenido
//                 >
//                     {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//                 </Button> */}
//                 <Button
//                     type="primary"
//                     onClick={toggleCollapsed}
//                     className={styles.toggle}
//                     style={{ marginBottom: 16, width: 50 }}
//                 >
//                     {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//                 </Button>



//                 <div className={`${styles.topSection} ${collapsed ? styles.collapsed : ''}`} style={{
//                     backgroundColor: isDarkMode ? '#1c1f30' : '#f5f5f5',
//                 }}>
//                     {/* Colapsar la imagen junto con el menú */}
//                     {!collapsed && (
//                         <>
//                             <img className={styles.img} src="/yo_transparente.png" alt="Descripción" />
//                             <p style={{ color: isDarkMode ? '#f5f5f5' : '#1c1f30' }}>Edgar Steinberg</p>
//                         </>
//                     )}
//                 </div>



//                 {/* Menú que también colapsa */}
//                 {!collapsed && (
//                     <Menu
//                         style={{ backgroundColor: isDarkMode ? '#1c1f30' : '#f5f5f5' }}
//                         defaultSelectedKeys={['1']}
//                         mode="inline"
//                         theme={isDarkMode ? 'dark' : 'light'}
//                         inlineCollapsed={collapsed}
//                         items={items}
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default NavBar;


import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import {
    AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, FilePdfOutlined,
    GithubOutlined,
    LinkedinOutlined,
    BulbOutlined // Icono para el botón de Light Mode
} from '@ant-design/icons';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // Efecto para detectar cambios en el tamaño de la ventana
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setCollapsed(false); // Cuando el tamaño de la pantalla es mayor a 900px, el menú siempre estará visible
            } else {
                setCollapsed(true); // Colapsar el menú en pantallas pequeñas
            }
        };

        // Agregar el event listener
        window.addEventListener('resize', handleResize);

        // Ejecutar el efecto inmediatamente al cargar
        handleResize();

        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Definir el array de items dentro del componente
    const items = [
        {
            key: '10',
            icon: <BulbOutlined />, // Icono para cambiar el tema
            label: (
                <span onClick={toggleTheme}>
                    Cambiar a {isDarkMode ? 'Light' : 'Dark'} Mode
                </span>
            ),
        },
        {
            key: '1',
            icon: <PieChartOutlined />,
            label: <Link to="/">Sobre Mi</Link>,
        },
        {
            key: '2',
            icon: <DesktopOutlined />,
            label: <Link to="/proyects">Proyectos</Link>,
        },
        {
            key: '3',
            icon: <ContainerOutlined />,
            label: <Link to="/login">Iniciar Sesión</Link>,
        },
        {
            key: '4',
            icon: <MailOutlined />,
            label: <Link to="/register">Registro</Link>,
        },
        {
            key: '5',
            icon: <AppstoreOutlined />,
            label: <Link to="/contact">Contacto</Link>,
        },
        {
            key: '6',
            icon: <FilePdfOutlined />,
            label: <Link to="/cv">CV</Link>,
        },
        {
            key: '7',
            icon: <AppstoreOutlined />,
            label: <a href="http://localhost:8080/api/docs/" target='_blank' rel="noopener noreferrer">API Docs</a>,
        },
        {
            key: '8',
            icon: <GithubOutlined />,
            label: <a href="https://github.com/EdgarSteinberg" target='_blank' rel="noopener noreferrer">Github</a>,
        },
        {
            key: '9',
            icon: <LinkedinOutlined />,
            label: <a href='https://linkedin.com/in/edgar-steinberg-378183239' target='_blank' rel="noopener noreferrer">Linkedin</a>,
        },
    ];

    return (
        // Agregar etiqueta <nav> para semántica
        <nav className={`${styles.nav} ${isDarkMode ? styles.dark : styles.light}`}>
            <div className={`${styles.navbarContainer} ${collapsed ? styles.collapsedMenu : ''}`}>
                {/* Botón de hamburguesa */}
                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    className={styles.toggle}
                    style={{ marginBottom: 16, width: 50 }}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>

                <div className={`${styles.topSection} ${collapsed ? styles.collapsed : ''}`} style={{
                    backgroundColor: isDarkMode ? '#1c1f30' : '#f5f5f5',
                }}>
                    {/* Colapsar la imagen junto con el menú */}
                    {!collapsed && (
                        <>
                            <img className={styles.img} src="/yo_transparente.png" alt="Descripción" />
                            <p style={{ color: isDarkMode ? '#f5f5f5' : '#1c1f30' }}>Edgar Steinberg</p>
                        </>
                    )}
                </div>

                {/* Menú que también colapsa */}
                {!collapsed && (
                    <Menu
                        style={{ backgroundColor: isDarkMode ? '#1c1f30' : '#f5f5f5' }}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme={isDarkMode ? 'dark' : 'light'}
                        inlineCollapsed={collapsed}
                        items={items}
                    />
                )}
            </div>
        </nav> // Cerrando etiqueta <nav>
    );
};

export default NavBar;
