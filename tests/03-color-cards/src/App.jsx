
import { useState, useEffect } from 'react'

const CATEGORY_COLORS = {
  smartphones:      '#6366f1',
  laptops:          '#0ea5e9',
  fragrances:       '#ec4899',
  skincare:         '#22c55e',
  groceries:        '#f59e0b',
  'home-decoration':'#ef4444',
  furniture:        '#a855f7',
  tops:             '#14b8a6',
  'womens-dresses': '#f43f5e',
  'womens-shoes':   '#fb923c',
}

export default function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=12')
      .then(r => r.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p style={{ textAlign: 'center', marginTop: 60 }}>Loading…</p>
  if (error)   return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h2 style={{ marginBottom: 20 }}>Products</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
        }}
      >
        {products.map(product => {
          const color = CATEGORY_COLORS[product.category] ?? '#cbd5e1'

          const borderRadius = product.rating >= 4 ? '20px' : '4px'

          return (
            <div
              key={product.id}
              style={{
                backgroundColor: color,
                borderRadius,
                padding: 16,
                color: '#fff',
              }}
            >
              <h3 style={{ margin: '0 0 6px', fontSize: '0.95rem', fontWeight: 600 }}>
                {product.title}
              </h3>
              <p style={{ margin: '0 0 4px', opacity: 0.9 }}>${product.price}</p>
              <p style={{ margin: 0, opacity: 0.75, fontSize: '0.8rem' }}>
                ⭐ {product.rating} · {product.category}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
