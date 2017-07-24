/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Создаём класс, которому передаём параметры:
// string name, number power, number health
var Fighter = (function () {
    // power по умолчанию: рандом от 1 до 10
    function Fighter(name, power, health) {
        if (name === void 0) { name = "Fighter-XX"; }
        if (power === void 0) { power = Math.floor((Math.random() * 10) + 1); }
        if (health === void 0) { health = 1000; }
        this.name = name,
            this.power = power,
            this.health = health;
    }
    // Наносим урон этой сущности
    Fighter.prototype.setDamage = function (damage) {
        this.health -= damage;
        console.log(this.name + "'s health: " + this.health);
    };
    // Эта сущность наносит урон по enemy
    Fighter.prototype.hit = function (enemy, point) {
        if (point === void 0) { point = 5; }
        var damage = (point * this.power);
        // Проверяем, не закончена ли игра, и тогда бьём по врагу
        if (enemy.health >= 0) {
            enemy.setDamage(damage);
        }
        // Сразу после удара проверяем жизни врага, и опционально выводим сообщение о победе
        if (enemy.health <= 0) {
            console.log("%c " + this.name + " won!", 'color: #000; background-color: #fff; font-weight: bold');
        }
    };
    return Fighter;
}());
/* harmony default export */ __webpack_exports__["a"] = (Fighter);
;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fighter__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__improvedFighter__ = __webpack_require__(2);


//Type inference
var gameEnd = false;
var fight = function (fighter, improvedFighter) {
    var point = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        point[_i - 2] = arguments[_i];
    }
    gameEnd = false;
    // Начало матча
    console.log("%c In the red corner:", 'background: #bb0000;');
    console.table({ fighter: fighter });
    console.log("%c In the blue corner:", 'background: #0000bb;');
    console.table({ improvedFighter: improvedFighter });
    console.log("%c LET THE FIGHT BEGIN!!!", 'color: #fb1;font-weight: bold');
    // Счётчик текущего раунда
    var round = 1;
    var hitsCount = point.length;
    var dmg = 0;
    do {
        console.log("\u2588 Round " + round + " \u2588");
        // Выбираем рандомную цифру урона из переданных, при инициализации битвы
        dmg = point[Math.floor(Math.random() * (hitsCount))];
        fighter.hit(improvedFighter, dmg);
        if (improvedFighter.health <= 0) {
            gameEnd = true;
        }
        // Выбираем рандомную цифру урона из переданных, при инициализации битвы
        if (!gameEnd) {
            dmg = point[Math.floor(Math.random() * (hitsCount))];
            improvedFighter.hit(fighter, dmg);
            round++;
        }
        if (fighter.health <= 0) {
            gameEnd = true;
        }
    } while (!gameEnd);
};
var startFight = function () {
    var fighter1 = new __WEBPACK_IMPORTED_MODULE_0__fighter__["a" /* default */]("Killer3000");
    var fighter2 = new __WEBPACK_IMPORTED_MODULE_1__improvedFighter__["a" /* default */]("Nagibator99");
    fight(fighter1, fighter2, 35, 88, 100, 53);
};
startFight();
//Misc
var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.clear();
    startFight();
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fighter__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// Создаём класс, который наследует Fighter (health и power - по умолчанию)
var ImprovedFighter = (function (_super) {
    __extends(ImprovedFighter, _super);
    function ImprovedFighter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImprovedFighter.prototype.doubleHit = function (enemy, point) {
        if (point === void 0) { point = 5; }
        _super.prototype.hit.call(this, enemy, point * 2);
    };
    return ImprovedFighter;
}(__WEBPACK_IMPORTED_MODULE_0__fighter__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (ImprovedFighter);


/***/ })
/******/ ]);
//# sourceMappingURL=main.map