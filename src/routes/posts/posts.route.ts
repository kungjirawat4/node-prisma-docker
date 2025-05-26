import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

// GET /api/posts - ดึงโพสต์ทั้งหมด
router.get('/', async (req, res) => {
  try {
    const posts = await prisma.post.findMany()
    res.json(posts)
  } catch (error) {
    res.status(500).send(error)
  }
})

// GET /api/posts/:id - ดึงโพสต์ตาม ID
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const post = await prisma.post.findUnique({ where: { id } })
    res.json(post)
  } catch (error) {
    res.status(500).send(error)
  }
})

// POST /api/posts - สร้างโพสต์ใหม่
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body
    const newPost = await prisma.post.create({ data: { title, content } })
    res.json(newPost)
  } catch (error) {
    res.status(500).send(error)
  }
})

// PUT /api/posts/:id - อัปเดตโพสต์
router.put('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { title, content } = req.body
    const updated = await prisma.post.update({
      where: { id },
      data: { title, content },
    })
    res.json(updated)
  } catch (error) {
    res.status(500).send(error)
  }
})

// DELETE /api/posts/:id - ลบโพสต์
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const deleted = await prisma.post.delete({ where: { id } })
    res.json(deleted)
  } catch (error) {
    res.status(500).send(error)
  }
})

export default router
