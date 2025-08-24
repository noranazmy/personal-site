import './other.css'

export function Other() {
  return (
    <section id="other" className="other heading-and-content">
      <h1>Etcetera</h1>
      <div className="content">
        <p>
          I write personal reflections on faith and politics on my blog, <a target="_blank" href="http://themindfulmuslim.com">The Mindful Muslim</a>.
        </p>
        <div>
          <div className="paragraph-with-icon">
            <img src="/palestine.png" alt="Palestine flag" />
            <div>
              <p>
                I stand with a Free Palestine &mdash; freedom, dignity, and equal rights for everyone between the river and the sea.
              </p>
            </div>
          </div>
          <div className="paragraph-with-icon">
            <div>
              <img src="/sudan.png" alt="Sudan flag" />
              <img src="/drc.png" alt="DRC flag" />
            </div>
            <div>
              <p>
                I stand with the struggle of Sudan and the Congo against oppression and violence waged for profit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}


