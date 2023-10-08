import { Injectable} from '@nestjs/common';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { LoginAdministratorDto } from './dto/loginAdministrator.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { administratorEntity } from './entities/administrator.entity';
import { searchManagerDTO } from './dto/searchAdministrator.dto';

@Injectable()
export class AdministratorService {
  constructor(@InjectRepository(administratorEntity) private administratorRepository: Repository<administratorEntity>) {}

  async welcome():Promise<string>{
    return await "Welcome Back, Administrator"
  }

  async createAdministrator(administratorData: CreateAdministratorDto):Promise<CreateAdministratorDto>{
    try{
      return await this.administratorRepository.save(administratorData);
    }catch(error){
      console.log(error);
    }
  }

  async loginAdministrator(loginData: LoginAdministratorDto):Promise<any>{
    let success = await this.administratorRepository.findBy(loginData);
    if(success){
      return success;
    }else{
      console.log("User or Password is not valid")
    }
  }

  async viewAllAdministrator(allData):Promise<object>{
    return await this.administratorRepository.find(allData);
  }

  async searchAdministratorById(data:searchManagerDTO):Promise<object>{
    return await this.administratorRepository.findBy(data)
  }

  async deleteAdministrator(data:number):Promise<object>{
    return await this.administratorRepository.delete(data)
  }

  async upload(file:any):Promise<any>{
    return await file;
  }


}

