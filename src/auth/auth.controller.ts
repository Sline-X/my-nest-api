import {Body, Controller, Get, Post} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('')
    login(@Body() payload: any) {}

    @Post()
    logout(@Body() payload: any) {}

    @Post()
    refreshToken(@Body() payload: any) {}

}