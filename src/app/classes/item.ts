export class Item {
    description: string;
    line: number;
    phoneNmuber: string;
    static cnt: number;
    id: number;
    categoryId: number;
    constructor(description: string, line: number, phoneNmuber: string, categoryId: number) {
        this.description = description;
        this.line = line;
        this.phoneNmuber = phoneNmuber;
        this.id = Item.cnt;
        this.categoryId = categoryId;
        Item.cnt = Item.cnt + 1;
    }
}
Item.cnt = 0;