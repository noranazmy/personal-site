import './hero.css'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heading">
        <img src="/Photo.jpg" alt="Personal photo" className="hero-image" />
        <div className="display-2">
          Software engineer and AI ethics researcher
        </div>
      </div>
      <p className="paragraph-largest">
        I am a senior full-stack software engineer.
        My focus is on product engineering, UI/UX design, tech ethics, and politics.
      </p>
    </section >
  );
}