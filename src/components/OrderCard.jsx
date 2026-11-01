import React from 'react';
function OrderCard({ order, onDelete }) {
  const statusClass = order.status.toLowerCase().replaceAll(' ', '-');

  return (
    <article className="order-card">
      <div className="order-card-top">
        <div>
          <p className="order-id">ORDER #{String(order.id).slice(-6)}</p>
          <h3>{order.customer}</h3>
        </div>
        <span className={`status-badge ${statusClass}`}>{order.status}</span>
      </div>
      <div className="order-details">
        <span>{order.service}</span>
        <span>{order.weight} kg</span>
        <strong>Rp {order.total.toLocaleString('id-ID')}</strong>
      </div>
      <div className="order-card-bottom">
        <span>{order.date}</span>
        <button className="delete-button" type="button" onClick={() => onDelete(order.id)} aria-label={`Hapus pesanan ${order.customer}`}>Hapus</button>
      </div>
    </article>
  );
}

export default OrderCard;