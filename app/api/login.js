import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Validate username/password (use a real database in production)
    if (username === 'admin' && password === 'password') {
      const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });

      // Set the JWT as an HTTP-only cookie
      res.setHeader('Set-Cookie', `jwt=${token}; HttpOnly; Path=/; Secure; SameSite=Strict`);
      return res.status(200).json({ message: 'Logged in' });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(405).json({ message: 'Method not allowed' });
}