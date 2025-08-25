import './languages.css'

const languages = new Map([
  ["English", "C2"],
  ["Arabic", "C2"],
  ["German", "B1"],
  ["Spanish", "A2"],
]);

export function Languages() {
  return (
    <section id="languages" className="languages heading-and-content">
      <h1>Languages</h1>
      <div className="language-badges">
        {Array.from(languages.keys()).map((language, index) => (
          <div key={index} className="language-badge">
            <span className="language-level">{languages.get(language)}</span>
            <span >{language}</span>
          </div>
        ))}
      </div>
    </section>
  );
}