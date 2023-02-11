export interface article {
    img:string,
    name:string,
    description:string,
    title:string,
    price:number,
    qty:number,
    p1:string,
    p2:string,
    bg1:string,
    bg2:string,
    bg3:string,
    alsoLike:mayLike[]
    box:box[],
    category:string,
    alt:string,
    itemId:string
}
interface alsoLike{
    img:string,
    link:string,
    title:string
}
interface box {
    text:string,
    number:number
}

interface index {
    [key: number]: string;
}