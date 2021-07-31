import fetch from 'node-fetch';
import { getRepository } from 'typeorm';
import { Posts } from '../entity/Posts';

export default {
  key: 'FetchRedditPosts',
  async handle() {
    // Clear posts from yesterday to keep only those marked as 'HOT' today;
    await getRepository(Posts).clear();

    const baseUrl = process.env.REDDIT_API_URI;

    const response: any = await fetch(`${baseUrl}/r/artificial/hot`);

    const { data } = await response.json();

    data.children.forEach(async ({ data }) => {
      // Convert created_utc timestamp to date
      let created_at : any = new Date(data.created_utc * 1000);
      created_at = created_at.toISOString();

      await getRepository(Posts).save({
        id: data.id,
        title: data.title,
        author: data.author_fullname,
        ups: data.ups,
        comments: data.num_comments,
        created_at: created_at,
      });
    });
  }
}