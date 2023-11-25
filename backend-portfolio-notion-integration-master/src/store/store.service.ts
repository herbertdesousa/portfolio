import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import puppeteer, { Page } from 'puppeteer';

@Injectable()
export class StoreService {
  page: Page;

  async init(url: string) {
    const browser = await puppeteer.launch({ headless: 'new' });

    this.page = await browser.newPage();

    await this.page.goto(url);
  }

  async getContentAttribute(query: string) {
    const [content] = await this.page.$$eval(query, (el) =>
      el.map((x) => x.getAttribute('content')),
    );

    if (!content)
      throw new UnprocessableEntityException(`Not found content from ${query}`);

    return content;
  }
}
