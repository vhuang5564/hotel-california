import prisma from '../../../lib/prisma';

export default async function requestHandler(req, res) {
  // console.log(req.body);
  
  try {
    const data = req.body;
    const createdRequest = await prisma.request.create({
      data,
    });
    res.status(201).json(createdRequest)
  } catch(e) {
    res.status(500);
    res.json({error: "Sorry unable to save request to database"})
  } finally {
    await prisma.$disconnect();
  }
 
};