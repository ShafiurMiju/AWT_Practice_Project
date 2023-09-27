import { Controller, Get, Post, Body, UsePipes, Param, ValidationPipe } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { LoginAdministratorDto } from './dto/loginAdministrator.dto';

@Controller('administrator')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get("/home")
  async welcome():Promise<string>{
    return await this.administratorService.welcome();
  }

  @Post("/signup")
  @UsePipes(ValidationPipe)
  async createAdministrator(@Body() administratorData:CreateAdministratorDto):Promise<CreateAdministratorDto>{
    return await this.administratorService.createAdministrator(administratorData);
  }

  @Post("login")
  @UsePipes(ValidationPipe)
  async LoginAdministrator(@Body() loginData: LoginAdministratorDto):Promise<LoginAdministratorDto>{
    return await this.administratorService.loginAdministrator(loginData)
  }
}
