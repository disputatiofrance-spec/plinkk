function runCanvasAnimation(ctx, canvas) {
    const NUM_FLAKES = 200;
    const FLAKE_SIZE_MIN = 2;
    const FLAKE_SIZE_MAX = 5;
    const FLAKE_SPEED_MIN = 0.5;
    const FLAKE_SPEED_MAX = 2;
    const WIND_SPEED = 0.5;
    const FLAKE_COLOR = 'white';
    const BACKGROUND_COLOR = 'grey';

    const flakes = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createFlake() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (FLAKE_SIZE_MAX - FLAKE_SIZE_MIN) + FLAKE_SIZE_MIN,
            speed: Math.random() * (FLAKE_SPEED_MAX - FLAKE_SPEED_MIN) + FLAKE_SPEED_MIN,
            wind: Math.random() * WIND_SPEED - WIND_SPEED / 2
        };
    }

    function drawFlake(flake) {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fillStyle = FLAKE_COLOR;
        ctx.fill();
        ctx.closePath();
    }

    function updateFlakes() {
        for (let i = 0; i < flakes.length; i++) {
            flakes[i].y += flakes[i].speed;
            flakes[i].x += flakes[i].wind;

            if (flakes[i].y > canvas.height) {
                flakes[i].y = -flakes[i].size;
                flakes[i].x = Math.random() * canvas.width;
            }

            if (flakes[i].x > canvas.width) {
                flakes[i].x = 0;
            } else if (flakes[i].x < 0) {
                flakes[i].x = canvas.width;
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < flakes.length; i++) {
            drawFlake(flakes[i]);
        }

        updateFlakes();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < NUM_FLAKES; i++) {
        flakes.push(createFlake());
    }

    animate();
}