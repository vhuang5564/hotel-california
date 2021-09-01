/* eslint-disable import/no-anonymous-default-export */
import prisma from '../../../lib/prisma';

export default async function reviewHandler(req, res) {
    
  const data = req.body;

  const createdReview = await prisma.review.create({
    data,
  });
 
  res.status(201).json(createdReview)
};
