import React, { useState } from 'react';
import Header from './components/Header.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import OrderForm from './components/OrderForm.jsx';
import OrderList from './components/OrderList.jsx';
import './App.css';

const initialOrders = [
  {
    id: 1,
    customer: 'Nadia Putri',
    service: 'Cuci + Setrika',
    weight: 3.5,
    total: 35000,
    status: 'Diproses',
    date: '01 Nov 2026',
  },
  {
    id: 2,
    customer: 'Rizky Pratama',
    service: 'Cuci Kering',
    weight: 2,
    total: 16000,
    status: 'Siap Diambil',
    date: '01 Nov 2026',
  },
  {
    id: 3,
    customer: 'Alya Safitri',
    service: 'Setrika',
    weight: 4,
    total: 20000,
    status: 'Selesai',
    date: '31 Okt 2026',
  },
];

function App() {
  const [orders, setOrders] = useState(initialOrders);

  const addOrder = (newOrder) => {
    setOrders((currentOrders) => [
      { ...newOrder, id: Date.now(), date: new Date().toLocaleDateString('id-ID', {
        day: '2-digit', month: 'short', year: 'numeric'
      }) },
      ...currentOrders,
    ]);
  };

  const deleteOrder = (orderId) => {
    setOrders((currentOrders) => currentOrders.filter((order) => order.id !== orderId));
  };

  const totalOrders = orders.length;
  const activeOrders = orders.filter((order) => order.status === 'Diproses').length;
  const completedOrders = orders.filter((order) => order.status === 'Selesai').length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <section className="welcome-section">
          <div>
            <p className="eyebrow">RINGKASAN HARI INI</p>
            <h1>Kelola laundry jadi lebih mudah.</h1>
            <p className="welcome-copy">Pantau pesanan, pelanggan, dan proses laundry dalam satu tempat.</p>
          </div>
          <div className="date-pill">✦ &nbsp; Minggu, 1 November 2026</div>
        </section>

        <section className="summary-grid" aria-label="Ringkasan pesanan">
          <SummaryCard label="Total Pesanan" value={totalOrders} note="Semua pesanan tercatat" icon="▤" tone="blue" />
          <SummaryCard label="Sedang Diproses" value={activeOrders} note="Pesanan dalam pengerjaan" icon="◷" tone="orange" />
          <SummaryCard label="Pesanan Selesai" value={completedOrders} note="Siap untuk pelanggan" icon="✓" tone="green" />
          <SummaryCard label="Total Pendapatan" value={`Rp ${totalRevenue.toLocaleString('id-ID')}`} note="Akumulasi dari pesanan" icon="↗" tone="purple" />
        </section>

        <section className="workspace-grid">
          <div className="panel form-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">PESANAN BARU</p>
                <h2>Tambah pesanan</h2>
              </div>
              <span className="heading-icon">＋</span>
            </div>
            <OrderForm onAddOrder={addOrder} />
          </div>

          <div className="panel list-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">DATA LAUNDRY</p>
                <h2>Daftar pesanan</h2>
              </div>
              <span className="count-pill">{totalOrders} pesanan</span>
            </div>
            <OrderList orders={orders} onDeleteOrder={deleteOrder} />
          </div>
        </section>
        <footer className="footer-note">LaundryKu <span>•</span> Kelola laundry dengan lebih praktis.</footer>
      </main>
    </div>
  );
}

export default App;