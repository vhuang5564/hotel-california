/* eslint-disable import/no-anonymous-default-export */
import prisma from "../../../lib/prisma";

export default async(req, res) => {
    const data = JSON.parse(req.body)

    const createdReview = await prisma.review.create({
        data
    })
    
    res.json(createdReview)
}