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
//Изолируем игру
function game() {
    var gameEnd = false;
    // Создаём класс, которому передаём параметры:
    // string name, number power, number health
    var Fighter = (function () {
        // power по умолчанию: рандом от 1 до 10
        function Fighter(name, power, health) {
            if (name === void 0) { name = "Fighter-XX"; }
            if (power === void 0) { power = Math.floor((Math.random() * 10) + 1); }
            if (health === void 0) { health = 1000; }
            this.name = 'name',
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
            if (!gameEnd) {
                enemy.setDamage(damage);
            }
            // Сразу после удара проверяем жизни врага, и опционально выводим сообщение о победе
            if (enemy.health <= 0) {
                console.log("%c " + this.name + " won!", 'color: #000; background-color: #fff; font-weight: bold');
                gameEnd = true;
            }
        };
        return Fighter;
    }());
    ;
    // Создаём класс, который наследует Fighter (health и power - по умолчанию)
    var ImprovedFighter = (function (_super) {
        __extends(ImprovedFighter, _super);
        function ImprovedFighter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // TODO Добавить шанс двойного удара при fight
        ImprovedFighter.prototype.doubleHit = function (enemy, point) {
            if (point === void 0) { point = 5; }
            _super.prototype.hit.call(this, enemy, point * 2);
        };
        return ImprovedFighter;
    }(Fighter));
    // Создаём бойца - сущность класса Fighter (health и power - по умолчанию)
    var fighter1 = new Fighter("Killer3000");
    // Создаём супербойца - сущность класса ImprovedFighter
    var fighter2 = new ImprovedFighter("Nagibator99");
    // Начало матча
    console.log("%c In the red corner:", 'background: #bb0000;');
    console.table({ fighter1: fighter1 });
    console.log("%c In the blue corner:", 'background: #0000bb;');
    console.table({ fighter2: fighter2 });
    console.log("%c LET THE FIGHT BEGIN!!!", 'color: #fb1;font-weight: bold');
    var fight = function (fighter, improvedFighter) {
        var point = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            point[_i - 2] = arguments[_i];
        }
        // Счётчик текущего раунда
        var round = 1;
        var hitsCount = point.length;
        var dmg = 0;
        do {
            console.log("\u2588 Round " + round + " \u2588");
            // Выбираем рандомную цифру урона из переданных, при инициализации битвы
            dmg = point[Math.floor(Math.random() * (hitsCount))];
            fighter.hit(improvedFighter, dmg);
            // Выбираем рандомную цифру урона из переданных, при инициализации битвы
            dmg = point[Math.floor(Math.random() * (hitsCount))];
            improvedFighter.hit(fighter, dmg);
            round++;
        } while (!gameEnd);
    };
    // Инициализируем битву между двумя бойцами и передаём туда желаемые цифры урона
    return fight(fighter1, fighter2, 35, 88, 100, 53);
}
;
//Запускаем игру
game();
//Misc
var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.clear();
    game();
});
