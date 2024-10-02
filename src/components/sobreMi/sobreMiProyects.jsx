import styles from './styles.module.css';
import { GithubOutlined, RightSquareOutlined } from '@ant-design/icons';
import { Button, Flex, Skeleton } from 'antd';

const SobreMiProyects = () => {
    return (
        <>
            <div className={styles.proyectContainer}>
                <div className={styles.proyect}>
                    <h3>E-commerce Fullstack</h3>
                    <img className={styles.img_proyects} src='/caputra_proyecto_backend.jpg' alt='proyecto1' />
                    <p>
                        Este proyecto es una plataforma de comercio electrónico especializada en la venta de guitarras, construida con una arquitectura MVC. Permite a los usuarios registrarse, iniciar sesión y realizar compras.
                        Está dividido en tres roles: <strong>usuario</strong>, <strong>usuario premium</strong>, y <strong>administrador</strong>, quienes tienen diferentes niveles de permisos. Los usuarios premium pueden crear y eliminar productos, mientras que los administradores también pueden gestionar usuarios y eliminar productos.
                        El sistema almacena la última conexión de los usuarios, y si permanecen inactivos durante mucho tiempo, el administrador puede eliminarlos, enviándoles una notificación por correo electrónico. Además, los usuarios premium son notificados cuando alguno de sus productos es eliminado.
                        El proyecto incluye una sección de contacto, y utiliza <strong>WebSockets</strong> para una experiencia en tiempo real.
                    </p>

                    <Flex horizontal="true" gap="small" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                        <a href="https://github.com/EdgarSteinberg/backend_coder" target={'_blank'} rel="noopener noreferrer">
                            <Button type='primary'><GithubOutlined />GitHub</Button>
                        </a>
                        <a href="https://backend-coder-n9w1.onrender.com/" target={'_blank'} rel="noopener noreferrer">
                            <Button type='primary'><RightSquareOutlined />ver proyecto</Button>
                        </a>
                    </Flex>

                </div>

                <div className={styles.proyect}>
                    <h3>E-commerce React + Vite </h3>
                    <img className={styles.img_proyects} src='/captura_proyecto_react.jpg' alt='proyecto2' />
                    <p>
                        Este proyecto es una tienda en línea de venta de celulares, PlayStation y notebooks, desarrollada con <strong>React</strong> y <strong>Vite</strong>, y con almacenamiento de datos en <strong>Firebase</strong>. Cada producto se presenta en una tarjeta con un botón para ver más detalles.
                        Al hacer clic en "Ver detalles", puedes ver la descripción ampliada del producto, junto con una imagen más grande y un contador que te permite seleccionar la cantidad deseada. Al agregar productos, aparece un botón "Terminar compra" que redirige al carrito de compras.
                        En el carrito se almacenan los productos seleccionados, mostrando la imagen, cantidad, precio y el valor total de la compra. También puedes eliminar productos del carrito si cambias de opinión.
                        Al finalizar, un botón "Checkout" solicita tus datos para completar la compra. Tras enviar el formulario, se genera un número de orden con los detalles de tu compra, todo gestionado por Firebase.
                    </p>
                    <Flex horizontal='true' gap='small' style={{ width: '100%', display: 'Flex', justifyContent: 'center', marginTop: '10px' }}>
                        <a href="https://github.com/EdgarSteinberg/codersreact" target={'_blank'} rel="noopener noreferrer"><Button type='primary'><GithubOutlined />GitHub</Button></a>
                        <a href="https://techhavenstore.netlify.app/" target={'_blank'} rel="noopener noreferrer"><Button type='primary'><RightSquareOutlined />ver proyecto</Button></a>
                    </Flex>
                </div>
            </div>
        </>
    )
}

export default SobreMiProyects;