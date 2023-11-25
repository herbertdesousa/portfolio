import { UnprocessableEntityException } from '@nestjs/common';

import {
  CommonSyncedBlock,
  CommonSyncedBlockHandleData,
} from './common-synced-block.handle';

export class SyncedBlockContact extends CommonSyncedBlock {
  data: Array<{ text: string; url: string }> = [];

  async resolve(block: CommonSyncedBlockHandleData) {
    if (this.extractBlockTitle(block) === 'Contacts') {
      block.map((innerBlock) => {
        if (
          innerBlock.type === 'paragraph' &&
          innerBlock.paragraph.rich_text.length > 0
        ) {
          const [emoji, text] = innerBlock.paragraph.rich_text;

          if (text.type !== 'text') {
            throw new UnprocessableEntityException(
              this.constructor.name,
              'text is not text ;c',
            );
          }

          this.data.push({ text: text.text.content, url: text.text.link.url });

          /* const [date, title, locale = ''] = innerBlock.paragraph.rich_text
            .map((text) => text.plain_text.trim())
            .filter((text) => text);

          if (!date || !title) {
            throw new UnprocessableEntityException('date or title is empty');
          }

          this.data.push({ date, title, locale }); */
        }
      });

      return;
    }

    return super.resolve(block);
  }
}
