import './highlights.css'

export function Highlights() {
  return (
    <section id="highlights" className="highlights">
      <div className="highlights-grid">
        <div>
          <h2>AI Ethics</h2>
          <p>2024 &mdash; Current</p>
        </div>
        <div>
          <p>
            I am currently working on a Masters degree in <a href="https://www.pace.cam.ac.uk/courses/mst-ai-ethics-and-society" target="_blank">AI Ethics and Society</a> at the University of Cambridge.
            I am interested in the relationship between AI and capitalism, labor, resistance, and community building.
          </p>
        </div>
        <div>
          <h2>Software Engineering</h2>
          <p>2016 &mdash; Current</p>
          <a className="button" href="#skills">
            <span className="material-symbols-outlined">
              arrow_downward
            </span>
            See skills
          </a>
        </div>
        <div>
          <p>
            I am a senior full-stack software engineer and frontend TL with 9 years of experience.
            My aim is to design and build digital spaces that are user-friendly, accessible, reliable, and performant.
          </p>
        </div>
        <div>
          <h2>Computer Science</h2>
          <p>2004 &mdash; 2016</p>
          <a className="button" href="https://www.researchgate.net/profile/Noran-Azmy" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined">
              arrow_outward
            </span>
            View publications
          </a>
        </div>
        <div>
          <p>
            I have a PhD in formal verification and automated theorem proving.
            In my Masters, I looked into&nbsp;
            <a target="_blank" href="https://link.springer.com/chapter/10.1007/978-3-642-38574-2_7">
              improving the efficiency of automated theorem provers
            </a>&nbsp;
            by preprocessing the input problem.
            In my PhD, I used an interactive theorem prover to show that for a certain class of peer-to-peer protocols,&nbsp;
            <a target="_blank" href="https://link.springer.com/chapter/10.1007/978-3-319-33600-8_5">
              successful node lookup is guaranteed
            </a>&nbsp;
            when constraints are met.
          </p>
        </div>
      </div>
    </section >
  );
}