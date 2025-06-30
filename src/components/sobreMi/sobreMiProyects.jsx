import styles from './styles.module.css';
import { GithubOutlined, RightSquareOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'antd';

const SobreMiProyects = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [verMas, setVerMas] = useState(false);

    const handleVerMas = (id) => {
        setVerMas(prev => ({
            ...prev,
            [id]: !prev[id] // Toggle solo el id correspondiente
        }));
    };
    return (
        <>
            <div className={styles.proyectContainer}>
                <div className={styles.flex}>

                    <div className={styles.proyect} styles={{ flex: '1' }}>
                        <h3>Plataforma de Viajes: Pasajes, Paquetes y Hospedaje</h3>

                        {/*     <img className={styles.img_proyects} src='/cartFullStack.jpg' alt='proyecto' /> */}

                        <video
                            src="/videos/fligth956.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }}
                            poster="/cartFullStack.jpg"
                        />
                        <p>⚙️ Stack Tecnológico</p>
                        <ul  >
                            <li>🧩 <strong>Frontend:</strong> Next.js, Context API, Hooks, componentes modulares</li>
                            <li>🔧 <strong>Backend:</strong> Node.js con Express</li>
                            <li>🗄️ <strong>Base de datos:</strong> MongoDB (Mongoose)</li>
                        </ul>
                        <p>🛠️ Características principales</p>
                        <Button type="primary" onClick={() => handleVerMas('viajes')}>
                            {verMas['viajes'] ? 'ver menos' : 'ver más'}
                        </Button>
                        {verMas['viajes'] && (
                            <ul  >
                                <li>📁 Estructura basada en arquitectura <strong>MVC</strong> (Modelo - Vista - Controlador)</li>
                                <li>🔐 Sistema de autenticación con <strong>JWT</strong> y manejo de roles (<em>admin</em>, <em>usuario</em>, <em>premium</em>)</li>
                                <li>🛒 Carrito de compras con generación automática de <strong>tickets</strong></li>
                                <li>📧 Notificaciones por email integradas con <strong>Nodemailer</strong></li>
                                <li>🧭 Panel de administración para gestionar <strong>usuarios</strong>, <strong>vuelos</strong>, <strong>paquetes</strong>, <strong>provincias</strong> y <strong>hoteles</strong></li>
                                <li>🧪 Pruebas automatizadas con <strong>Jest</strong> y <strong>Supertest</strong></li>
                                <li>📄 Documentación interactiva de la API utilizando <strong>Swagger</strong></li>
                            </ul>
                        )
                        }

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
                    <div className={styles.proyect} styles={{ flex: '1' }}>
                        <h3>Electric Guitar – Tienda de Guitarras Online</h3>

                        {/* <img className={styles.img_proyects} src='/caputra_proyecto_backend.jpg' alt='proyecto1' /> */}
                        <Carousel autoplay className={styles.carouselWrapper}>
                            <div>
                                <img className={styles.img_proyects} src='/guitarras.png' alt='proyecto1' />
                            </div>
                            <div>
                                <img className={styles.img_proyects} src='/administrarProductos.png' alt='proyecto1' />
                            </div>
                            <div>
                                <img className={styles.img_proyects} src='/adminitrarUsuarios.png' alt='proyecto1' />
                            </div>

                        </Carousel>

                        <p>⚙️ Stack Tecnológico</p>
                        <ul  >
                            <li>🧩 <strong>Frontend:</strong> Handlebars como motor de plantillas.</li>
                            <li>🔧 <strong>Backend:</strong> Node.js con Express</li>
                            <li>🗄️ <strong>Base de datos:</strong> MongoDB (Mongoose)</li>
                        </ul>
                        <p>🛠️ Características principales</p>
                        <Button type="primary" onClick={() => handleVerMas('guitarras')}>
                            {verMas['guitarras'] ? 'ver menos' : 'ver más'}
                        </Button>
                        {verMas['guitarras'] && (
                            <ul  >
                                <li>📐 Arquitectura <strong>MVC</strong> con uso de <strong>DTOs</strong> y <strong>Repositories</strong> para una estructura limpia y mantenible</li>
                                <li>🧪 Pruebas automatizadas con <strong>Mocha</strong>, <strong>Chai</strong> y <strong>Supertest</strong></li>
                                <li>🔐 Autenticación robusta con <strong>Passport</strong> y <strong>JWT</strong>, incluyendo login con <strong>Auth0</strong></li>
                                <li>📧 Envío de correos automáticos con <strong>Nodemailer</strong> (por ejemplo, eliminacion de usuario)</li>
                                <li>📂 Gestión de carga de archivos (como imágenes de productos) con <strong>Multer</strong></li>
                                <li>📄 Documentación interactiva de la API utilizando <strong>Swagger</strong></li>
                                <li>📊 Logs personalizados con <strong>Winston</strong> para monitoreo del sistema</li>
                                <li>⚡ Actualización en tiempo real con <strong>WebSockets</strong>: los administradores pueden agregar o eliminar productos sin necesidad de recargar la página</li>
                            </ul>
                        )
                        }


                        <Flex horizontal="true" gap="small" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                            <a href="https://github.com/EdgarSteinberg/backend_coder" target={'_blank'} rel="noopener noreferrer">
                                <Button type='primary'><GithubOutlined />GitHub</Button>
                            </a>
                            <a href="https://backend-coder-n9w1.onrender.com/" target={'_blank'} rel="noopener noreferrer">
                                <Button type='primary'><RightSquareOutlined />ver proyecto</Button>
                            </a>
                        </Flex>

                    </div>

                </div>

                <div className={styles.flex}>


                    <div className={styles.proyect} styles={{ flex: '1' }}>
                        <h3>Tienda Online de Electrónica</h3>
                        {/*      <img className={styles.img_proyects} src='/captura_proyecto_react.jpg' alt='proyecto2' /> */}
                        <Carousel autoplay className={styles.carouselWrapper}>
                            <div>
                                <img className={styles.img_proyects} src='/electronica1.png' alt='proyecto1' />
                            </div>
                            <div>
                                <img className={styles.img_proyects} src='/electronica2.png' alt='proyecto1' />
                            </div>
                            <div>
                                <img className={styles.img_proyects} src='/electronica3.png' alt='proyecto1' />
                            </div>

                        </Carousel>
                        <p>⚙️ Stack Tecnológico</p>
                        <ul  >
                            <li>🧩 <strong>Frontend:</strong> React con Vite, React Router DOM, Context API</li>
                            <li>🎨 <strong>Estilos:</strong> React Bootstrap y CSS Modules</li>
                            <li>🧠 <strong>Otros:</strong> JSX JavaScript moderno, modularización de componentes</li>
                        </ul>
                        <p >🛠️ Funcionalidades principales:</p>
                        <Button type='primary' onClick={() => handleVerMas(vite)}>
                            {verMas['vite'] ? 'ver menos' : 'ver más'}
                        </Button>
                        {
                            verMas['vite'] && (
                                <ul  >
                                    <li>🛒 Carrito de compras con selección de productos, control de stock y total dinámico</li>
                                    <li>🔁 Navegación fluida con <strong>React Router DOM</strong></li>
                                    <li>⚙️ Manejo de estado con <strong>useState</strong>, <strong>useEffect</strong> y <strong>Context API</strong> para control global</li>
                                    <li>📦 Comunicación entre componentes mediante <strong>props</strong></li>
                                    <li>🎨 Estilos y diseño responsivo utilizando <strong>React Bootstrap</strong></li>
                                    <li>🧩 Componentes reutilizables y arquitectura modular para escalabilidad</li>
                                </ul>
                            )
                        }

                        <Flex horizontal='true' gap='small' style={{ width: '100%', display: 'Flex', justifyContent: 'center', marginTop: '10px' }}>
                            <a href="https://github.com/EdgarSteinberg/codersreact" target={'_blank'} rel="noopener noreferrer"><Button type='primary'><GithubOutlined />GitHub</Button></a>
                            <a href="https://techhavenstore.netlify.app/" target={'_blank'} rel="noopener noreferrer"><Button type='primary'><RightSquareOutlined />ver proyecto</Button></a>
                        </Flex>
                    </div>

                    <div className={styles.proyect} styles={{ flex: '1' }}>
                        <h3>Mobilematrix: Tienda de Celulares Online</h3>
                        {/*     <img className={styles.img_proyects} src='/cartFullStack.jpg' alt='proyecto' /> */}

                        <div ref={ref}>
                            {inView && (
                                <video
                                    src="/videos/mobile.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="none"
                                    style={{ width: '100%', borderRadius: '12px' }}
                                />
                            )}
                        </div>

                        <p>⚙️ Stack Tecnológico</p>
                        <ul >
                            <li>🧩 <strong>Frontend:</strong> React con Vite, diseño responsive y componentes de UI con <strong>Bootstrap</strong></li>
                            <li>🔧 <strong>Backend:</strong> Node.js con Express</li>
                            <li>🗄️ <strong>Base de datos:</strong> MongoDB (Mongoose)</li>

                        </ul>
                        <p>🛠️ Características técnicas destacadas:</p>
                        <Button type='primary' onClick={() => handleVerMas('mobile')}>
                            {verMas['mobile'] ? 'ver menos' : 'ver más'}

                        </Button>

                        {
                            verMas['mobile'] && (
                                <ul>
                                    <li>📐 Arquitectura <strong>MVC</strong> con separación clara de responsabilidades</li>
                                    <li>🔐 Autenticación con <strong>Passport</strong>, <strong>JWT</strong> y proveedores externos (como <strong>GitHub</strong>)</li>
                                    <li>🧪 Pruebas automatizadas con <strong>Jest</strong> y <strong>Supertest</strong> para garantizar calidad del código</li>
                                    <li>🚀 Despliegue en entornos reales usando <strong>Render</strong> para el backend y <strong>Netlify</strong> para el frontend</li>
                                    <li>📄 API RESTful documentada con <strong>Swagger</strong></li>
                                    <li>📊 Monitoreo y logging personalizados con <strong>Winston</strong></li>
                                </ul>
                            )
                        }

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
                </div>
            </div>
        </>
    )
}

export default SobreMiProyects;