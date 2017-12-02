// declare namespace JSX {
//   interface Element { }
//   interface IntrinsicElements { div: any; }
// }
//  import Vue from 'vue'
//  import { Vue } from 'vue-property-decorator'
// import Vue from 'vue'
 import {fnal} from './decoration'
//  import {
//   Component, Prop, Watch, Lifecycle, p
// } from 'av-ts'

import { Vue, Component, Prop } from "vue-property-decorator"
@Component
  export default class Card extends Vue {
    // @fnal('functional') true
  
  //  $prop: {
  //    header: String
  //  }
   @Prop() header: string

    render (h, context) {
      console.log(this.header)
      let cardHeader = () => {
        // if (this.$slots.header) {
          return (
            <div
              class="card__header">
                {this.header}
            </div>
          )
        // }
      }
      console.log(cardHeader())
      return (
        <div
           class="card">
           {this.header}
          {cardHeader()}
          <div
            class="card__body">
            {this.$slots.default}
          </div>
        </div>
      )
    }
  }
  
 