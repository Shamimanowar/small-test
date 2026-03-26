/**
 * TEST 2 — Search Filter Component
 *
 * Task: The search input isn't working correctly. Find and fix all the bugs.
 * Expected behaviour:
 *   - Typing in the input filters the product list in real time
 *   - The filter should be case-insensitive (e.g. "wireless" matches "Wireless Headphones")
 *   - No console warnings
 */

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

  const filtered = PRODUCTS.filter(p => p.includes(query))

  return (
    <div style={{ maxWidth: 420, margin: '48px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ marginBottom: 16 }}>Product Search</h2>

      <input
        placeholder="Search products…"
        onChange={setQuery}
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
