import { useState } from 'react'

const PRODUCTS = [
  'Wireless Headphones',
  'Mechanical Keyboard',
  'USB-C Hub',
  'Webcam HD',
  'Monitor Stand',
  'Mouse Pad XL',
  'Laptop Stand',
  'Blue Light Glasses',
  'Desk Lamp',
  'Cable Organiser',
]

export default function App() {
  const [query, setQuery] = useState('')

  const filtered = PRODUCTS.filter(p => p.toLowerCase().includes(query.toLowerCase()))

  return (
    <div style={{ maxWidth: 420, margin: '48px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ marginBottom: 16 }}>Product Search</h2>

      <input
        placeholder="Search products…"
        onChange={e => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '8px 12px',
          fontSize: '1rem',
          boxSizing: 'border-box',
          marginBottom: 16,
          border: '1px solid #d1d5db',
          borderRadius: 6,
        }}
      />

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {filtered.map(product => (
          <li
            key={product}
            style={{
              padding: '8px 4px',
              borderBottom: '1px solid #f3f4f6',
              fontSize: '0.95rem',
            }}
          >
            {product}
          </li>
        ))}
      </ul>

      <p style={{ color: '#9ca3af', marginTop: 12, fontSize: '0.875rem' }}>
        {filtered.length} result(s)
      </p>
    </div>
  )
}
