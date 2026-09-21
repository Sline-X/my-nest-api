import {Controller, Get, Param, Patch, Post} from '@nestjs/common';
import { RequestService } from './requests.service'

@Controller('requests')
export class RequestsController {
    constructor(private readonly requestService: RequestService) {}

    @Get()
    getRequests() {}

    @Patch(':id')
    approveRequest(@Param('id') id: string) {}

    @Patch(':id')
    rejectRequest(@Param('id') id: string) {}

    @Post(':id')
    addComment() {}
}