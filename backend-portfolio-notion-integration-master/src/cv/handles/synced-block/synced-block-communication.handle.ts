import { UnprocessableEntityException } from '@nestjs/common';

import {
  CommonSyncedBlock,
  CommonSyncedBlockHandleData,
} from './common-synced-block.handle';

export class SyncedBlockCommunication extends CommonSyncedBlock {
  data: Array<{ language: string; level: string }> = [];

  async resolve(block: CommonSyncedBlockHandleData) {
    if (this.extractBlockTitle(block) === 'Communication') {
      block.map((innerBlock) => {
        if (
          innerBlock.type === 'paragraph' &&
          innerBlock.paragraph.rich_text.length > 0
        ) {
          const [language, level] = innerBlock.paragraph.rich_text
            .map((text) => text.plain_text.trim())
            .filter((text) => text);

          if (!language || !level) {
            throw new UnprocessableEntityException(
              this.constructor.name,
              'language or level is empty',
            );
          }

          this.data.push({ language, level });
        }
      });

      return;
    }

    return super.resolve(block);
  }
}
