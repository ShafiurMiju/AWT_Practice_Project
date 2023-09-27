import { IsNotEmpty } from "class-validator"

export class CreateAdministratorDto {
    @IsNotEmpty({message:"Name can not empty"})
    name: string

    @IsNotEmpty({message:"Email can not empty"})
    email: string

    @IsNotEmpty({message:"Id can not empty"})
    uid: number

    @IsNotEmpty({message:"ID can not empty"})
    password: string

    @IsNotEmpty({message:"Date of Birth can not empty"})
    dob: Date

    @IsNotEmpty({message:"salary can not empty"})
    salary: number

    @IsNotEmpty({message:"Address can not empty"})
    address: string

}


