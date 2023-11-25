import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { ContentFetchService } from 'src/cv/services/content-fetch.service';

import { CommonHandle, Handle } from '../common.handle';
import { CommonSyncedBlockHandleData } from './common-synced-block.handle';

export class SyncedBlock extends CommonHandle {
  inner: Handle<CommonSyncedBlockHandleData>;

  constructor(
    innerHandle: Handle<CommonSyncedBlockHandleData>,
    private contentFetchService: ContentFetchService,
  ) {
    super();

    this.inner = innerHandle;
  }

  async resolve(block: BlockObjectResponse) {
    if (block.type === 'synced_block') {
      const innerResults = await this.contentFetchService.fetchBlock(block.id);

      return await this.inner.resolve(innerResults);
    }

    return super.resolve(block);
  }
}
