import {
    IsString,
    IsNotEmpty,
    IsDateString,
    IsInt,
    Min,
    Max,
    Matches,
    IsIn,
  } from 'class-validator';
  
  export class Punto3Dto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    suraname: string;
  
    @Matches(/^\d{4}\/\d{2}\/\d{2}$/, { message: 'la fecha de cumpleaños debe tener el formato AAAA/MM/DD' })
    birthday: string;
  
    @IsInt({ message: 'la edad debe ser entero' })
    @Min(0)
    @Max(150)
    age: number;
  
    @IsString()
    @IsIn(['CUIT', 'DNI'], { message: 'el documento debe tener formato "CUIT" O "DNI"' })
    documentType: string;
  
    @IsString()
    @Matches(/^\d+$/, { message: 'el dni debe ingresarse con formato string' })
    documentNumber: string;
  }
  