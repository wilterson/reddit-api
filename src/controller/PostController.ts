import { Between, getRepository } from 'typeorm'
import { startOfDay, endOfDay } from 'date-fns';
import { Posts } from '../entity/Posts';
import { Request, Response } from 'express';

export default {
  async index(req: Request, res: Response) {
    let sort: string = req.query.sort as string;
    let date_start: string = req.query.date_start as string;
    let date_end: string = req.query.date_end as string;

    if (!date_start || !date_end) {
      return res.status(400).json({ error: 'You must specify a valid date range' });
    }

    // Validate query string sort
    const validSorts: any = ['ups', 'comments'];
    if (!validSorts.includes(sort)) {
      sort = 'ups';
    }

    // Sort
    let order : object = {};
    order[sort] = 'DESC';

    // Date Between
    let start: Date = startOfDay(new Date(date_start));
    let end: Date = endOfDay(new Date(date_end));

    const posts = await getRepository(Posts).find({
      where: { created_at: Between(start, end) },
      order
    });

    return res.json(posts);
  }
}