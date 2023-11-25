import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CommonServices } from './common/services/common-services.module';
import { CvModule } from './cv/cv.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [ConfigModule.forRoot(), CommonServices, CvModule, StoreModule],
  controllers: [],
})
export class AppModule {}
