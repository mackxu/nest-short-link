import { Injectable } from '@nestjs/common';
import { ShortCodeService } from './short-code.service';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { ShortLongMap } from './entities/ShortLongMap';

@Injectable()
export class ShortLongMapService {
  constructor(private readonly shortCodeService: ShortCodeService) {}

  @InjectEntityManager()
  private readonly entityManager: EntityManager;

  // long url 转 short code
  async longUrl2code(url: string) {
    const shortCodeEntity = await this.shortCodeService.getRandomCode();
    const codeMap = new ShortLongMap();
    codeMap.shortCode = shortCodeEntity.code;
    codeMap.longUrl = url;
    await this.entityManager.insert(ShortLongMap, codeMap);
    await this.shortCodeService.updateUsedById(shortCodeEntity.id);
    return shortCodeEntity.code;
  }

  async code2longUrl(shortCode: string) {
    const entity = await this.entityManager.findOneBy(ShortLongMap, {
      shortCode,
    });
    return entity?.longUrl;
  }
}
