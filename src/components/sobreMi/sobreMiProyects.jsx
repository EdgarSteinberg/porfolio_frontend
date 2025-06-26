import styles from './styles.module.css';
import { GithubOutlined, RightSquareOutlined } from '@ant-design/icons';
import { Button, Flex, Skeleton } from 'antd';

const SobreMiProyects = () => {
    return (
        <>
            <div className={styles.proyectContainer}>
                <div className={styles.proyect}>
                    <h3>E-commerce Fullstack</h3>
                    {/*     <img className={styles.img_proyects} src='/cartFullStack.jpg' alt='proyecto' /> */}
                    <video
                        src="/videos/mobile.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
                        poster="/cartFullStack.jpg"
                    />
                    <p>
                        Tienda online desarrollada con <strong>React</strong> en el frontend y <strong>Node.js</strong> con <strong>Express</strong> en el backend. La app permite a los usuarios <strong>registrarse</strong>, <strong>iniciar sesión</strong> y completar su perfil para realizar compras, generando un <strong>ticket</strong> al finalizar la operación. La gestión de usuarios está basada en <strong>roles</strong>: usuario, premium y administrador. Los usuarios pueden <strong>subir documentos</strong> para solicitar el rol premium, y se notifican por <strong>email</strong> si alguno de sus productos es eliminado. El sistema también incluye <strong>recuperación de contraseña</strong> mediante correo electrónico. Todo el <strong>panel de administración</strong> está optimizado para facilitar el manejo de productos y usuarios de forma segura y eficiente.
                    </p>


                    <Flex
                        horizontal="true"
                        gap="small"
                        style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                        <a href="https://github.com/EdgarSteinberg/full_stack_react" target={'_blank'} rel="noopener noreferrer">
                            <Button type='primary'><GithubOutlined />GitHub</Button>
                        </a>
                        <a href="https://mobilematrix.netlify.app/" target={'_blank'} rel="noopener noreferrer">
                            <Button type='primary'><RightSquareOutlined />ver proyecto</Button>
                        </a>
                    </Flex>
                </div>
                <div className={styles.proyect}>
                    <h3>E-commerce Fullstack</h3>
                    <img className={styles.img_proyects} src='/caputra_proyecto_backend.jpg' alt='proyecto1' />
                    <p>
                        Plataforma de comercio electrónico desarrollada con arquitectura MVC utilizando Node.js y Express. Permite a los usuarios registrarse, iniciar sesión y realizar compras. El sistema está basado en roles: <strong>usuario</strong>, <strong>premium</strong> y <strong>administrador</strong>, cada uno con diferentes niveles de permisos.
                        Los usuarios premium pueden crear y eliminar productos, mientras que los administradores también gestionan usuarios y controlan la plataforma.
                        La aplicación registra la última conexión de cada usuario y permite al administrador eliminar cuentas inactivas, enviando notificaciones por correo electrónico. Además, los usuarios premium reciben avisos cuando sus productos son eliminados.
                        El proyecto incluye una sección de contacto y utiliza <strong>WebSockets</strong> para brindar una experiencia en tiempo real.
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
                        Este proyecto es una tienda en línea desarrollada con <strong>React</strong> y <strong>Vite</strong>, utilizando <strong>Firebase</strong> para almacenamiento de datos. Cada producto se muestra en una tarjeta con opción para ver detalles ampliados, incluyendo una imagen destacada y un contador para seleccionar cantidad.
                        Al agregar productos, aparece un botón "Terminar compra" que redirige al carrito, donde se visualiza la imagen, cantidad, precio y el total de la compra. También se pueden eliminar productos del carrito de forma dinámica.
                        En el proceso de checkout, el usuario completa un formulario con sus datos. Al finalizar la compra, se genera automáticamente una orden con número de seguimiento, todo gestionado a través de Firebase.
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