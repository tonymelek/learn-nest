import { Injectable } from '@nestjs/common';
import { Item } from './types/items.types';

@Injectable()
export class ItemsService {
    private readonly items: Item[]=[
        {id:'qwer',
        qty:300,
        name:'item1'
    },
    {id:'ty',
    qty:200,
    name:'item2'
}
    ]
    findAll():Item[] {
        return this.items;
    }
    findOne(id:string):Item {
        return this.items.find(item=>item.id===id);
    }
}
