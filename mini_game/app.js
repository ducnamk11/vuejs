new Vue({
el:'#app',
data:{
playerHealth :100,
monsterHealth :100,
gameIsRunning: false
},
methods:{
		startNewGame: function(){
			this.gameIsRunning =true;
			this.playerHealth =100;
			this.monsterHealth =100;
		},
		attack: function(){
	 	// monster
			if (this.checkPlayerOption()) {
				 return;
			}
			
			this.monsterHealth -= this.inputDamage(15,4);
	 	
			this.playerHealth -= this.inputDamage(15,4);
			this.checkPlayerOption();
		},
		specialAttack: function(){
				if (this.checkPlayerOption()) {
				 return;
			}
			
			this.monsterHealth -= this.inputDamage(25,20);
	 	
			this.playerHealth -= this.inputDamage(15,4);
		},
		heal: function(){
			if (this.playerHealth > 70) {
				return false;
			}else if(this.playerHealth > 60){
				this.playerHealth =70;
			}else{
				this.playerHealth +=10;
			}
		},
		giveUp: function(){
			this.playerHealth=0
				if (confirm('you lost ! new game ?')) {
					this.startNewGame();
					return;
				}else{
					this.gameIsRunning = false;
				}
				return 	true;
		},
		inputDamage: function(maxDamage,minDamage){
			return  Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
		},
		checkPlayerOption: function(){
			if (this.monsterHealth<=0) {
				if (confirm('you win ! new game ?')) {
					this.startNewGame();
					return;
				}else{
					this.gameIsRunning = false;
				}
				return 	true;
			}	
			if (this.playerHealth<=0) {
				if (confirm('you lost ! new game ?')) {
						this.startNewGame();
					return;
				}else{
					this.gameIsRunning = false;
				}
				return 	true;
			}	
			return;	
		},
	}
});