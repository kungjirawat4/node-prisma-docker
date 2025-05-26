import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

// ดึงผู้ใช้ทั้งหมด
router.get('/', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

// สร้างผู้ใช้ใหม่
router.post('/', async (req, res) => {
  const { name, email } = req.body
  const user = await prisma.user.create({ data: { name, email } })
  res.json(user)
})

export default router
