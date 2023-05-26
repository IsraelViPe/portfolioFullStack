import { useState, useRef } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import emailjs from '@emailjs/browser'
import './Contact.scss'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const { username, email, message } = formData
  const form = useRef()

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()

    emailjs
      .sendForm(
        'service_6diz5mn',
        'cantact_portfolio',
        form.current,
        'mEJNLOXeXe_g6UHRw'
      )
      .then(
        (result) => {
          console.log(result.text)
          setLoading(false)
          setFormData({ name: '', email: '', message: '' })
        },
        (error) => {
          console.log(error.text)
          setLoading(false)
          setFormData({ name: '', email: '', message: '' })
        }
      )
  }

  return (
    <section className="cont__contact" id="Contato">
      <h2 className="head-text">
        {' '}
        <span>{'<'}</span> contato <span>{'/>'}</span>{' '}
      </h2>
      <div>
        <FaPhoneAlt />
        <a href="tel:+55(31)98846-9230">+55(31)98846-9230</a>
      </div>
      <div>
        <BiMailSend />
        <a href="mailto:pereira.israel2070@gmail.com">
          pereira.israel2070@gmail.com
        </a>
      </div>
      <form onSubmit={handleSubmit} ref={form}>
        <div>
          <input
            type="text"
            placeholder="Nome:"
            name="username"
            value={username}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email :"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            placeholder="Sua Mensagem"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit">{!loading ? 'Enviar' : 'Enviando...'}</button>
      </form>
    </section>
  )
}
