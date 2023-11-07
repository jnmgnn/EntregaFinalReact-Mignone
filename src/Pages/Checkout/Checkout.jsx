import { useState } from "react";
import Swal from 'sweetalert2';
import { generateOrder } from "../../DB/Db";
import '../Checkout/Checkout.css';
import Layout from "../../Components/Layout"




const Checkout = () => {
  const [emailIsValid, setEmailIsValid] = useState(true)

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
  });

  const doCheckout = async e => {
    e.preventDefault();
    if (!emailIsValid) {
      Swal.fire({
        icon: "error",
        title: "El email no coincide :(",
      });
      return;
    }
    
    Swal.fire({
      title: `Su Orden ha sido generada! Codigo de seguimiento: ${await generateOrder(formData)}`
    });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Layout>
        <h1>Checkout</h1>
        <form action="">
          <label>Nombre:</label>
          <input
            type="text"
            onChange={handleInputChange}
            value={formData.name}
            name='name'
            required
          />
          <label>Apellido:</label>
          <input
            type="text"
            onChange={handleInputChange}
            value={formData.surname}
            name='surname'
            required
          />
          <label>Teléfono:</label>
          <input
            type="number"
            onChange={handleInputChange}
            value={formData.phone}
            name='phone'
            required
          />
          <label>Email:</label>
          <input
            type="email"
            onChange={handleInputChange}
            value={formData.email}
            name='email'
            required
          />
          <label>Repetir Email:</label>
          <input
            type="email"
            className={emailIsValid ? '' : 'error'}
            onBlur={e => setEmailIsValid(formData.email === e.target.value)}
            required
          />
        </form>
        <button onClick={doCheckout} type="submit">Enviar</button>
    </Layout>
    
  )
}

export default Checkout