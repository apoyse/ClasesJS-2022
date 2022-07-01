class ContainerMemoria{
    constructor(){
        this.elements=[
        ]
    }

    getAll(){
        return this.elements
    }
    getById(id) {
        const elements = this.elements.find((e) => e.id == id)

        return element;
    }

    save(element) {
        element.id = this.elements.length === 0 ? 1 : this.elements[this.elements.length -1].id +1//si id no tiene niguno lo hace 1
         
        
    }




}