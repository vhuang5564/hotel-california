import prisma from '../../../lib/prisma';

export default async function requestUpdateHandler(req, res) {
  
  try {
    const data = req.body;
    const updatedRequest = await prisma.request.update({
      where: {
        id: data.id,
      },
      data: {
        active: false,
      }
    });
    res.status(201).json(updatedRequest)
  } catch(e) {
    res.status(500);
    res.json({error: "Sorry unable to update the request status"})
  } finally {
    await prisma.$disconnect();
  }
 
};