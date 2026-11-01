
import React, { useState, useEffect } from 'react';

function CustomerAPI() {
  // Menyimpan data pelanggan dari API
  const [customers, setCustomers] = useState([]);

  // Menyimpan kondisi loading
  const [loading, setLoading] = useState(true);

  // Menyimpan pesan error
  const [error, setError] = useState('');

  // Fungsi untuk mengambil data pelanggan
  const fetchCustomers = async () => {
    setLoading(true);
    setError('');

    try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      if (!response.ok) {
        throw new Error('Gagal mengambil data pelanggan.');
      }

      const data = await response.json();

      setCustomers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Mengambil data ketika komponen pertama kali ditampilkan
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <section className="customer-api">
      <div className="customer-api-header">
        <div>
          <p className="eyebrow">DATA EKSTERNAL</p>
          <h2>Referensi Pelanggan</h2>
          <p>Data pelanggan contoh dari API.</p>
        </div>
      </div>

      {/* Kondisi loading */}
      {loading && (
        <p>Memuat data pelanggan...</p>
      )}

      {/* Kondisi error */}
      {!loading && error && (
        <div>
          <p>{error}</p>
          <button onClick={fetchCustomers}>
            Coba Lagi
          </button>
        </div>
      )}

      {/* Kondisi success */}
      {!loading && !error && (
        <div className="customer-list">
          {customers.map((customer) => (
            <div className="customer-card" key={customer.id}>
              <div>
                <h3>{customer.name}</h3>
                <p>{customer.email}</p>
                <p>{customer.phone}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default CustomerAPI;
