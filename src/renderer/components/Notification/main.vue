<template>
  <transition name="el-notification-fade">
    <div
      class="el-notification"
      :class="customClass"
      v-show="visible"
      :style="{ top: top ? top + 'px' : 'auto'}"
      @mouseenter="clearTimer()"
      @mouseleave="startTimer()"
      @click="click">
      <i
        class="el-notification__icon"
        :class="[ typeClass, iconClass ]"
        v-if="type || iconClass">
      </i>
      <div class="el-notification__group" :class="{ 'is-with-icon': typeClass || iconClass }">
        <h2 class="el-notification__title" v-text="title"></h2>
        <div class="el-notification__content">
          <slot>{{ message }}</slot>
        </div>
        <div class="el-notification__closeBtn el-icon-close" @click.stop="close">
        </div>
      </div>
    </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      message: '1123',
      closed: false,
    };
  },
  methods: {
    click() {
      this.false = true;
      if (typeof this.onClick === 'function') {
        this.onClick();
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    destoryElement() {
      this.$el.removeEventListener('transitioned', this.destoryElement);
      this.$destory(true);
      this.$el.parentNode.removeChild(this.$el);
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style lang="css">
</style>
