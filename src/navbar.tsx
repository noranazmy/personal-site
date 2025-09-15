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
        <div className="site-title"><a href="/">Noran Azmy</a></div>
        <div className="navigation">
          <div>
            <a
              className='navigation-link'
              target="_blank"
              href="https://themindfulmuslim.com">
              Blog</a>
          </div>
        </div>
        <ul className="socials">
          <SocialLink
            href="https://www.linkedin.com/in/noranazmy/"
            imgSrc="/linkedin.svg"
            alt="LinkedIn"
          />
        </ul>
      </div>
    </section>
  )
}
