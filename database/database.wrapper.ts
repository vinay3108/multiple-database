interface BaseDB{
    create(): void;
    find() : any;
    findOne(id:string): object;
    updateOne(id:string): void;
}
class DBWrapper {
    private db: BaseDB;
    
    constructor(private database : BaseDB){
        this.db = database;
    }
}