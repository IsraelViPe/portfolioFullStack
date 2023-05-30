import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'
import './Contact.scss'

export default function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [sendedForm, setSendedForm] = useState(false)

  const { username, email, message } = formData
  const form = useRef()

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Object.values(formData).some((item) => item === '')) {
      console.log(Object.values(formData))
      alert('Preencha todos os campos e depois clicke em enviar.')
      return
    }

    setLoading(true)
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
          setFormData({ username: '', email: '', message: '' })
          if (result.text === 'OK') setSendedForm(true)
        },
        (error) => {
          console.log(error.text)
          setLoading(false)
          setFormData({ username: '', email: '', message: '' })
        }
      )
  }

  return (
    <section className="cont__contact" id="Contato">
      <h2 className="head-text">
        {' '}
        <span>{'</'}</span> contato <span>{'>'}</span>{' '}
      </h2>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex_column"
      >
        <div className="flex_row">
          <a className="contact__card" href="tel:+55(31)98846-9230">
            <FaPhoneAlt />
            <span>+55(31)98846-9230</span>
          </a>
          <a
            className="contact__card"
            href="mailto:pereira.israel2070@gmail.com"
          >
            <MdAlternateEmail />
            <span>pereira.israel2070@gmail.com</span>
          </a>
        </div>
        {sendedForm ? (
          <div className="contact__thankyou-message">
            <h2>
              {' '}
              <span>{'</'}</span> obrigado por entrar em contato{' '}
              <span>{'>'}</span>
            </h2>
            <motion.p
              whileInView={{
                opacity: [0.7, 0.5, 0, 1],
                rotate: [0, 90],
                transition: {
                  duration: 0.5,
                  delay: 0.3
                }
              }}
            >
              {';)'}
            </motion.p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit} ref={form}>
            <h3>{'escreva sua mensagem  ; )'}</h3>
            <br />
            <div>
              <input
                type="text"
                placeholder="nome:"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="email :"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                placeholder="sua mensagem"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="submit">{!loading ? 'enviar' : 'enviando...'}</button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
