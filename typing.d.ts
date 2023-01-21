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
    bg3:string
    box:box[]
}
interface box {
    text:string,
    number:number
}