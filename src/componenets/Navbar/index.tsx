import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          width={50}
          height={50}
          src="data:image/png;base64,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"
          className={styles.brand}
        />
        <span className={styles.username}>Sena Özyiğit</span>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Tech Stack</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
      <div className={styles.socialIcons}>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
