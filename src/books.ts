export type Book = {
  id: string;
  title: string;
  author: string;
  tags: string[];
  finishedOn: Date;
  reviewHtml: string;
  coverUrl?: string;
};

export const books: Book[] = [
  {
    id: "lefebvre-ps-1974",
    title: "The Production of Space",
    author: "Henri Lefebvre",
    tags: ["critical theory", "urbanism", "Marxism"],
    finishedOn: new Date("2025-03-15"),
    coverUrl: "/bookcovers/lefebvre-1.jpg",
    reviewHtml: `
      <p>
        A foundational text for understanding how space is socially produced and actively shaped by capitalism.
        Lefebvre's style is dense and at times mystical, which makes this a challenging read — but also an
        incredibly formative one, well worth the effort.
      </p>
      <p>
        Recommended for anyone interested in the politics of urbanism, architecture, and social experiences of space.
      </p>
    `,
  },
];
