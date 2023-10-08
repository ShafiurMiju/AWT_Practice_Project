import { Controller, Get, Post, Body, UsePipes, Param, ValidationPipe, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { LoginAdministratorDto } from './dto/loginAdministrator.dto';
import { searchManagerDTO } from './dto/searchAdministrator.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';

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

  @Post('/upload')
  @UseInterceptors(FileInterceptor('myfile',{fileFilter:(req, file, cb)=>{
    if(file.originalname.match(/^.*\.(jpg|webp|png|jepg)$/)){
      cb(null, true)
    }else{
      cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false)
    }
  }, limits:{fileSize: 300000}, storage: diskStorage({destination: './uploadFile', filename: function(req, file, cb){
    cb(null, Date.now()+file.originalname)}})   
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.administratorService.upload(file);
  }

  @Get('/getimage/:name')
  getImages(@Param('name') name, @Res() res) {
  res.sendFile(name,{ root: './uploadFile' })
  }



}
