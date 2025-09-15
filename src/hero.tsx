import './hero.css'

export function Hero() {
  return (
    <section id="hero" className="hero heading-and-content">
      <div className="heading">
        <img src="/Photo.jpg" alt="Personal photo" className="hero-image" />
        <div className="hero-text">
          <div className="display-2">
            Software engineer and AI ethics researcher
          </div>
          <p className="paragraph-large">
            I am a senior full-stack software engineer with a focus on
            product engineering, UI/UX design, tech ethics, and politics.
          </p>
        </div>
        <a className="button primary resume-button" href="/Resume.pdf" target="_blank">
          <span className="material-symbols-outlined button-icon horizontal_flip">
            file_open
          </span>
          Resume <span className="label">PDF</span>
        </a>
      </div>
    </section >
  );
}