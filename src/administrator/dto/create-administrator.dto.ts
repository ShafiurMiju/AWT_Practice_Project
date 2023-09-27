import { IsNotEmpty } from "class-validator"

export class CreateAdministratorDto {
    name: string

    uid: number

    password: string

    dob: Date

    @IsNotEmpty({message:"salary can not empty"})
    salary: number

    address: string

}


