import Link from "next/link";

const navItems = ["功能", "模板库", "案例", "定价", "帮助中心"];

export function Navbar() {
  return (
    <header className="editorial-navbar">
      <Link href="/" className="editorial-brand" aria-label="GPT Image 2">
        <span className="editorial-brand-icon" />
        <span className="editorial-brand-text">GPT Image 2</span>
      </Link>

      <nav className="editorial-nav-links" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item} href="#!" className="editorial-nav-link">
            {item}
          </a>
        ))}
      </nav>

      <div className="editorial-nav-actions">
        <a href="#!" className="editorial-login">
          登录
        </a>
        <a href="#!" className="editorial-cta">
          免费体验
        </a>
      </div>
    </header>
  );
}
