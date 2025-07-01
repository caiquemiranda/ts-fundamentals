abstract class  Celular {
    ligar() {
        console.log('Ligando...');
    }
}

class Iphone23Pro extends Celular {}
class GalaxyS23Max extends Celular {}

let c1 = new GalaxyS23Max();
c1.ligar();

c1 = new Iphone23Pro();
c1.ligar();

export {}