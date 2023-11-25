import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

@Injectable()
export class ContentFetchService {
  private notion: Client;

  constructor() {
    this.notion = new Client({ auth: process.env.NOTION_TOKEN });
  }

  async fetchBlock(block_id: string) {
    const data = await this.notion.blocks.children.list({ block_id });

    return data.results as BlockObjectResponse[];
  }

  async fetchDatabase(block_id: string) {
    return await this.notion.databases.query({
      database_id: block_id,
    });
  }
}
