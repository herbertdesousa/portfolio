import { Module } from '@nestjs/common';

import { CvController } from './cv.controller';
import { ContentFetchService } from './services/content-fetch.service';

@Module({
  controllers: [CvController],
  providers: [ContentFetchService],
})
export class CvModule {}
