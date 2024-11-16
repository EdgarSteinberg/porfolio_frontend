import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.css'
import { Button, Flex, Input } from 'antd';
import Swal from 'sweetalert2';
import { ThemeContext } from "../../context/ThemeContext";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: ''
  });

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    fetch('https://porfolio-back-lr6x.onrender.com/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          console.log(result.message);
          //alert("Registro exitoso");
          Swal.fire({
            title: "Registro exitoso",
            icon: "success"
          })
            .then(() => {
              window.location.href = result.redirectUrl
            })
        } else {
          console.error(result.error);
          //alert(`Error: ${result.error}`);
          Swal.fire({
            title: "Error en el registro",
            text: `Hubo un problema al registrar: ${result.error}`,
            icon: "error"
          });
        }
      })
      .catch(error => {
        console.error("Error de red:", error);
        //alert("Hubo un problema con el registro.");
        Swal.fire({
          title: "Error de red",
          text: "Hubo un problema con el registro.",
          icon: "error"
        });
      })
      .finally(() => {
        setFormData({
          first_name: '',
          last_name: '',
          age: '',
          email: '',
          password: ''
        })
      })
  };

  return (
    <>
      {/* <div className={`${isDarkMode ? styles.dark : styles.light}`}> */}
      <div className={`${isDarkMode ? styles.dark : styles.light} ${styles.fullScreen}`}>
        <br></br>
        <br></br>


        <div className={styles.registro}>
          <h1 className={styles.h1}>REGISTRO</h1>
          <Link to={"https://porfolio-back-lr6x.onrender.com/api/github"}> <Flex vertical gap="small" style={{ width: '100%', }}>
            <Button type="primary" htmlType="submit" >GITHUB</Button>
          </Flex></Link>


          <form onSubmit={handleSubmit}>
            <div className={styles.inputRegistro}>
              <label htmlFor="first_name">Nombre:</label>
              <Input
                className={styles.inputRegistro}
                type="text"
                name="first_name"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputRegistro}>
              <label htmlFor="last_name">Apellido:</label>
              <Input
                className={styles.inputRegistro}
                type="text"
                name="last_name"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputRegistro}>
              <label htmlFor="age">Edad:</label>
              <Input
                className={styles.inputRegistro}
                type="number"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputRegistro}>
              <label htmlFor="email">Email:</label>
              <Input
                className={styles.inputRegistro}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputRegistro}>
              <label htmlFor="password">Password:</label>
              <Input
                className={styles.inputRegistro}
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <br></br>
            <Flex vertical gap="small" style={{ width: '100%', }}>
              <Button type="primary" htmlType="submit" >Enviar</Button>
            </Flex>

            <br></br>
            <p>¿Ya tienes una cuenta?</p>
            <Link className={styles.a} to={'/login'}>Iniciar Sesión</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
