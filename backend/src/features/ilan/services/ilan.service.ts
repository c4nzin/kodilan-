import { Injectable } from '@nestjs/common';
import { IlanRepository } from '../repositories/ilan.repository';
import { Ilan } from '../schemas/ilan.schema';
import { PaginationOptions } from 'src/core/repositories/pagination-options.interface';
import { PaginatedResult } from 'src/core/repositories/paginated-result.interface';
import { FilterQuery } from 'mongoose';

@Injectable()
export class IlanService {
  constructor(private readonly ilanRepository: IlanRepository) {}

  public async ilanOlustur(dto: Partial<Ilan>) {
    return this.ilanRepository.create(dto);
  }

  public async ilanListele(
    filter: FilterQuery<Ilan> = {},
    options: PaginationOptions = { page: 1, limit: 50 },
  ): Promise<PaginatedResult<Ilan>> {
    return this.ilanRepository.paginate(filter, options);
  }

  public async ilanAra(
    pozisyon?: string,
    lokasyon?: string,
    etiketler?: string[],
    options: PaginationOptions = { page: 1, limit: 50 },
  ): Promise<PaginatedResult<Ilan>> {
    const filter: Record<string, any> = {};

    if (pozisyon) {
      filter.pozisyon = { $regex: new RegExp(pozisyon, 'i') };
    }

    if (lokasyon) {
      filter.lokasyon = { $regex: new RegExp(lokasyon, 'i') };
    }

    console.log('lokasyon', lokasyon);

    if (etiketler && etiketler.length > 0) {
      filter.etiketler = { $in: etiketler };
    }

    if (lokasyon && lokasyon.length > 0) {
      filter.lokasyon = { $in: lokasyon };
    }

    console.log('etikletler', etiketler);

    const result = await this.ilanRepository.paginate(filter, options);

    return result;
  }

  public async ilanBul(id: string): Promise<Ilan> {
    return this.ilanRepository.findById(id);
  }
}
