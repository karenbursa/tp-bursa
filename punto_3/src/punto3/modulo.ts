// src/punto3/punto3.module.ts
import { Module } from '@nestjs/common';
import { Punto3Controller } from './punto3.controller';  
import { Punto3Service } from './punto3.service';  

@Module({
  controllers: [Punto3Controller],  
  providers: [Punto3Service],  
})
export class Punto3Module {}
