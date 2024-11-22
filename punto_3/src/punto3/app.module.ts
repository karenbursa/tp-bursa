
import { Module } from '@nestjs/common';
import { Punto3Module } from './modulo'; 

@Module({
  imports: [Punto3Module],  
})
export class AppModule {}
