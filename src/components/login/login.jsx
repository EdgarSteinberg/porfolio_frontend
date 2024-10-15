import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import styles from './styles.module.css'
import { Button, Flex, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
import { ThemeContext } from "../../context/ThemeContext";

const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://porfolioback-production-bbd6.up.railway.app/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(response => response.json())
            .then(result => {

                if (result.status === 'success') {
                    console.log(result.message);
                    Swal.fire({
                        title: "Login exitoso",
                        icon: "success"
                    }).then(() => {
                        // Redirigir al usuario a la URL proporcionada
                        window.location.href = result.redirectUrl;
                    });
                } else {

                    Swal.fire({
                        title: "Error al inciar sesion",
                        text: `Hubo un problema al inciar sesion: ${result.error}`,
                        icon: "error"
                    });
                }
            })
            .catch(error => {
                
                Swal.fire({
                    title: "Error de red",
                    text: "Hubo un problema con la conexión. Por favor, inténtalo más tarde.",
                    icon: "error"
                });
            })
            .finally(() => {
                setLogin({
                    email: '',
                    password: ''
                });
            });
    }

    return (
      <div className={`${isDarkMode ? styles.dark : styles.light} ${styles.fullScreen}`}>  
      <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className={styles.login}>
                <h1 className={styles.h1}>INICIAR SESIÓN</h1>

                <Link to={"https://porfolioback-production-bbd6.up.railway.app/api/github"}> <Flex vertical gap="small" style={{ width: '100%', }}>
                    <Button type="primary" htmlType="submit" >GITHUB</Button>
                </Flex></Link>

                <form onSubmit={handleSubmit}>
                    <div className={styles.inputLogin}>
                        <label htmlFor="email">Email</label>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Username"
                            className={styles.inputLogin}
                            type="email"
                            name="email"
                            id="email"
                            value={login.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.inputLogin}>
                        <label htmlFor="password">Password</label>
                        <Input
                            prefix={<LockOutlined />}
                            placeholder="Password"
                            className={styles.inputLogin}
                            type="password"
                            name="password"
                            id="password"
                            value={login.password}
                            onChange={handleChange}
                        />
                    </div>

                    <br></br>
                    <Flex vertical gap="small" style={{ width: '100%', }}>
                        <Button type="primary" htmlType="submit" >Iniciar Sesion</Button>
                    </Flex>
                    <br></br>

                    <p>¿Olvidaste tu contraseña?</p>
                    <Link className={styles.a} to={'/recover-password'}>Click Aqui</Link>
                    <p>¿No tienes una cuenta?</p>
                    <Link className={styles.a} to={'/register'}>Regístrate</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;