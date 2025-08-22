import './App.css'
import { NavBar } from './navbar';
import { Hero } from './hero';
import { Highlights } from './highlights';
import { Skills } from './skills';
import { Footer } from './footer';
import { Other } from './other';

export default function App() {
  return (
    <div className="app-page">
      <NavBar />
      <Hero />
      <Highlights />
      <Skills />
      <Other />
      <Footer />
    </div>
  );
}
