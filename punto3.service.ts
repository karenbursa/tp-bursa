import { Injectable, BadRequestException } from '@nestjs/common';
import { Punto3Dto } from './punto3.dto';
import axios from 'axios';

@Injectable()
export class Punto3Service {
  normalizeAndValidate(data: Punto3Dto): Punto3Dto {
    // Normalizar Name y Surename
    data.name = this.capitalize(data.name);
    data.suraname = this.capitalize(data.suraname);

    // Validar fecha de nacimiento
    const birthday = new Date(data.birthday);
    if (isNaN(birthday.getTime()) || birthday > new Date() || birthday < new Date('1900-01-01')) {
      throw new BadRequestException('Invalid birthday date.');
    }

    // Validar que age sea entero
    if (!Number.isInteger(data.age)) {
      throw new BadRequestException('Age must be an integer.');
    }

    return data;
  }

  capitalize(value: string): string {
    return value
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  async sendToExternalService(data: Punto3Dto): Promise<any> {
    try {
      const response = await axios.post(
        'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json',
        data,
      );
      return response.data;
    } catch (error) {
      throw new BadRequestException('Failed to send data to the external service.');
    }
  }
}
