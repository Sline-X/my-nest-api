import {Controller, Get, Post, Patch, Delete, Param} from '@nestjs/common';
import { ShopOwnersService } from './shop-owners.service';

@Controller('shop-owners')
export class ShopOwnersController {
    constructor(private shopOwnersService: ShopOwnersService) {}

    @Get()
    getShopOwners() {}

    @Get(':id')
    getShopOwner(@Param('id') id: string) {}

    @Post()
    createShopOwner() {}

    @Patch(':id')
    updateShopOwner(@Param('id') id: string) {}

    @Delete(':id')
    deleteShopOwner(@Param('id') id: string) {}
}