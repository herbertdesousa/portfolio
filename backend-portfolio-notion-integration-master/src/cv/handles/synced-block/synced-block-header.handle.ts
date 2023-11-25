import { UnprocessableEntityException } from '@nestjs/common';

import {
  CommonSyncedBlock,
  CommonSyncedBlockHandleData,
} from './common-synced-block.handle';

export class SyncedBlockHeader extends CommonSyncedBlock {
  data: { name: string; hole: string } = { name: '', hole: '' };

  async resolve(block: CommonSyncedBlockHandleData) {
    if (this.extractBlockTitle(block, 'heading_1') !== null) {
      const [h1Block, holeBlock] = block;

      if (
        !h1Block ||
        h1Block.type !== 'heading_1' ||
        !holeBlock ||
        holeBlock.type !== 'paragraph'
      ) {
        throw new UnprocessableEntityException(
          this.constructor.name,
          'h1Block or holeBlock is empty or invalid',
        );
      }

      const [h1] = h1Block.heading_1.rich_text;
      const [hole] = holeBlock.paragraph.rich_text;

      if (!h1 || !hole) {
        throw new UnprocessableEntityException(
          this.constructor.name,
          'h1 or hole is empty or invalid',
        );
      }

      this.data = { name: h1.plain_text, hole: hole.plain_text };

      return;
    }

    return super.resolve(block);
  }
}
