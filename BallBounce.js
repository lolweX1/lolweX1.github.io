const canv = document.getElementById("BallBoing");
		const c = canv.getContext("2d");
		const scale = window.devicePixelRatio;
		
		const width = 800;
		const height = 600;
		
		canv.style.width = width + "px";
		canv.style.height = height + "px";
		
		canv.width = width;
		canv.height = height;
		
		let end = false;
		
		const ballVelo = {
			"x": 0
			,"y": 0
		}
		const ballPos = {
			"x": 150
			,"y": 150
		}
		const ballRadius = 15;
		const ballElasticity = 0.7;
		const gravity = 0.98;
		
		function drawCircle(x, y, radius, color) {
			c.beginPath();
			c.arc(x, y, radius, 0, 2 * Math.PI);
			c.fillStyle = color;
			c.fill();
		}
		
		function update() {
			c.fillStyle = "black";
			c.fillRect(0, 0, canv.width, canv.height);
			
			drawCircle(ballPos.x, ballPos.y, ballRadius, "white");
			
			ballVelo.y += gravity;
			
			if (ballPos.y+ballVelo.y > canv.height - ballRadius) {
				ballPos.y = canv.height - ballRadius;
				ballVelo.y = ballVelo.y * -1 * ballElasticity;

				if (Math.abs(ballVelo.y) < 2) {
					ballVelo.y = 0;
				}
			}
			
			
			ballPos.x += ballVelo.x;
			ballPos.y += ballVelo.y;
			
			if (!end) {
				requestAnimationFrame(update);
			}
		} 
		requestAnimationFrame(update);
