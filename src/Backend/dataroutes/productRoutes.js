const express = require('express')
const router = express.Router()
const products = require('../data/products')

// GET all products
router.get('/', (req, res) => {
  res.json(products)
})

// GET a single product by ID
router.get('/:id', (req, res) => {
  const { id } = req.params
  // const product = products.find(p => p.id === id)
  const product = Object.values(products).flat().find(p => p.id === parseInt(id))
  if (!product) {
    return res.status(404).json({ error: 'Product not found' })
  }
  res.json(product)
})

module.exports = router
