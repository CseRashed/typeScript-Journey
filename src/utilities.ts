// Utility type
type Product={
    id:number;
    name:string;
    price:string;
    stock:number;
    color?:string;
}

type ProductSummery =Pick<Product, 'color'| 'stock'> //show  summery with specific key

type ProuductWithOut=Omit<Product, 'stock'> //show summery without specific keys

type ProudctRequired=Required<Product> //show summery with all keys and optional keys

type OptionalProduct=Partial<Product> //show summery all key are optional

type ProductReadOnly =Readonly<Product> //all product just readable not writable

const emptyObj:Record<string,unknown>={} //declare empty obj "":unkhown