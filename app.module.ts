// src/app.module.ts
import { Module } from '@nestjs/common';
import { Punto3Module } from './modulo';  // Asegúrate de importar el módulo de punto3 correctamente

@Module({
  imports: [Punto3Module],  // Aquí debes importar Punto3Module
})
export class AppModule {}
