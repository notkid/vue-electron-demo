<template>
  <canvas id="galaxy" width="300" height="300"></canvas>
</template>

<script>
export default {
  data() {
    return {
      galaxy: {},
      ww: 0,
      wh: 0,
      orbs: [],
    };
  },
  methods: {
    draw(mx, my) {
      const ctx = this.galaxy;
      const dx = (this.ww/2) - mx;
      const dy = (this.wh/2) - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      this.orbs.push({
        x: mx,
        y: my,
        lastX: mx,
        lastY: my,
        hue: 0,
        colorAngle: 0,
        angle: angle + Math.PI / 2,
        size: this.rand(1, 3) / 2,
        centerX: ww / 2,
        centerY: wh / 2,
        radius: dist,
        speed: (rand(5, 10) / 1000) * (dist / 750) + .015,
        alpha: 1 - Math.abs(dist) / ww,
        paint: () => {
          const ctx = this.galaxy;
          ctx.strokeStyle = `hsla(${this.colorAngle}, 100%, 50%, 1)`;
          ctx.lineWidth = this.size;
          ctx.beginPath();
          ctx.moveTo(this.lastX, this.lastY);
          ctx.lineTo(this.x, this.y);
          ctx.stroke();
        },
        update: () => {
          const mx = this.x;
          const my = this.y;
          this.lastX = this.x;
          this.
        }
      })
    },
    orbGo(e) {
      const mx = e.pageX - this.galaxy.offsetLeft;
      const my = e.pageY - this.galaxy.offsetTop;
      this.draw(mx, my);
    },
    turnOnMove() {
      this.galaxy.addEventListener('mousemove', this.orbGo, false);
    },
    turnOffMove() {
      this.galaxy.removeEventListener('mousemove', this.orbGo, false);
    },
    rand(rMi, rMa) {
      return ~~((Math.random() * (rMa - rMi + 1)) + rMi);
    }
  },
  mounted() {
    this.ww = window.innerWidth;
    this.wh = window.innerHeight;
    const galaxy = document.getElementById('galaxy');
    this.galaxy = galaxy.getContext('2d');
    this.draw();
    galaxy.addEventListener('mousedown', this.orbGo, false);
    galaxy.addEventListener('mousedown', this.turnOnMove, false);
  },
};
</script>

<style lang="css">
</style>
