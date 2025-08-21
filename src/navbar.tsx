import './navbar.css';

function SocialLink({ href, imgSrc, alt }: { href: string; imgSrc: string; alt: string }) {
  return (
    <li className="social">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} loading="lazy" alt={alt} />
      </a>
    </li>
  );
}

export function NavBar() {
  return (
    <section id="navbar" className="navbar">
      <div className="navigation-bar">
        <div className="site-title"><a href="/">Noran Azmy</a></div>
        {/* TODO: Add the right navigation links. */}
        <div className="navigation">
        </div>
        <ul className="socials">
          <SocialLink
            href="https://www.instagram.com/noran.azmy/"
            imgSrc="/instagram.png"
            alt="Instagram"
          />
          <SocialLink
            href="https://www.linkedin.com/in/noranazmy/"
            imgSrc="/linkedin.png"
            alt="LinkedIn"
          />
        </ul>
      </div>
    </section>
  )
}
