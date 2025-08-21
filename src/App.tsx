import './App.css'
import { NavBar } from './navbar';
import { Hero } from './hero';
import { Highlights } from './highlights';
import { Skills } from './skills';
import { Footer } from './footer';
import { Other } from './other';

export default function App() {
  return (
    <div>
      <div className="content">
        <NavBar />
        <Hero />
        <Highlights />
        <Skills />
        <Other />
        <Footer />
      </div>
    </div>
  );
}
