import { UnprocessableEntityException } from '@nestjs/common';

import {
  CommonSyncedBlock,
  CommonSyncedBlockHandleData,
} from './common-synced-block.handle';

export class SyncedBlockCertification extends CommonSyncedBlock {
  data: Array<{ date: string; title: string; locale: string }> = [];

  async resolve(block: CommonSyncedBlockHandleData) {
    if (this.extractBlockTitle(block) === 'Certifications') {
      block.map((innerBlock) => {
        if (
          innerBlock.type === 'paragraph' &&
          innerBlock.paragraph.rich_text.length > 0
        ) {
          const [date, title, locale = ''] = innerBlock.paragraph.rich_text
            .map((text) => text.plain_text.trim())
            .filter((text) => text);

          if (!date || !title) {
            throw new UnprocessableEntityException(
              this.constructor.name,
              'date or title is empty',
            );
          }

          this.data.push({ date, title, locale });
        }
      });

      return;
    }

    return super.resolve(block);
  }
}
