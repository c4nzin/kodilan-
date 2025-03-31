import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
export enum IlanTipi {
  FULL_TIME = 'Full Time',
  PART_TIME = 'Part Time',
  INTERNSHIP = 'Stajyer',
}

export type IlanDocument = HydratedDocument<Ilan>;

export enum Sehirler {
  ADANA = 'Adana',
  ADIYAMAN = 'Adıyaman',
  AFYONKARAHISAR = 'Afyonkarahisar',
  AGRI = 'Ağrı',
  AKSARAY = 'Aksaray',
  AMASYA = 'Amasya',
  ANKARA = 'Ankara',
  ANTALYA = 'Antalya',
  ARDAHAN = 'Ardahan',
  ARTVIN = 'Artvin',
  AYDIN = 'Aydın',
  BALIKESIR = 'Balıkesir',
  BARTIN = 'Bartın',
  BATMAN = 'Batman',
  BAYBURT = 'Bayburt',
  BILECIK = 'Bilecik',
  BINGOL = 'Bingöl',
  BITLIS = 'Bitlis',
  BOLU = 'Bolu',
  BURDUR = 'Burdur',
  BURSA = 'Bursa',
  CANAKKALE = 'Çanakkale',
  CANKIRI = 'Çankırı',
  CORUM = 'Çorum',
  DENIZLI = 'Denizli',
  DIYARBAKIR = 'Diyarbakır',
  DUZCE = 'Düzce',
  EDIRNE = 'Edirne',
  ELAZIG = 'Elazığ',
  ERZINCAN = 'Erzincan',
  ERZURUM = 'Erzurum',
  ESKISEHIR = 'Eskişehir',
  GAZIANTEP = 'Gaziantep',
  GIRESUN = 'Giresun',
  GUMUSHANE = 'Gümüşhane',
  HAKKARI = 'Hakkari',
  HATAY = 'Hatay',
  IGDIR = 'Iğdır',
  ISPARTA = 'Isparta',
  ISTANBUL = 'İstanbul',
  IZMIR = 'İzmir',
  KAHRAMANMARAS = 'Kahramanmaraş',
  KARABUK = 'Karabük',
  KARAMAN = 'Karaman',
  KARS = 'Kars',
  KASTAMONU = 'Kastamonu',
  KAYSERI = 'Kayseri',
  KILIS = 'Kilis',
  KIRIKKALE = 'Kırıkkale',
  KIRKLARELI = 'Kırklareli',
  KIRSEHIR = 'Kırşehir',
  KOCAELI = 'Kocaeli',
  KONYA = 'Konya',
  KUTAHYA = 'Kütahya',
  MALATYA = 'Malatya',
  MANISA = 'Manisa',
  MARDIN = 'Mardin',
  MERSIN = 'Mersin',
  MUGLA = 'Muğla',
  MUS = 'Muş',
  NEVSEHIR = 'Nevşehir',
  NIGDE = 'Niğde',
  ORDU = 'Ordu',
  OSMANIYE = 'Osmaniye',
  RIZE = 'Rize',
  SAKARYA = 'Sakarya',
  SAMSUN = 'Samsun',
  SANLIURFA = 'Şanlıurfa',
  SIIRT = 'Siirt',
  SINOP = 'Sinop',
  SIVAS = 'Sivas',
  SIRNAK = 'Şırnak',
  TEKIRDAG = 'Tekirdağ',
  TOKAT = 'Tokat',
  TRABZON = 'Trabzon',
  TUNCELI = 'Tunceli',
  USAK = 'Uşak',
  VAN = 'Van',
  YALOVA = 'Yalova',
  YOZGAT = 'Yozgat',
  ZONGULDAK = 'Zonguldak',
}

@Schema({
  timestamps: true,
})
export class Ilan extends Document {
  @Prop()
  public email: string;

  @Prop()
  public pozisyon: string;

  @Prop()
  public ilanAciklamasi: string;

  @Prop({
    type: String,
    enum: Sehirler,
    required: true,
    default: Sehirler.KARS,
  })
  public lokasyon: Sehirler;

  @Prop({
    type: String,
    enum: IlanTipi,
    default: IlanTipi.FULL_TIME,
    required: true,
  })
  public ilanTipi: IlanTipi;

  @Prop()
  public etiketler: string;

  @Prop()
  public url: string;

  @Prop()
  public firmaAdi: string;

  @Prop()
  public website: string;

  @Prop()
  public logoUrl: string;

  @Prop()
  public twitterkullaniciAdi: string;

  @Prop()
  public linkedInUrl: string;
}

export const IlanSchema = SchemaFactory.createForClass<Ilan>(Ilan);
