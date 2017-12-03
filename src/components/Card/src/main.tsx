import { Vue, Component, Prop } from "vue-property-decorator"
@Component
  export default class Card extends Vue {
   @Prop() header: string
   @Prop() bodyStyle: object

    render (h) {
      console.log(this.header)
      let cardHeader = () => {
        if (this.$slots.header || this.header) {
          return (
            <div
              class="card__header">
                {this.$slots.header || this.header}
            </div>
          )
        }
      }
      console.log(cardHeader())
      return (
        <div
           class="card">
          {cardHeader()}
          <div
            style={this.bodyStyle}
            class="card__body">
            {this.$slots.default}
          </div>
        </div>
      )
    }
  }
  
 