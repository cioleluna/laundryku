import OrderCard from './OrderCard.jsx';
import React from 'react';
function OrderList({ orders, onDeleteOrder }) {
  if (orders.length === 0) {
    return <p className="empty-state">Belum ada data pesanan laundry.</p>;
  }

  return (
    <div className="order-list" id="daftar-pesanan">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} onDelete={onDeleteOrder} />
      ))}
    </div>
  );
}

export default OrderList;