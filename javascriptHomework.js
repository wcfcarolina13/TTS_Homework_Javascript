// Rock paper scissors

// Computer's choice method


function game() {
	let player_count = 0;
	let enemy_count = 0;
	let game_counter = 0;
	let enemyArray = ["rock", "paper", "scissors"];
	do {
		let choice = prompt("Rock, paper, or scissors?");
		let enemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
		game_counter += 1;
		if (choice == "rock") {
			if (enemy == "rock") {
			  console.log("tie");
			} else if (enemy == "paper") {
			  console.log("I win");
			  enemy_count += 1;
			} else if (enemy == "scissors") {
			  console.log("I lose");
			  player_count += 1;
			}
		} else if (choice == "paper") {
			if (enemy == "rock") {
		  		console.log("I lose");
		  		player_count += 1;
		    } else if (enemy == "paper") {
		  		console.log("Tie");
			} else if (enemy == "scissors") {
				console.log("I win");
				enemy_count += 1;
		  	}
		} else if (choice == "scissors") {
			if (enemy == "rock") {      
				console.log("I win");
		  		enemy_count += 1;
		  	} else if (enemy == "paper") {
		  		console.log("I lose");
		  		player_count += 1;
		  	} else if (enemy == "scissors" ) {
		 		console.log("Tie");
		 	}
		}
	} while (player_count != 5 || enemy_count != 5);
	console.log(`Player Score: ${player_count}`);
	console.log(`Computer Score: ${enemy_count}`);
	console.log(`Games Played: ${game_counter}`);
}

game();




