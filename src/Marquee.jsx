/**
 * Banner que se desplaza sin fin.
 * Truco: se renderizan dos copias idénticas del contenido una tras otra
 * y se anima el contenedor de 0 a -50%. Al llegar a -50% la segunda copia
 * ocupa exactamente el lugar de la primera, así que el reinicio no se nota.
 */
export default function Marquee({
  text = 'Hola mundo',
  repeat = 8,
  speed = 20, // segundos por vuelta (más alto = más lento)
  reverse = false,
  variant = 'solid',
}) {
  const items = Array.from({ length: repeat }, (_, i) => (
    <span className="marquee__item" key={i}>
      {text}
      <span className="marquee__dot" aria-hidden="true">✦</span>
    </span>
  ))

  return (
    <div className={`marquee marquee--${variant}`} role="marquee" aria-label={text}>
      <div
        className="marquee__track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="marquee__group">{items}</div>
        <div className="marquee__group" aria-hidden="true">{items}</div>
      </div>
    </div>
  )
}
