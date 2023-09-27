import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';

@Controller('administrator')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get("/home")
  welcome():string{
    return this.administratorService.welcome();
  }

  @Post("/signup")
  createAdministrator(@Body() administratorData:CreateAdministratorDto){
    return this.administratorService.createAdministrator(administratorData);
  }
}
