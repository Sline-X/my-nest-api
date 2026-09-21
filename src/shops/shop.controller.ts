import {Controller, Get, Post, Patch, Param} from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shops')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Get()
    getShops() {}

    @Get(':id')
    getShop(@Param('id') id: string) {}

    @Post()
    createShop() {}

    @Patch(':id')
    changeCredentials(@Param('id') id: string) {}
}