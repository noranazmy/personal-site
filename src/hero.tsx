import './hero.css'

export function Hero() {
  return (
    <section id="hero" className="hero">
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
      <a className="button primary resume-button" href="/Resume.pdf" target="_blank">
        <span className="material-symbols-outlined button-icon">
          download
        </span>
        Resume <span className="label">PDF</span>
      </a>
    </section >
  );
}