
import React, { useState } from 'react';
function OrderForm({ onAddOrder }) {
  const [customer, setCustomer] = useState('');
  const [service, setService] = useState('Cuci + Setrika');
  const [weight, setWeight] = useState('');
  const [status, setStatus] = useState('Diproses');

  const prices = {
    'Cuci + Setrika': 10000,
    'Cuci Kering': 8000,
    'Setrika': 5000,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedWeight = Number(weight);

    if (!customer.trim() || !parsedWeight || parsedWeight <= 0) return;

    onAddOrder({
      customer: customer.trim(),
      service,
      weight: parsedWeight,
      total: parsedWeight * prices[service],
      status,
    });

    setCustomer('');
    setService('Cuci + Setrika');
    setWeight('');
    setStatus('Diproses');
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <label htmlFor="customer">Nama pelanggan</label>
      <input
        id="customer"
        type="text"
        placeholder="Contoh: Dinda Maharani"
        value={customer}
        onChange={(event) => setCustomer(event.target.value)}
        required
      />

      <label htmlFor="service">Jenis layanan</label>
      <select id="service" value={service} onChange={(event) => setService(event.target.value)}>
        <option>Cuci + Setrika</option>
        <option>Cuci Kering</option>
        <option>Setrika</option>
      </select>

      <div className="form-row">
        <div>
          <label htmlFor="weight">Berat (kg)</label>
          <input
            id="weight"
            type="number"
            min="0.1"
            step="0.1"
            placeholder="Mis. 3"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select id="status" value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>Diproses</option>
            <option>Siap Diambil</option>
            <option>Selesai</option>
          </select>
        </div>
      </div>

      <div className="price-hint">
        <span>Harga per kg</span>
        <strong>Rp {prices[service].toLocaleString('id-ID')}</strong>
      </div>
      <button className="primary-button" type="submit">＋ Tambah Pesanan</button>
    </form>
  );
}

export default OrderForm;