import './navbar.css';
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="navbar" className={`navbar full-bleed ${scrolled ? "scrolled" : ""}`}>
      <div className="navigation-bar full-bleed-content">
        <div className="site-title"><a href="#top">Noran Azmy</a></div>
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
