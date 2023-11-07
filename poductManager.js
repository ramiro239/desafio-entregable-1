class ProductManager {
    constructor() {
        //array vacio
        this.products = [];
        this.nextProductId = 1;
    }

    //método “addProduct” el cual agregará un producto al arreglo de productos inicial.
    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            console.log("Todos los campos son obligatorios");
            return;
        }
        // Validar que no se repita el campo “code”
        const isCodeDuplicate = this.products.some(product => product.code === code);
        if (isCodeDuplicate) {
            console.log("El código ya existe. Debe ser único.");
            return;
        }

        // Agregar el producto con un id autoincrementable
        const newProduct = {
            id: this.nextProductId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(newProduct);
    }

    //método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
    getProducts() {
        return this.products;
    }

    /*Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
        -En caso de no coincidir ningún id, mostrar en consola un error “Not found” */

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error("Not found");
          }
          return product;
        }
}
