import { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom"; // Hook de react-router-dom
import { Button, Flex, Input } from 'antd';
import Swal from 'sweetalert2';
import styles from './styles.module.css'
import { ThemeContext } from "../../context/ThemeContext";

const Reset_password = () => {
    const [formData, setFormData] = useState({
        newPassword: ''
    });
    const [searchParams] = useSearchParams(); // Captura los query params
    const token = searchParams.get("token"); // Obtiene el valor del token desde la query string
    const { isDarkMode } = useContext(ThemeContext);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contraseña restablecida', formData);

        fetch('http://localhost:8080/api/users/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                newPassword: formData.newPassword,
                token: token // Incluimos el token en el cuerpo
            })
        })
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    Swal.fire({
                        title: "Contraseña actualizada correctamente",
                        icon: "success"
                    });

                } else {
                    Swal.fire({
                        title: "Error al modificar la contraseña",
                        icon: "error"
                    });
                }
            })
            .catch((error) => {
                console.error('Error al modificar la contraseña', error.message);
                Swal.fire({
                    title: "Error al modificar la contraseña",
                    text: `Hubo un problema al modificar la contraseña: ${error.message}`,
                    icon: "error"
                });
            })
            .finally(() => {
                setFormData({
                    newPassword: ''
                });
            });
    };

    return (
        <>
            <div className={`${isDarkMode ? styles.dark : styles.light} ${styles.fullScreen}`}>
                <br></br>
                <br></br>
                <form className={styles.divContainer} onSubmit={handleSubmit}>
                    <h1>Restablecer Contraseña</h1>
                    <label htmlFor="newPassword">Ingrese su nueva contraseña</label>
                    <br></br>
                    <Input
                        type="password"
                        name="newPassword"
                        placeholder='Ingrese su nueva contraseña'
                        value={formData.newPassword}
                        onChange={handleChange}
                    />
                    <br></br>

                    <Flex vertical gap="small" style={{ width: '100%', }}>
                        <Button type='primary' htmlType="submit">Restablecer Contraseña</Button>
                    </Flex>
                    <br></br>
                    <Flex vertical gap="small" style={{ width: '100%', }}>
                        <a href="/login">
                            <Button type='primary'>Iniciar Sesión</Button>
                        </a>
                    </Flex>
                </form>

            </div>
        </>
    );
};

export default Reset_password;
