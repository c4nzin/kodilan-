import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/database/database.module';
import { IlanModule } from './features/ilan/ilan.module';
import { EnvalidModule } from 'nestjs-envalid';
import { envalidValidator } from './core/config';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { CronService } from './utils/cron.service';

@Module({
  imports: [
    DatabaseModule,
    IlanModule,
    EnvalidModule.forRoot({
      validators: envalidValidator,
      isGlobal: true,
      useDotenv: true,
    }),
    ScheduleModule.forRoot(),
    HttpModule.register({
      withCredentials: true,
      maxRedirects: 20,
    }),
  ],
  providers: [CronService],
})
export class AppModule {}
