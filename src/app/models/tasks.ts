export class products {
  constructor(name:string,comment:string){
    this.comment = comment
  }

  id!: number;
  name!: string;
  price!: number;
  image!: string;
  description!: string;
  brand!: string;
  category!: string;
  discount!: string;
  delivery!: string;
  quantity!: number;  
  subtotal!: number;
  selectedSize?: string; 
  selectWidth?: string;
  comment!:string;
  size!:string
}
