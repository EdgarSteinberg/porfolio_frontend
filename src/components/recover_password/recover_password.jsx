import { useState, useContext } from "react"
import { Button, Flex, Input } from 'antd';
import Swal from 'sweetalert2';
import styles from './styles.module.css';
import { ThemeContext } from "../../context/ThemeContext";

const Recover_password = () => {
    const [formData, setFormData] = useState({
        email: ''
    });

    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);

        fetch('https://porfolioback-production-bbd6.up.railway.app/api/users/recover-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(result => {
                if (result.status === 'success') {
                    Swal.fire({
                        title: "Correo Enviado",
                        text: "El correo se ha enviado correctamente.",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Error al Enviar Correo",
                        text: `Hubo un problema al enviar el correo`,  // Mostramos el error en el mensaje
                        icon: "error"
                    });
                }
            })
            .catch((error) => {
                console.error('Error al enviar el mensaje', error.message);
                Swal.fire({
                    title: "Error al Enviar Correo",
                    text: `Hubo un problema al enviar el correo: ${error.message}`, // Concatenar el mensaje de error
                    icon: "error"
                });
            })
            .finally(() => {
                setFormData({
                    email: ''
                })
            })
    }
    return (
        <>
            <div className={`${isDarkMode ? styles.dark : styles.light} ${styles.fullScreen}`}>
                <br></br>
                <br></br>
                <br></br>
              
                <form className={styles.divContainer} onSubmit={handleSubmit}>
                    <h1>Enviar Correo de Recuperación</h1>
                    <br></br>
                    <label htmlFor="email">Ingrese su Email</label>
                    <br></br>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Ingrese su Email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <br></br>
                    <Flex vertical gap="small" style={{ width: '100%', }}>
                        <Button type="primary" htmlType="subtmit">Enviar</Button>
                    </Flex>
                </form>
            </div>
        </>
    )

}

export default Recover_password