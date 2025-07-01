abstract class Animal {
    abstract emitirSom(): string
}

class Gato extends Animal {
    emitirSom(): string {
        return 'Miau miau miau'
    }
}

class Cahorro extends Animal {
    emitirSom(): string {
        return 'Au au au'
    }
}

function exibir (animal: Animal){
    console.log(animal.emitirSom())
}

let a: Animal = new Gato()
exibir(a)

a = new Cahorro()
exibir(a)

export {}