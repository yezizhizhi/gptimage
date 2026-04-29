import { FeatureStrip } from "./components/feature-strip";
import { GeneratorPanel } from "./components/generator-panel";
import { HeroTitle } from "./components/hero-title";
import { Navbar } from "./components/navbar";

export default function HomePage() {
  return (
    <main className="editorial-page-shell">
      <div className="editorial-page-backdrop" />

      <div className="editorial-stage">
        <p className="editorial-kicker">
          <span className="editorial-kicker-index">01</span>
          <span>方向一：温暖 editorial</span>
        </p>

        <section className="editorial-hero-card">
          <div className="watercolor-sky" />
          <div className="landscape" />
          <div className="water-line" />
          <div className="shore-rock shore-rock-left" />
          <div className="shore-rock shore-rock-left-two" />
          <div className="shore-rock shore-rock-center" />
          <div className="shore-rock shore-rock-right" />
          <div className="shore-rock shore-rock-right-two" />
          <div className="sailboat sailboat-left">
            <span className="sail mast" />
            <span className="sail sail-main" />
            <span className="sail sail-small" />
          </div>
          <div className="sailboat sailboat-center">
            <span className="sail mast" />
            <span className="sail sail-main" />
            <span className="sail sail-small" />
          </div>
          <div className="paper-texture" />

          <Navbar />

          <div className="editorial-hero-content">
            <HeroTitle />
            <GeneratorPanel />
          </div>

          <div className="editorial-feature-wrap">
            <FeatureStrip />
          </div>
        </section>
      </div>
    </main>
  );
}
