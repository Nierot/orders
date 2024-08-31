import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  // Find all regular stock items
  const products = await db.product.findMany({
    where: {
      regularItem: true
    }
  })

  return { products };
}) satisfies PageServerLoad;