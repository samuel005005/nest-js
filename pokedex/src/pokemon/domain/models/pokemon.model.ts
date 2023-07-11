export default class Pokemon {

    private id?: string;

    private readonly name: string;

    private readonly no: number;

    constructor(
        id: string | null,
        name: string,
        no:number
    ) {
        this.id = id;
        this.name = name;
        this.no = no;
    }

    getName() : string{
        return this.name;
    }

}