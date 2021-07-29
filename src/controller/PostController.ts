import {getRepository} from 'typeorm'
import { Posts } from '../entity/Posts';
import { Request, Response } from 'express';

export const listPosts = async (req: Request, res: Response) => {
  const posts = await getRepository(Posts).find();

  return res.json(posts);
}