export function Category(data) {
    this.id = data.id!==null?data.id:0 ;
    this.name = data.name!==null?data.name:"" ;
    this.icon = data.icon!==null?data.icon:'' ;
}
export function Food(data) {
    this.id = data.id!==null?data.id:0 ;
    this.name = data.name!==null?data.name:"" ;
    this.image = data.image!==null?data.image:"" ;
    this.price = data.price!==null?data.price:"" ;
    this.description = data.description!==null?data.description:"" ;
}