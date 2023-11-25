import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints';

@Injectable()
export class NotionService {
  private notion: Client;

  constructor() {
    this.notion = new Client({ auth: process.env.NOTION_TOKEN });
  }

  async createPage(args: CreatePageParameters) {
    return await this.notion.pages.create(args);
  }
}
