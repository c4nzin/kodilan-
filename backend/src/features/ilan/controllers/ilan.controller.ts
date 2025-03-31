import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { IlanService } from '../services/ilan.service';
import { PaginationOptions } from 'src/core/repositories/pagination-options.interface';
import { IlanDto } from '../dto/ilan.dto';
import { Ilan } from '../schemas/ilan.schema';
import { PaginatedResult } from 'src/core/repositories/paginated-result.interface';

@Controller('ilan')
export class IlanController {
  constructor(private readonly ilanService: IlanService) {}

  @Post('olustur')
  public async ilanOlustur(@Body() dto: IlanDto): Promise<Ilan> {
    return this.ilanService.ilanOlustur(dto);
  }

  @Get('listele')
  public async ilanListele(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('sort') sort: string = 'desc',
  ): Promise<PaginatedResult<Ilan>> {
    const options: PaginationOptions = { page, limit, sort };
    return this.ilanService.ilanListele({}, options);
  }

  @Get('ara')
  public async ilanAra(
    @Query('pozisyon') pozisyon?: string,
    @Query('lokasyon') lokasyon?: string,
    @Query('etiketler') etiketler?: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('sort') sort: string = 'desc',
  ): Promise<PaginatedResult<Ilan>> {
    const options: PaginationOptions = { page, limit, sort };
    const etiketlerArray = etiketler ? etiketler.split(',') : undefined;
    return this.ilanService.ilanAra(
      pozisyon,
      lokasyon,
      etiketlerArray,
      options,
    );
  }

  @Get(':id')
  public async ilanBul(@Param('id') id: string): Promise<Ilan> {
    return this.ilanService.ilanBul(id);
  }
}
