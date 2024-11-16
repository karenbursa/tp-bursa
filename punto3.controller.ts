import { Controller, Post, Body, BadRequestException, Get } from '@nestjs/common'; // Asegúrate de importar Get
import { Punto3Dto } from './punto3.dto';
import { Punto3Service } from './punto3.service';

@Controller('punto3') //con este metodo manejo las solicitudes POST al endpoint
export class Punto3Controller {
  constructor(private readonly punto3Service: Punto3Service) {}

  @Post()
  async handlePost(@Body() body: Punto3Dto) {
    try {
      const normalizedData = this.punto3Service.normalizeAndValidate(body); //llama a normalizar la fecha 
      const response = await this.punto3Service.sendToExternalService(normalizedData); //envio los datos normalizados de arriba
      return { success: true, response };//retorno una respuesta si se ejecuto bien 
    } catch (error) {
      throw new BadRequestException(error.message); //devuelve un mensaje, se usa cuanddo hay validaciones
    }
  }

  @Get() // Este decorador maneja las solicitudes GET
  testGet() {
    console.log('andoo');//terminal 
    return 'hola andooo';//lo muestro por localhost
  }}