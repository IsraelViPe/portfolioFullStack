import styles from './style.module.scss'

export default function About() {
  return (
    <section className={styles['container']}>
      <div>
        <p>Seja bem Vindo !</p>
        <h2>Eu sou desenvolvedor Web Full-Stack</h2>
        <a href="#contact">Entre em Contato</a>
      </div>
    </section>
  )
}
