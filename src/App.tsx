import './App.css'
import { Hero } from './hero';
import { Highlights } from './highlights';
import { Skills } from './skills';
import { Footer } from './footer';
import { Other } from './other';
import { Languages } from './languages';

export default function App() {
  return (
    <div className="app-page">
      <Hero />
      <Highlights />
      <Skills />
      <Languages />
      <Other />
      <Footer />
    </div>
  );
}
