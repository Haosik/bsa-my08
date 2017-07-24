import {IImprovedFighter} from './improvedFighter';

export interface IFighter {
	name: string;
	power: number;
	health: number;
	setDamage: (damage: number) => void;
	hit: (enemy: IFighter | IImprovedFighter, point: number) => void;
}

// Создаём класс, которому передаём параметры:
// string name, number power, number health
export default class Fighter implements IFighter {
	name: string;
	power: number;
	health: number;
	// power по умолчанию: рандом от 1 до 10
	constructor(name: string = "Fighter-XX", power: number = Math.floor((Math.random() * 10) + 1), health: number = 1000) {
		this.name = name,
			this.power = power,
			this.health = health
	}
	// Наносим урон этой сущности
	setDamage(damage: number) {
		this.health -= damage;
		console.log(`${this.name}'s health: ${this.health}`);
	}
	// Эта сущность наносит урон по enemy
	hit(enemy: IFighter | IImprovedFighter, point: number = 5) {
		let damage: number = (point * this.power)
		// Проверяем, не закончена ли игра, и тогда бьём по врагу
		if (enemy.health >= 0) {
			enemy.setDamage(damage)
		}
		// Сразу после удара проверяем жизни врага, и опционально выводим сообщение о победе
		if (enemy.health <= 0) {
			console.log(`%c ${this.name} won!`, 'color: #000; background-color: #fff; font-weight: bold')
		}
	}
};