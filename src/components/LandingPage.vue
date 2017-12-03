<template>
  <div id="wrapper">
    <card
      :bodyStyle="{padding: 0}"
      header="12">
      <div slot="header">header</div>
      <div>body</div>
    </card>
  </div>
</template>

<script>
  import Card from './Card/src/main'
  export default {
    name: 'landing-page',
    components: {
      Card
    },
    methods: {
    },
  };
</script>
