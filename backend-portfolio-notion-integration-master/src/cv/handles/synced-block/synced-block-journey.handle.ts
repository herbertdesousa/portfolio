import { UnprocessableEntityException } from '@nestjs/common';

import {
  CommonSyncedBlock,
  CommonSyncedBlockHandleData,
} from './common-synced-block.handle';

export class SyncedBlockJourney extends CommonSyncedBlock {
  data: { text: string } = { text: '' };

  async resolve(block: CommonSyncedBlockHandleData) {
    if (this.extractBlockTitle(block) === 'Journey') {
      block.map((innerBlock) => {
        if (innerBlock.type === 'quote') {
          const [text] = innerBlock.quote.rich_text;

          if (!text) {
            throw new UnprocessableEntityException(
              this.constructor.name,
              'text is empty',
            );
          }

          this.data.text = text.plain_text;
        }
      });

      return;
    }

    return super.resolve(block);
  }
}
