import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);

  constructor(private readonly httpService: HttpService) {}

  @Cron(CronExpression.EVERY_10_HOURS)
  public async sendGetRequest(): Promise<void> {
    await firstValueFrom(
      this.httpService.get(`${process.env.FRONTEND_URL}`).pipe(
        catchError((error: any) => {
          this.logger.error('Error occurred while sending GET request:', error);
          throw error;
        }),
      ),
    );
    this.logger.log(`GET request sent to ${process.env.FRONTEND_URL}`);
  }
}
