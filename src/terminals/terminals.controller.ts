import { Controller, Get, Patch, Post } from '@nestjs/common';
import { TerminalsService } from './terminals.service';

@Controller('terminals')
export class TerminalsController {
    constructor(private readonly terminalsService: TerminalsService) {}

    @Get()
    getTerminals() {}

    @Get(':id')
    getTerminal() {}

    @Patch(':id')
    updateStatus() {}
// предложение автокомплита, разобратьсья @Param('id', ParseIntPipe) id: number) {}

//что такое heartbeat?
    @Post(':id')
    alive() {}
}

