import "./footer.css";

export function Footer() {
  return (
    <section id="footer" className="footer full-bleed">
      <div className="footer-content full-bleed-content">
        <span className="paragraph-small">
          Created 2025 by Noran Azmy in React/TypeScript.
          Hosted on <a href="https://vercel.com/" target="_blank">Vercel</a>.
          Code on <a href="https://github.com/noranazmy/personal-site">Github</a>.
        </span>
        <div className="flags">
          <img className="flag" src="/palestine.png" alt="Palestine flag" />
          <img className="flag" src="/sudan.png" alt="Sudan flag" />
          <img className="flag" src="/drc.png" alt="DRC flag" />
          <span className="paragraph-small">
            I stand with freedom for Palestine, Sudan and the Congo.
          </span>
        </div>
      </div>
    </section>
  )
}
