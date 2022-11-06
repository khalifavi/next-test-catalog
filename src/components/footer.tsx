export default function Footer() {
    return (
        <footer className="footer">
            <div className="link-wrapper">
                <ul className="link-block">
                    <li className="list-header">Layanan Pelanggan</li>
                    <li><a href="">Berjualan</a></li>
                    <li><a href="">Pengaduan</a></li>
                </ul>
                <ul className="link-block">
                    <li className="list-header">Jelajah Katalog</li>
                    <li><a href="">Karir</a></li>
                    <li><a href="">Bisnis Kami</a></li>
                </ul>
                <ul className="link-block">
                    <li className="list-header">Ikuti Kami</li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Youtube</a></li>
                </ul>
            </div>
            <hr />
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                &copy; Khalifa 2022. Hak Cipta tidak Dilindungi.
            </a>
        </footer>
    );
}
