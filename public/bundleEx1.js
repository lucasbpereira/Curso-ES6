"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Exercício 1
var users = /*#__PURE__*/function () {
  function users(email, pass) {
    _classCallCheck(this, users);

    this.email = email;
    this.pass = pass;
  }

  _createClass(users, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }, {
    key: "returnUser",
    value: function returnUser() {
      return this.email;
    }
  }]);

  return users;
}();

;

var admin = /*#__PURE__*/function (_users) {
  _inherits(admin, _users);

  var _super = _createSuper(admin);

  function admin() {
    var _this;

    _classCallCheck(this, admin);

    _this = _super.call(this);
    _this.admin = true;
    return _this;
  }

  return admin;
}(users);

;
var user1 = new users('user@teste.com', 'senha123');
console.log(user1.isAdmin());
var adm1 = new admin('email@teste.com', 'senha123');
console.log(adm1.isAdmin()); //Exercício 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // Exercício 2.1

var age = usuarios.map(function (_ref) {
  var idade = _ref.idade;
  return idade;
});
console.log(age); // Exercício 2.2

var filter = usuarios.filter(function (_ref2) {
  var idade = _ref2.idade,
      empresa = _ref2.empresa;
  return idade > 18 & empresa === 'Rocketseat';
});
console.log(filter); // Exercício 2.3

var find = usuarios.find(function (_ref3) {
  var empresa = _ref3.empresa;
  return empresa === 'Google';
});
console.log(find); // Exercício 2.4

var mult = usuarios.map(function (usuarios) {
  return _objectSpread(_objectSpread({}, usuarios), {}, {
    idade: usuarios.idade * 2
  });
});
var filterSum = mult.filter(function (_ref4) {
  var idade = _ref4.idade;
  return idade <= 50;
});
console.log(filterSum); // 3.1

var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade() {
  return usuario.idade;
};

console.log(mostraIdade(usuario.idade)); // 3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 22;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // 4.1


var empresa = {
  nome1: 'Rocketseat',
  endereco1: {
    cidade1: 'Rio do Sul',
    estado1: 'SC'
  }
};
var nome1 = empresa.nome1,
    _empresa$endereco = empresa.endereco1,
    cidade1 = _empresa$endereco.cidade1,
    estado1 = _empresa$endereco.estado1;
console.log(nome1); // Rocketseat

console.log(cidade1); // Rio do Sul

console.log(estado1); // SC

function mostraInfo(_ref5) {
  var nome = _ref5.nome,
      idade = _ref5.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo(usuario)); // 5.1

var arr1 = [1, 2, 3, 4, 5, 6];
var x = arr1[0],
    y = arr1.slice(1);
console.log(x);
console.log(y);
var sum = arr1.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
console.log(x + y[0]); // 5.2

var usuario1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

function printUser(_ref6) {
  var nome = _ref6.nome,
      idade = _ref6.idade,
      _ref6$endereco = _ref6.endereco,
      cidade = _ref6$endereco.cidade,
      uf = _ref6$endereco.uf,
      pais = _ref6$endereco.pais;
  console.log('Olá, ' + nome + ' Você tem: ' + idade + ' anos e mora em ' + cidade + ' no estado de ' + uf + ' no país ' + pais);
}

;
printUser(usuario1);

var usuario2 = _objectSpread(_objectSpread({}, usuario1), {}, {
  nome: 'Gabriel'
});

printUser(usuario2);

var usuario3 = _objectSpread(_objectSpread({}, usuario1), {}, {
  endereco: {
    cidade: "Lontras"
  }
});

printUser(usuario3); // 6.0

var usuario4 = 'Diego';
var idade4 = 23;
console.log("O usu\xE1rio ".concat(usuario4, " possui ").concat(idade4, " anos")); // 7.0

var nome7 = 'Diego';
var idade7 = 23;
var usuario7 = {
  nome7: nome7,
  idade7: idade7,
  cidade7: 'Rio do Sul'
};
console.log(usuario7);
