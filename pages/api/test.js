export default function handler(req, res) {
  // req.body, req.method
  res.status(200).json({ message: 'Login Success' });
}
