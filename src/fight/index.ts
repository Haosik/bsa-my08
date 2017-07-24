import Fighter, {IFighter} from './fighter';
import ImprovedFighter, {IImprovedFighter} from './improvedFighter';

//Type inference
let gameEnd = false;

let fight = (fighter: IFighter, improvedFighter: IImprovedFighter, ...point: number[]) => {

	gameEnd = false;
	// Начало матча
	console.log(`%c In the red corner:`, 'background: #bb0000;');
	console.table({ fighter });
	console.log(`%c In the blue corner:`, 'background: #0000bb;');
	console.table({ improvedFighter });
	console.log(`%c LET THE FIGHT BEGIN!!!`, 'color: #fb1;font-weight: bold');

	// Счётчик текущего раунда
	let round: number = 1;
	let hitsCount: number = point.length;
	let dmg: number = 0;
	do {
		console.log(`█ Round ${round} █`)
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
}

let startFight = () => {
	let fighter1 = new Fighter("Killer3000");
	let fighter2 = new ImprovedFighter("Nagibator99");
	fight(fighter1, fighter2, 35, 88, 100, 53);
}
startFight();

//Misc
const startBtn = document.getElementById('start-btn') as HTMLButtonElement;
startBtn.addEventListener('click', function (e) {
	e.preventDefault();
	console.clear();
	startFight();
});