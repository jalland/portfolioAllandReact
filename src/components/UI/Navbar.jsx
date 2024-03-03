export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <div className="container-fluid">
        <h1 className="navbar-brand text-light" style={{ fontSize: '50px' }}>Joshua Alland </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontSize: '32px' }}>
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}