import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/core/repositories/base.repository';
import { Ilan } from '../schemas/ilan.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class IlanRepository extends BaseRepository<Ilan> {
  constructor(@InjectModel(Ilan.name) private readonly ilanModel: Model<Ilan>) {
    super(ilanModel);
  }
}
