import { UnprocessableEntityException } from '@nestjs/common';

import {
  CommonSyncedBlock,
  CommonSyncedBlockHandleData,
} from './common-synced-block.handle';

export class SyncedBlockExperience extends CommonSyncedBlock {
  data: Array<{ year: string; company: string; cargo: string }> = [];

  async resolve(block: CommonSyncedBlockHandleData) {
    if (this.extractBlockTitle(block) === 'Experiences') {
      block.map((innerBlock) => {
        if (
          innerBlock.type === 'paragraph' &&
          innerBlock.paragraph.rich_text.length > 0
        ) {
          const [year, company, cargo] = innerBlock.paragraph.rich_text
            .map((text) => text.plain_text.trim())
            .filter((text) => text);

          if (!year || !company || !cargo) {
            throw new UnprocessableEntityException(
              this.constructor.name,
              'date or company or cargo is empty',
            );
          }

          this.data.push({ year, company, cargo });
        }
      });

      return;
    }

    return super.resolve(block);
  }
}
