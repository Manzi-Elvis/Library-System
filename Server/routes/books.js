const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const { auth, adminOnly } = require('../middleware/auth');
// Create book (admin)
router.post('/', auth, adminOnly, async (req, res) => {
      try {
const book = await Book.create({ ...req.body, createdBy: req.user._id });
res.json(book);
} catch (err) { res.status(500).json({ message: err.message }); }
});
// Update book (admin)
router.put('/:id', auth, adminOnly, async (req, res) => {
try {
const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new:
true });
res.json(book);
} catch (err) { res.status(500).json({ message: err.message }); }
});
// Delete book (admin)
router.delete('/:id', auth, adminOnly, async (req, res) => {
try {
await Book.findByIdAndDelete(req.params.id);
res.json({ message: 'Deleted' });
} catch (err) { res.status(500).json({ message: err.message }); }
});
// Read books (everyone) with pagination and search
// Query params: ?page=1&limit=10&search=keyword
router.get('/', auth, async (req, res) => {
try {
const page = Math.max(1, parseInt(req.query.page || '1'));
const limit = Math.max(1, parseInt(req.query.limit || '10'));
const search = req.query.search || '';
const filter = search
? { $or: [ { title: new RegExp(search, 'i') }, { author: new
RegExp(search, 'i') }, { description: new RegExp(search, 'i') } ] }
: {};
const total = await Book.countDocuments(filter);
const books = await Book.find(filter)
.sort({ createdAt: -1 })
.skip((page - 1) * limit)
.limit(limit)
.lean();
res.json({ page, limit, total, pages: Math.ceil(total / limit), data:
books });
} catch (err) { res.status(500).json({ message: err.message }); }
});

// Single book
router.get('/:id', auth, async (req, res) => {
try {
const book = await Book.findById(req.params.id);
if (!book) return res.status(404).json({ message: 'Not found' });
res.json(book);
} catch (err) { res.status(500).json({ message: err.message }); }
});
module.exports = router;