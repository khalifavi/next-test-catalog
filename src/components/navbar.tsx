export default function Navbar() {

    return <header className="catalog-container-wrapper">
        <div className="navbar-wrapper">
            <div className="container navbar">
                <div className="nav-left">
                    <ul>
                        <li><a>Download</a></li>
                        <li><a>Tentang Kami</a></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><a>Daftar</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="search-wrapper">
            <div className="container">
                <a href="/"><h1 className='title'>Catalog Demo</h1></a>
            </div>
        </div>
    </header>;
}