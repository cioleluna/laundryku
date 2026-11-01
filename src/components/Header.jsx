import React from 'react';
function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="LaundryKu beranda">
        <span className="brand-mark">L</span>
        <span>Laundry<span className="brand-light">Ku</span></span>
      </a>
      <nav className="top-nav" aria-label="Navigasi utama">
        <a className="nav-active" href="#pesanan">Dashboard</a>
        <a href="#daftar-pesanan">Pesanan</a>
      </nav>
      <div className="profile">
        <div className="profile-avatar">A</div>
        <div className="profile-text"><strong>Admin</strong><span>Pengelola Laundry</span></div>
      </div>
    </header>
  );
}

export default Header;