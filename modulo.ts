// src/punto3/punto3.module.ts
import { Module } from '@nestjs/common';
import { Punto3Controller } from './punto3.controller';  // Asegúrate de que el controlador esté importado
import { Punto3Service } from './punto3.service';  // Asegúrate de que el servicio esté importado

@Module({
  controllers: [Punto3Controller],  // Declara el controlador en el módulo
  providers: [Punto3Service],  // Declara el servicio en el módulo
})
export class Punto3Module {}
