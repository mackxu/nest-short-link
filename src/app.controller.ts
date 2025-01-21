import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ShortCodeService } from './short-code.service';
import { ShortLongMapService } from './short-long-map.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly shortCodeService: ShortCodeService,
    private readonly shortLongMapService: ShortLongMapService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/code')
  code() {
    return this.shortCodeService.generateCode();
  }

  @Get('/short-url')
  shortUrl(@Query('url') url: string) {
    return this.shortLongMapService.longUrl2code(url);
  }

  @Get(':code')
  @Redirect()
  async jump(@Param('code') code: string) {
    const url = await this.shortLongMapService.code2longUrl(code);
    console.log(url, 123);
    if (!url) {
      throw new BadRequestException('短链接不存在');
    }
    return { url, statusCode: 302 };
  }
}
