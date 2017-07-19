<template>

</template>

<script>
import Particle from './class.js';

export default {
  data() {
    return {
      particles: [],
      canvas: document.createElement('canvas'),
      ctx: null,
      width: 0,
      height: 0,
      min: 0,
      globalAngle: 0,
      globalRotation: 0,
      tick: 0,
    };
  },
  methods: {
    step() {
      this.particles.push(new Particle({
        x: (this.width / 2) + (Math.cos(this.tick / 20) * this.min / 2),
        y: this.height /2 + Math.sin(this.tick / 20) * this.min / 2,
        angle: this.globalRotation + this.globalAngle,
        speed: 0,
        accel: .01
      }));
      this.particles.forEach((ele, index) => {
        ele.step(index, this);
      })
      this.globalRotation += Math.PI /6;
      this.globalAngle += Math.PI /6;
    },
    draw() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.particles.forEach((ele, index) => {
        ele.draw(index, this);
      });
    },
    init() {
      this.ctx = this.canvas.getContext('2d');
      this.width = this.canvas.width = 300;
      this.height = this.canvas.height = 300;
      this.min = this.width * .5;
      this.ctx.globalCompositeOperation = 'lighter';
      document.body.appendChild(this.canvas);
      this.loop();
    },
    loop() {
      // requestAnimationFrame(this.loop);
      setTimeout(this.loop, 100);
      this.step();
      this.draw();
      this.tick ++;
    },
  },
  mounted() {
    this.init();
  }

};
</script>

<style lang="css">
canvas {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateZ(0);
}
</style>
