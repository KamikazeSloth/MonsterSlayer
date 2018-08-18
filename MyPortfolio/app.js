new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame: function(){
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		attackMonster: function(){

			var damage = this.calculateDamage(2,10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits monster for ' + damage
			});
			if(this.checkWin()){
				return;
			}
			this.monsterAttack();
		},
		healPlayer: function(){
			if(this.playerHealth <= 100){
				var heal = 20;
				this.playerHealth += heal;
				this.turns.unshift({
				isPlayer: true,
				text: 'healed: ' + heal
			});
				setTimeout(this.monsterAttack, 1000);
				setTimeout(this.clearLog, 4000);
				if(this.playerHealth >=100){
					this.playerHealth = 100;
				}
				return;
			}
		},
		clearLog: function(){
			this.turns = [];
		},
		resetGame: function(){
			this.gameIsRunning = false;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.clearLog();
		},
		specialAttack: function(){

		},
		calculateDamage: function(minDmg, maxDmg){
			return Math.max(Math.floor(Math.random() * maxDmg) + 1, minDmg);
		},
		monsterAttack: function(){
			var damage = this.calculateDamage(5,12);
			this.playerHealth -= damage;
			this.checkWin();
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits player for ' + damage
			});
		},
		checkWin : function(){
			if(this.monsterHealth <= 0){
				if(confirm('You won! New Game?')){
					this.startGame();
				}else{
					this.gameIsRunning = false;
				}
				return true;
			}else if(this.playerHealth <=0){
				if(confirm('You lost! New Game?')){
					this.startGame();
				}else{
					this.gameIsRunning = false;
				}
				return true;
			}
				return false;
		}

	}
});