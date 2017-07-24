import Fighter, { IFighter } from './fighter';

export interface IImprovedFighter extends IFighter {
	doubleHit: (enemy: IFighter | IImprovedFighter, point: number) => void;
}
// Создаём класс, который наследует Fighter (health и power - по умолчанию)
export default class ImprovedFighter extends Fighter implements IImprovedFighter {
	doubleHit(enemy: IFighter | IImprovedFighter, point = 5) {
		super.hit(enemy, point * 2)
	}
}