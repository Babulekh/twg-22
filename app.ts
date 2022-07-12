import { GameManager } from './scripts';

const gManager = GameManager.Instance;

gManager.level = 0;
document.body.appendChild(gManager.view);
