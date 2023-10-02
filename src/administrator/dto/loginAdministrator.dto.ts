import { IsNotEmpty } from "class-validator"

export class LoginAdministratorDto{
    @IsNotEmpty({message:"UID can not empty"})
    uid: number

    @IsNotEmpty({message:"Password can not empty"})
    password: string
}