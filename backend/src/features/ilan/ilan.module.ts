import { Module } from '@nestjs/common';
import { IlanController } from './controllers/ilan.controller';
import { IlanRepository } from './repositories/ilan.repository';
import { IlanService } from './services/ilan.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IlanSchema } from './schemas/ilan.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Ilan', schema: IlanSchema }])],
  controllers: [IlanController],
  providers: [IlanRepository, IlanService],
  exports: [IlanRepository],
})
export class IlanModule {}
