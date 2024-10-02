import { useState, useContext } from "react"
import styles from './styles.module.css'
import { Button, Flex, Input } from 'antd';
import Swal from 'sweetalert2';
import { ThemeContext } from "../../context/ThemeContext";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();

            if (result.status === 'success') {
                console.log(result.message);
                // alert("Mensaje enviado");
                Swal.fire({
                    title: "Correo Enviado",
                    text: "El correo se ha enviado correctamente.",
                    icon: "success"
                });
            } else {
                console.error(result.error);
                //alert(`Error: ${result.error}`);
                Swal.fire({
                    title: "Error al Enviar Correo",
                    text: `Hubo un problema al enviar el correo: ${result.error}`,  // Mostramos el error en el mensaje
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            //alert('Error al enviar el mensaje');
            Swal.fire({
                title: "Error",
                text: "Hubo un error al enviar el mensaje. Inténtalo más tarde.",
                icon: "error"
            });
        } finally {
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    }
    return (
        <>
            <div className={styles.divContainer}>
             {/* <div className={`${isDarkMode ? styles.dark : styles.light}`}> */}
             <div className={`${isDarkMode ? styles.dark : styles.light} ${styles.fullScreen}`}>     
                    <br></br>
                    <br></br>

                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <h1 className={styles.h1}>CONTACTO</h1>
                        <div className={styles.inputContact}>
                            <label htmlFor="name">Nombre: </label>
                            <Input
                                className={styles.inputContact}
                                type='text'
                                name='name'
                                id='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.inputContact}>
                            <label htmlFor="email">Email: </label>
                            <Input
                                className={styles.inputContact}
                                type='email'
                                name='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.inputContact}>
                            <label htmlFor="message">Mensaje: </label>
                            <br></br>
                            <Input.TextArea rows={8}
                                className={styles.inputContact}
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}

                            />
                        </div>
                        <br></br>
                        <Flex vertical='true' gap="small" style={{ width: '100%', }}>
                            <Button type="primary" htmlType="submit" >Enviar</Button>
                        </Flex>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact