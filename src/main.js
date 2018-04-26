import Vue from 'vue';
import App from './App.vue';

import mojs from 'mo-js';

const color = () => {
  const colors = [
    { burst: '#667eea', bubbles: '#8da0f5' },
    { burst: '#43e97b', bubbles: '#78f5a2' },
    { burst: '#f78ca0', bubbles: '#fdc4ce' }
  ];
  return colors[Math.floor(Math.random() * (colors.length + 1))];
};

const c = color();

const burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 0: 30 },
  angle: 'rand(0, 360)',
  children: {
    shape: 'line',
    stroke: c.burst,
    strokeLinecap: 'round',
    scale: 1,
    scaleX: { 1: 0 },
    easing: 'cubic.out',
    duration: 1000
  }
});

const bubbles = new mojs.Burst({
  left: 0,
  top: 0,
  radius: 28,
  count: 3,
  timeline: { delay: 100 },
  children: {
    stroke: c.bubbles,
    fill: 'none',
    scale: 1,
    strokeWidth: { 8: 0 },
    radius: { 0: 'rand(6, 10)' },
    degreeShift: 'rand(-50, 50)',
    duration: 400,
    delay: 'rand(0, 250)'
  }
});

document.addEventListener('click', e => {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .replay()
    .generate();

  bubbles
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
});

new Vue({
  el: '#app',
  render: h => h(App)
});
