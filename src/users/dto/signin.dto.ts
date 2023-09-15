import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignupDto{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    password: string;
}