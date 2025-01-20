import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectEntityManager } from '@nestjs/typeorm';
import * as base62 from 'base62/lib/ascii';
import { EntityManager } from 'typeorm';
import { ShortCode } from './entities/ShortCode';

@Injectable()
export class ShortCodeService {
  @InjectEntityManager()
  private entityManager: EntityManager;

  // @Cron(CronExpression.EVERY_5_SECONDS)
  async generateCode() {
    const newCode = generateRandomStr(6);
    const entity = await this.entityManager.findOneBy(ShortCode, {
      code: newCode,
    });
    if (!entity) {
      const code = new ShortCode();
      code.code = newCode;
      code.used = false;

      return await this.entityManager.insert(ShortCode, code);
    }
    return this.generateCode();
  }

  async getRandomCode() {
    const entity = await this.entityManager.findOneBy(ShortCode, {
      used: false,
    });
    if (entity) {
      return entity;
    }
    return this.generateCode();
  }

  updateUsedById(id: number) {
    return this.entityManager.update(ShortCode, { id }, { used: true });
  }
}

function generateRandomStr(len) {
  let str = '';
  for (let i = 0; i < len; i++) {
    const randomNum = Math.floor(Math.random() * 62);
    str += base62.encode(randomNum);
  }
  return str;
}
