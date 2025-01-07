import Link from "next/link";


const Footer = () => {

    return (
        <footer>
            <div className="footer-content">
                <h2>Frameza</h2>
                <div className="footer-links">
                    <Link href="mailto:info@frameza.net">Contact Us</Link>
                    <Link href="/tos">Terms of Service</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;