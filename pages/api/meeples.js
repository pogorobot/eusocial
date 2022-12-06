import prisma from '../../lib/prisma';

// POST /api/meeples
export default async function handle(req, res) {
  const { name, hunger, thirst } = req.body;

  const result = await prisma.meeple.create({
    data: {
      name: name,
      hunger: hunger,
      thirst: thirst,
    },
  });
  res.json(result);
}