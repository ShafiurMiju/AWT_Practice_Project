import { Controller, Get, Post, Body, UsePipes, Param, ValidationPipe, Delete } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { LoginAdministratorDto } from './dto/loginAdministrator.dto';
import { searchManagerDTO } from './dto/searchAdministrator.dto';

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

  @Get("login")
  @UsePipes(ValidationPipe)
  async LoginAdministrator(@Body() loginData: LoginAdministratorDto):Promise<LoginAdministratorDto>{
    return await this.administratorService.loginAdministrator(loginData)
  }

  @Get("/viewadministrator")
  async viewAllAdministrator(@Body() data):Promise<any>{
    return await this.administratorService.viewAllAdministrator(data);
  }

  @Get("/searchbyid")
  async searchAdministratorById(@Body() id:searchManagerDTO):Promise<any>{
    return await this.administratorService.searchAdministratorById(id)
  }

  @Delete("/deleteadministrator/:uid")
  async deleteAdministrator(@Param('uid') uid:number):Promise<any>{
    return await this.administratorService.deleteAdministrator(uid)
  }

}
