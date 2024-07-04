class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = '';
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'ataque desconhecido';
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi = new Heroi('Gandalf', 1000, 'mago');
heroi.atacar();

const heroi2 = new Heroi('Aragorn', 35, 'guerreiro');
heroi2.atacar();

const heroi3 = new Heroi('Kung Fu', 25, 'monge');
heroi3.atacar();

const heroi4 = new Heroi('Naruto', 20, 'ninja');
heroi4.atacar();
