import express from 'express'
import cors from 'cors'
import userRoutes from './routes/user/user.routes'
import postRoutes from './routes/posts/posts.route'
const app = express()

// ✅ เปิด CORS ให้กับทุก origin หรือเฉพาะ 3000 ก็ได้
app.use(cors({
  origin: '*', // หรือใช้ '*' เพื่อเปิดทุกที่
}))

app.use(express.json())

app.get('/', (_req, res) => res.send('Hello from API'))

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

app.listen(4444, () => {
  console.log('API running at http://localhost:4444')
})
