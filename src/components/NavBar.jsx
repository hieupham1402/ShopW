import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/hieupm2-Photoroom.png" alt="Kush Lounge logo" />

        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button className="connect-wallet-btn">
            <span>Enter Lounge</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
