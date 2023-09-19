import { Controller, Get, Post, Body,Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './types/items.types';


@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){ // make the service accessible at controller

    }
    @Get()
    findAll():Item[]{
        return this.itemsService.findAll();
    }
    @Get(':id')
    findOne(@Param() param):Item {
        return this.itemsService.findOne(param.id);
    }

    @Post()
    createNewItem(@Body() createItemDto:CreateItemDto):string {
        return `${createItemDto.name}`
    }
}
