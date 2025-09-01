import './skills.css'
import { additionalAccentColors, Bullet } from './shared';

const areasOfInterest = [
  "Web development",
  "Full-stack development",
  "UX design",
  "Accessibility",
  "System modeling",
  "Ethics of technology",
  "Academic research",
];

const skills = new Map([
  ["TypeScript", 90],
  ["Python", 15],
  ["Java", 85],
  ["Go", 15],
  ["HTML/CSS", 90],
  ["Angular", 95],
  ["React", 15],
  ["Dart", 50],
  ["SQL", 85],
]);

function ProgressBar({ title, progress }: { title: string; progress: Number }) {
  return (
    <div>
      <div className="progress-title">
        <div>{title}</div>
        <div>{progress.toString()}%</div>
      </div>
      <div className="progress-bar">
        <div style={{
          width: `${progress}%`
        }} className="progress">
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="skills heading-and-content">
      <h1>Technical skills</h1>
      <div className="areas-of-interest">
        {areasOfInterest.map((area, index) => (
          <div key={index} className="badge">
            <Bullet fillColor={additionalAccentColors[index % additionalAccentColors.length]} />
            <span >{area}</span>
          </div>
        ))}
      </div>
      <div className="progress-grid">
        {Array.from(skills.keys()).map((skill) => (
          <ProgressBar title={skill} progress={skills.get(skill)!} />
        ))}
      </div>
    </section>
  );
}