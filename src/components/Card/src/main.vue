<script lang="tsx">
 import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    props: [
      'header',
      'bodyStyle'
    ],
  })
  export default class Card extends Vue {
    functional = true
    
    render (h, context) {
      let cardHeader = () => {
        console.log(context.slots)
        if (context.slots().header || context.header) {
          return (
            <div
              class="card__header">
                {context.slots().header || context.header}
            </div>
          )
        }
      }
      return (
        <div
           class="card">
          {cardHeader()}
          <div
            class="card__body"
            style={context.bodyStyle}>
            {context.slots().default}
          </div>
        </div>
      )
    }
  }
  
</script>
 