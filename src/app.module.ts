import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortCodeService } from './short-code.service';
import { ShortLongMapService } from './short-long-map.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortCode } from './entities/ShortCode';
import { ScheduleModule } from '@nestjs/schedule';
import { ShortLongMap } from './entities/ShortLongMap';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'duoduoxu',
      database: 'short_link',
      entities: [ShortCode, ShortLongMap],
      synchronize: true,
      logging: true,
      connectorPackage: 'mysql2',
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, ShortCodeService, ShortLongMapService],
})
export class AppModule {}
