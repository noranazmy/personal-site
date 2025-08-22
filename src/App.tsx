import './App.css'
import { Hero } from './hero';
import { Highlights } from './highlights';
import { Skills } from './skills';
import { Footer } from './footer';
import { Other } from './other';

export default function App() {
  return (
    <div className="app-page">
      <Hero />
      <Highlights />
      <Skills />
      <Other />
      <Footer />
    </div>
  );
}
