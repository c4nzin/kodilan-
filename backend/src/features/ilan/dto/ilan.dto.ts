import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { IlanTipi, Sehirler } from '../schemas/ilan.schema';

export class IlanDto {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  public pozisyon: string;

  @IsString()
  @IsNotEmpty()
  public ilanAciklamasi: string;

  @IsEnum(Sehirler)
  @IsNotEmpty()
  public lokasyon: Sehirler;

  @IsEnum(IlanTipi)
  @IsNotEmpty()
  public ilanTipi: IlanTipi;

  @IsString()
  @IsOptional()
  public etiketler?: string;

  @IsOptional()
  public url?: string;

  @IsString()
  @IsNotEmpty()
  public firmaAdi: string;

  @IsOptional()
  public website?: string;

  @IsUrl()
  @IsOptional()
  public logoUrl?: string;

  @IsString()
  @IsOptional()
  public twitterkullaniciAdi?: string;

  @IsUrl()
  @IsOptional()
  public linkedInUrl?: string;
}
