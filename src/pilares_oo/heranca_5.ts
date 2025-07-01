// classe abstrata
abstract class  Celular {
    ligar() {
        console.log('Ligando...');
    }

    abstract accessarRedeMovel(): void;

}

// classes concretas que herdam de Celular
class Iphone23Pro extends Celular {
    accessarRedeMovel(): void {
        console.log('Acessando rede móvel do iPhone 23 Pro...');
    }
}

class GalaxyS23Max extends Celular {
    accessarRedeMovel(): void {
        console.log('Acessando rede móvel do Galaxy S23 Max...');
    }
}

let c1 = new GalaxyS23Max();
c1.ligar();
c1.accessarRedeMovel();

c1 = new Iphone23Pro();
c1.ligar();
c1.accessarRedeMovel();

export {}