// todo проверить необходимость UseGuards и UseInterceptors
import {Controller, Get, Post, Patch, Delete, UseGuards, UseInterceptors, Param} from '@nestjs/common';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
    constructor(private readonly adminsService: AdminsService) {}

    @Get()
    getAdmins() {} //List?

    @Post
    createManager() {}

    @Patch(':id')
    resetAdminPassword()

    @Delete(':id')
    deleteAdmin(@Param('id') id: string) {
        // строка @Param('id') id: string автодополнение
    }

}