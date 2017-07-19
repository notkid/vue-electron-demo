export default class particle{
  constructor(opt) {
    this.radius = 7;
    this.x = undefined;
    this.y = undefined;
    this.angle = undefined;
    this.speed = undefined;
    this.accel = undefined;
    this.decay = 0.01;
    this.life = 1;
    Object.assign(this, opt);
  }

  draw(i, env) {
    env.ctx.fillStyle = env.ctx.fillStyle = `hsla(${env.tick + this.life * 120}, 100%, 60%, ${this.life})`;
    env.ctx.beginPath();
    if(env.particles[i - 1]) {
      env.ctx.moveTo(this.x, this.y0);
      env.ctx.lineTo(env.particles[i - 1].x, env.particles[i - 1].y);
    }
    env.ctx.stroke();
    env.ctx.beginPath();
    env.ctx.arc(this.x, this.y, Math.max(.001, this.life * this.radius), 0, Math.PI * 2);
    env.ctx.fill();

    const size = Math.random() * 1.25;
    env.ctx.fillRect(~~(this.x + ((Math.random() - .5)* 35) * this.life), ~~(this.y + ((Math.random() - .5) * 35) * this.life), size, size);
  }

  step(i, env) {
    this.speed += this.accel;
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.angle += Math.PI / 64;
    this.accel *= 1.01;
    this.life -= this.decay;
    if (this.life <= 0) {
      env.particles.splice(i, 1);
    }
  }

}
