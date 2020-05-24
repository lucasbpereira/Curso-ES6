//Exercício 1

class users {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }

    isAdmin() {
        return this.admin === true;
    }

    returnUser(){
        return this.email;
    }
};

class admin extends users {
    constructor() {
        super();
        this.admin = true;
    }
};


const user1 = new users('user@teste.com', 'senha123');
console.log(user1.isAdmin());

const adm1 = new admin('email@teste.com', 'senha123');
console.log(adm1.isAdmin());

//Exercício 2

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// Exercício 2.1
const age = usuarios.map(({idade}) => idade);

console.log(age);

// Exercício 2.2
const filter = usuarios.filter(({idade, empresa}) => idade > 18 & empresa === 'Rocketseat');

console.log(filter);

// Exercício 2.3
const find = usuarios.find(({empresa}) => empresa === 'Google');

console.log(find);

// Exercício 2.4
const mult = usuarios.map(usuarios => ({...usuarios, idade: usuarios.idade*2}));
const filterSum = mult.filter(({idade}) => idade <= 50);

console.log(filterSum);

// 3.1
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((item) => item + 10);

console.log(newArr);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = () => usuario.idade;
console.log(mostraIdade(usuario.idade));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 22;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());

// 4.1

const empresa = {
    nome1: 'Rocketseat',
    endereco1: {
        cidade1: 'Rio do Sul',
        estado1: 'SC',
    }
};

const {nome1, endereco1: { cidade1, estado1 }} = empresa;

console.log(nome1); // Rocketseat
console.log(cidade1); // Rio do Sul
console.log(estado1); // SC

  function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
   }
console.log(mostraInfo(usuario));

// 5.1

const arr1 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr1;
console.log(x);
console.log(y);

const sum = arr1.reduce((total, next) => total + next);
console.log(sum);
console.log(x + y[0]);

// 5.2

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};



function printUser({ nome, idade, endereco: { cidade, uf, pais }}) {
    console.log('Olá, ' + nome + ' Você tem: ' + idade + ' anos e mora em ' + cidade + ' no estado de ' + uf + ' no país ' + pais);
};

printUser(usuario1);

const usuario2 = { ...usuario1, nome: 'Gabriel' };
printUser(usuario2);

const usuario3 = { ...usuario1, endereco: { cidade: "Lontras" } };
printUser(usuario3);

// 6.0

const usuario4 = 'Diego';
const idade4 = 23;
console.log(`O usuário ${usuario4} possui ${idade4} anos`);

// 7.0

const nome7 = 'Diego';
const idade7 = 23;

const usuario7 = {
 nome7,
 idade7,
 cidade7: 'Rio do Sul',
};

console.log(usuario7);