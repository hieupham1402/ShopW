import { footerLinks } from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>Kush Lounge - Premium Strains - Smoke Culture - 420 Drops</p>
                <img src="/hieupm2-Photoroom.png" alt="Kush Lounge logo" />
            </div>

            <hr />

            <div className="links">
                <p>Copyright (c) 2025 Kush Lounge. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({ label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
