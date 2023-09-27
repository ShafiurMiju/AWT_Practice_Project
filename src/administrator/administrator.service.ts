import { Injectable} from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';

@Injectable()
export class AdministratorService {
  welcome():string{
    return "Welcome Back"
  }

  createAdministrator(administratorData: CreateAdministratorDto){
    return administratorData;
  }
}
