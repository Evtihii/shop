import { InjectionToken } from '@angular/core';
import { ConstantLiteral } from '../models/constant.model';

export const ConstantLiteralToken = new InjectionToken<ConstantLiteral>('Constant_Literal');
export const Literal: ConstantLiteral = {
  app: 'Shop',
  ver: '1.00',
  API_URL: 'https://dummyjson.com',
  uuid: '38D#ME2!',
}