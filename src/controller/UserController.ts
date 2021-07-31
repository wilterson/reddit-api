import { Between, getRepository } from 'typeorm'
import { startOfDay, endOfDay } from 'date-fns';
import { Posts } from '../entity/Posts';
import { Request, Response } from 'express';

export default {
  async index(req: Request, res: Response) {
    let sort: string = req.query.sort as string;

    // Validate query string sort
    const validSorts: any = ['ups', 'comments'];
    if (!validSorts.includes(sort)) {
      sort = 'ups';
    }

    // Sort
    let order : object = {};
    order[sort] = 'DESC';

    let posts: any = await getRepository(Posts).find({
      select: ['author'],
      order
    });

    posts = posts.map(post => post.author);

    return res.json(posts);
  }
}