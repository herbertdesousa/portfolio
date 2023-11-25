import {
  BlockObjectResponse,
  Heading2BlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

import { CommonHandle } from '../common.handle';

export type CommonSyncedBlockHandleData = BlockObjectResponse[];

export abstract class CommonSyncedBlock extends CommonHandle<CommonSyncedBlockHandleData> {
  extractBlockTitle(
    blocks: CommonSyncedBlockHandleData,
    blockType: CommonSyncedBlockHandleData[0]['type'] = 'heading_2',
  ): string | null {
    const block = blocks.find((block) => block.type === blockType);

    if (!block) return null;

    const [title] = block[blockType].rich_text;

    if (!title) return null;

    const rawTitle = title.plain_text.trim();

    if (!rawTitle) return null;

    return rawTitle;
  }
}
