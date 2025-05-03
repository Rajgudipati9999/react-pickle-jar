const express = require('express')
const cors = require('cors')
const productRoutes = require('./dataroutes/productRoutes')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/products', productRoutes)

app.post('/api/checkout', (req, res) => {
  const { productId } = req.body
  if (!productId) {
    return res.status(400).json({ error: 'Product ID required' })
  }
  res.json({ message: `Order placed for product ${productId}` })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
