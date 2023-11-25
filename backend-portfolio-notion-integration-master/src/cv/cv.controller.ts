import { Controller, Get } from '@nestjs/common';

import { SyncedBlock } from './handles/synced-block/synced-block.handle';
import { SyncedBlockCertification } from './handles/synced-block/synced-block-certification.handle';
import { SyncedBlockCommunication } from './handles/synced-block/synced-block-communication.handle';
import { SyncedBlockContact } from './handles/synced-block/synced-block-contact.handle';
import { SyncedBlockExperience } from './handles/synced-block/synced-block-experience.handle';
import { SyncedBlockHeader } from './handles/synced-block/synced-block-header.handle';
import { SyncedBlockJourney } from './handles/synced-block/synced-block-journey.handle';
import { ContentFetchService } from './services/content-fetch.service';

@Controller('/cv')
export class CvController {
  constructor(private contentFetchService: ContentFetchService) {}

  @Get()
  async generate() {
    const syncedBlockHeader = new SyncedBlockHeader();
    const syncedBlockJourney = new SyncedBlockJourney();
    const syncedBlockExperience = new SyncedBlockExperience();
    const syncedBlockCommunication = new SyncedBlockCommunication();
    const syncedBlockCertification = new SyncedBlockCertification();
    const syncedBlockContact = new SyncedBlockContact();

    syncedBlockHeader
      .setNext(syncedBlockJourney)
      .setNext(syncedBlockExperience)
      .setNext(syncedBlockCommunication)
      .setNext(syncedBlockCertification)
      .setNext(syncedBlockContact);

    const syncedBlock = new SyncedBlock(
      syncedBlockHeader,
      this.contentFetchService,
    );

    const data = await this.contentFetchService.fetchBlock(
      process.env['4HIRES_BLOCK_ID'],
    );

    for (const block of data) {
      await syncedBlock.resolve(block);
    }

    return {
      header: syncedBlockHeader.data,
      journey: syncedBlockJourney.data,
      experiences: syncedBlockExperience.data,
      communication: syncedBlockCommunication.data,
      certifications: syncedBlockCertification.data,
      contacts: syncedBlockContact.data,
    };
  }
}
