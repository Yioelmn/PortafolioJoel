import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Text from '../components/atoms/Text.jsx';
import DynamicForm from '../components/molecules/DynamicForm.jsx';
import Button from '../components/atoms/Button.jsx';

function Contact() {
  
  const initialFormData = {
    nombre: '',
    correo: '',
    mensaje: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  
  const formInputs = [
    {
      id: 'nombre',
      type: 'text',
      label: 'Nombre',
      placeholder: 'Ingresa tu nombre',
      value: formData.nombre,
      onChange: (e) => setFormData({ ...formData, nombre: e.target.value }),
    },
    {
      id: 'correo',
      type: 'email',
      label: 'Correo',
      placeholder: 'Ingresa tu correo',
      value: formData.correo,
      onChange: (e) => setFormData({ ...formData, correo: e.target.value }),
    },
    {
      id: 'mensaje',
      type: 'textarea',
      label: 'Mensaje',
      placeholder: 'Deja un mensaje',
      rows: 3,
      value: formData.mensaje,
      onChange: (e) => setFormData({ ...formData, mensaje: e.target.value }),
    },
  ];

  
  const handleSubmit = () => {

    const message = `Nombre: ${formData.nombre}\nCorreo: ${formData.correo}\nMensaje: ${formData.mensaje}`;
    alert(message);

    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.mensaje.trim()) {
      alert("Se requiere llenar los campos antes de enviar");
      return;
    }


    if (!formData.correo.includes("@")) {
      alert("Por favor ingresa un correo válido con @.");
      return;
    }
};

  
  const handleClear = () => {
    setFormData(initialFormData);
  };

  return (
    <Container className="my-5">
      <Text variant="h1">Contacto</Text>
      <Text variant="p">Llena el formulario para poder contactarme contigo</Text>

      <DynamicForm inputs={formInputs} />

      <div className="mt-3">
        <Button variant="primary" onClick={handleSubmit} className="me-2">
          Enviar
        </Button>
        <Button variant="secondary" onClick={handleClear}>
          Limpiar
        </Button>
      </div>
    </Container>
  );
}

export default Contact;
