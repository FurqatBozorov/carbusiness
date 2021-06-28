

 function Header(){
    return(
        <div class="container">
        <nav className="navbar asosiy-nav navbar-expand-sm  navbar-primary justify-content-center">
            <ul className="navbar-nav mx-4">
                <li className="nav-item">
                <a class="nav-link" href="/">All Cars</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="/soldcars">Sold Cars</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="/cashflow">Cash Flow</a>
                </li>
                <li className="nav-item">
                <a class="nav-link" href="/balance"> Balance</a>
                </li>
            </ul>

        </nav>
            
        </div>
    )
}

export default Header;