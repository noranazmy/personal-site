import './reading.css'
import { books } from './books';

// TODO: Make this page responsive.
// TODO: Add search and filtering capabilities.
// TODO: Add more books.
// TODO: Add default book cover image.

function formatMonthYear(d: Date, locale: string = "en-GB") {
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

function RatingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
      <mask id="path-1-inside-1_165_230" fill="white">
        <path d="M9.50614 0.514991C8.64498 0.138754 6.9979 6.96954 6.9979 6.96954C6.9979 6.96954 0.69384 6.47625 0.167108 7.48791C-0.393066 8.56646 5.33409 12.1616 5.33409 12.1616C5.33409 12.1616 3.00142 19.0426 3.72882 19.4439C4.82408 20.0459 9.50614 15.6063 9.50614 15.6063C9.50614 15.6063 14.4641 19.8285 15.2835 19.4439C15.7015 19.2432 13.4775 12.3706 13.4775 12.3706C13.4775 12.3706 18.9288 8.91761 18.5944 8.01464C18.285 7.1702 12.006 7.28725 12.006 7.28725C12.006 7.28725 10.6349 1.01664 9.49778 0.523352L9.50614 0.514991Z" />
      </mask>
      <path d="M9.50614 0.514991C8.64498 0.138754 6.9979 6.96954 6.9979 6.96954C6.9979 6.96954 0.69384 6.47625 0.167108 7.48791C-0.393066 8.56646 5.33409 12.1616 5.33409 12.1616C5.33409 12.1616 3.00142 19.0426 3.72882 19.4439C4.82408 20.0459 9.50614 15.6063 9.50614 15.6063C9.50614 15.6063 14.4641 19.8285 15.2835 19.4439C15.7015 19.2432 13.4775 12.3706 13.4775 12.3706C13.4775 12.3706 18.9288 8.91761 18.5944 8.01464C18.285 7.1702 12.006 7.28725 12.006 7.28725C12.006 7.28725 10.6349 1.01664 9.49778 0.523352L9.50614 0.514991Z" fill="#E9FFB6" stroke="#1D1D1D" stroke-width="2" mask="url(#path-1-inside-1_165_230)" />
    </svg>
  );
}

function Rating({ stars }: { stars: Number }) {
  return (
    <div className="rating">
      <RatingIcon />
      <span className="label">{stars.toString()}</span>
    </div>);
}

export function Reading() {
  return (
    <div className="app-page">
      <section id="reading" className="reading full-bleed">
        <div className="reading-heading full-bleed-content">
          <h1>Reading log</h1>
          <p className="paragraph-large">
            A selection of books I've read recently, along with brief notes.
          </p>
        </div>
        <div className="card-list full-bleed-wide">
          {books.map(book => (
            <div className="card book-card">
              <img className="card book-cover" src={book.coverUrl} alt={book.coverUrl ? `${book.title} cover` : "No cover available"} />
              <div className="card-content">
                <div className="book-details">
                  <h2 className="card-title">{book.title}</h2>
                  <h3 className="card-subtitle">{book.author}</h3>
                  <div className="card-meta">
                    <Rating stars={4.5} />
                    &#8226;
                    <div className="label finished-on">Finished {formatMonthYear(book.finishedOn)}</div>
                  </div>
                </div>
                {/* This is safe because the HTML is authored by me and not user-generated. */}
                <div className="book-review" dangerouslySetInnerHTML={{ __html: book.reviewHtml }} />
                <div className="book-tags">
                  {book.tags.map(tag => (
                    <span key={tag} className="label">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section >
    </div>
  );
}


