document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    
    let mousePosition = { x: 0, y: 0 };
    let prevMousePosition = { x: 0, y: 0 };
    let mouseSpeed = 0;
    
    function setupCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    setupCanvas();
    
    // Configuration parameters
    const colors = ['#444', '#777', '#aaa', '#3b82f6', '#eab308'];
    const particleCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 15000), 150);
    const connectionDistance = 120; 
    const mouseRadius = 150; 
    const pushForce = 2.5; 
    const particleBaseSpeed = 0.3;
    const knockBackForce = 1.8; 
    
    const particlesArray = [];
    
    function createParticles() {
        particlesArray.length = 0; 
        
        for (let i = 0; i < particleCount; i++) {
            const size = Math.random() * 1.5 + 0.5; 
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const directionX = (Math.random() - 0.5) * particleBaseSpeed;
            const directionY = (Math.random() - 0.5) * particleBaseSpeed;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particlesArray.push({
                x,
                y,
                baseX: x, 
                baseY: y,
                directionX,
                directionY,
                size,
                color,
                pushed: false 
            });
        }
    }
    
    function isLineAffectedByMouse(p1, p2) {
        const maxCheckDistance = connectionDistance * 1.2; 
        
        const d1 = Math.hypot(mousePosition.x - p1.x, mousePosition.y - p1.y);
        const d2 = Math.hypot(mousePosition.x - p2.x, mousePosition.y - p2.y);
        
        if (d1 > maxCheckDistance && d2 > maxCheckDistance) return false;
        
        const lineLength = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        if (lineLength === 0) return false;
        
        const t = ((mousePosition.x - p1.x) * (p2.x - p1.x) + 
                 (mousePosition.y - p1.y) * (p2.y - p1.y)) / (lineLength * lineLength);
        
        if (t < 0 || t > 1) return false;
        
        const closestX = p1.x + t * (p2.x - p1.x);
        const closestY = p1.y + t * (p2.y - p1.y);
        
        const distToLine = Math.hypot(mousePosition.x - closestX, mousePosition.y - closestY);
        
        const movementMultiplier = 1 + Math.min(mouseSpeed * 0.03, 1.5); 
        const breakRadius = mouseRadius * 0.75 * movementMultiplier; 
        
        return distToLine < breakRadius;
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            const p = particlesArray[i];
            
            p.pushed = false;
            
            p.x += p.directionX;
            p.y += p.directionY;
            
            if (p.x > canvas.width) {
                p.x = canvas.width;
                p.directionX = -p.directionX;
            } 
            else if (p.x < 0) {
                p.x = 0;
                p.directionX = -p.directionX;
            }
            
            if (p.y > canvas.height) {
                p.y = canvas.height;
                p.directionY = -p.directionY;
            }
            else if (p.y < 0) {
                p.y = 0;
                p.directionY = -p.directionY;
            }
            
            const dx = mousePosition.x - p.x;
            const dy = mousePosition.y - p.y;
            const distance = Math.hypot(dx, dy);
            
            if (distance < mouseRadius) {
                p.pushed = true;
                
                const mdx = mousePosition.x - prevMousePosition.x;
                const mdy = mousePosition.y - prevMousePosition.y;
                const mouseMoveFactor = Math.min(mouseSpeed * 0.2, 3);
                
                const pushX = (dx / distance) * pushForce * (mouseRadius - distance) / mouseRadius;
                const pushY = (dy / distance) * pushForce * (mouseRadius - distance) / mouseRadius;
                
                const knockX = -mdx * knockBackForce * (1 - distance / mouseRadius);
                const knockY = -mdy * knockBackForce * (1 - distance / mouseRadius);
                
                p.x -= pushX + (knockX * mouseMoveFactor);
                p.y -= pushY + (knockY * mouseMoveFactor);
                
                const tempBoost = 0.5; 
                p.directionX -= (pushX + knockX * 0.3) * tempBoost * (1 + mouseMoveFactor * 0.3);
                p.directionY -= (pushY + knockY * 0.3) * tempBoost * (1 + mouseMoveFactor * 0.3);
            }
        }
        
        for (let i = 0; i < particlesArray.length; i++) {
            const p1 = particlesArray[i];
            
            for (let j = i + 1; j < particlesArray.length; j++) {
                const p2 = particlesArray[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.hypot(dx, dy);
                
                if (distance < connectionDistance && !isLineAffectedByMouse(p1, p2)) {
                    const opacity = 1 - (distance / connectionDistance);
                    
                    ctx.strokeStyle = `rgba(150, 150, 150, ${opacity * 0.5})`;
                    ctx.lineWidth = opacity * 0.8;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        
        for (let i = 0; i < particlesArray.length; i++) {
            const p = particlesArray[i];
            
            ctx.beginPath();
            const size = p.pushed ? p.size * (1.2 + Math.min(mouseSpeed * 0.01, 0.8)) : p.size; // Increase size when pushed
            ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
            ctx.fillStyle = p.pushed ? '#eab308' : p.color;
            ctx.fill();
            
            p.directionX *= 0.99;
            p.directionY *= 0.99;
        }
    }
    
    function animate() {
        draw();
        requestAnimationFrame(animate);
    }
    
    function handleMouseMove(event) {
        prevMousePosition = {...mousePosition};
        
        mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        
        const dx = event.clientX - prevMousePosition.x;
        const dy = event.clientY - prevMousePosition.y;
        const speed = Math.hypot(dx, dy);
        mouseSpeed = speed;
    }
    
    function handleResize() {
        setupCanvas();
        createParticles();
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    createParticles();
    animate();
});
