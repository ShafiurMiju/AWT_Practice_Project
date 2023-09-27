import { IsNotEmpty } from "class-validator"

export class LoginAdministratorDto{
    @IsNotEmpty({message:"Email can not empty"})
    email: string

    @IsNotEmpty({message:"Password can not empty"})
    password: string
}