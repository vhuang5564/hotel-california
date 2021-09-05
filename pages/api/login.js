import cookie from 'cookie';
import prisma from '../../lib/prisma';
import { sign } from 'jsonwebtoken';
// import secret from '../../lib/secret';

export default async function loginHandler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user && user.password === password) {
      // console.log(secret)
      const claims = {
        sub: user.id,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        userEmail: user.email,
        isAdmin: user.isAdmin,
      };
      const jwt = sign(claims, process.env.SECRET, { expiresIn: '24h' });
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          sameSite: 'strict',
          maxAge: 60 * 60 * 24, // 1 day
          path: '/',
        })
      );

      res.status(200).json({ message: `Welcome back to the app ${jwt}` });
    } else {
      res.status(401).json({ message: 'Wrong credentials' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
