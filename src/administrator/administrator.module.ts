import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { administratorEntity } from './entities/administrator.entity';


@Module({
  imports: [TypeOrmModule.forFeature([administratorEntity])],
controllers: [AdministratorController],
  providers: [AdministratorService],
})
export class AdministratorModule {}
