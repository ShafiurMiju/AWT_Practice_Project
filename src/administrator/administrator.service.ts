import { Injectable} from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { LoginAdministratorDto } from './dto/loginAdministrator.dto';

@Injectable()
export class AdministratorService {
  async welcome():Promise<string>{
    return await "Welcome Back"
  }

  async createAdministrator(administratorData: CreateAdministratorDto):Promise<CreateAdministratorDto>{
    return await administratorData;
  }

  async loginAdministrator(loginData: LoginAdministratorDto):Promise<LoginAdministratorDto>{
    return await loginData;
  }
}
