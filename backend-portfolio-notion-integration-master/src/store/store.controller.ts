import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NotionService } from 'src/common/services/notion.service';

import { CreateStoreDto } from './dto/create-store.dto';
import { StoreService } from './store.service';

@Controller('/projects')
export class StoreController {
  constructor(
    private storeService: StoreService,
    private notionService: NotionService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async Create(@Body() { url, category, date }: CreateStoreDto) {
    await this.storeService.init(url);

    const title = await this.storeService.getContentAttribute(
      'meta[property="og:title"]',
    );
    const description = await this.storeService.getContentAttribute(
      'meta[property="og:description"]',
    );
    const image = await this.storeService.getContentAttribute(
      'meta[property="og:image"]',
    );

    const database_ids = process.env.ARTICLES_BLOCKS_ID;

    for (const database_id of database_ids.split(',')) {
      await this.notionService.createPage({
        parent: { database_id },
        icon: {
          external: {
            url: 'https://miro.medium.com/v2/1*m-R_BkNf1Qjr1YbyOIJY2w.png',
          },
        },
        properties: {
          Name: { title: [{ text: { content: title } }] },
          Brief: { rich_text: [{ text: { content: description } }] },
          Source: { multi_select: [{ name: 'Medium' }] },
          'Created At': { date: { start: date.slice(0, 10) } },
          Category: { multi_select: category.map((name) => ({ name })) },
        },
        children: [
          { heading_1: { rich_text: [{ text: { content: 'Link' } }] } },
          { bookmark: { url } },
          { paragraph: { rich_text: [] } },
          { paragraph: { rich_text: [] } },
          { paragraph: { rich_text: [] } },
          { paragraph: { rich_text: [] } },
          { paragraph: { rich_text: [] } },
          { paragraph: { rich_text: [] } },
          { paragraph: { rich_text: [] } },
          { paragraph: { rich_text: [] } },
          ...(image ? [{ image: { external: { url: image } } }] : []),
        ],
      });
    }

    return { ok: 'message' };
  }
}
