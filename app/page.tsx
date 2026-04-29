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
          <div className="editorial-watercolor editorial-watercolor-top-right" />
          <div className="editorial-watercolor editorial-watercolor-left-bottom" />
          <div className="editorial-watercolor editorial-watercolor-bottom-band" />
          <div className="editorial-horizon-fade" />

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
