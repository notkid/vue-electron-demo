import { Vue, Component, Prop } from "vue-property-decorator"

const card = {
  padding: '20px',
  borderRadius: '4px',
  overflow: 'hidden',
  boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
  color: '#2d2f33',
  backgroundColor: '#fff',
  border: '1px solid #e6ebf5',
}
const card_header = {
  borderBottom: '1px solid #e6ebf5',
  boxSizing: 'border-box'
}

@Component
export default class Card extends Vue {
  @Prop() header: string
  @Prop() bodyStyle: object

  render (h) {
    return (
      <div
          style={card}>
        {CardHeader(this.$slots.header,
                    this.header,
                    card_header,
                    h)}
        <div
          style={this.bodyStyle}>
          {this.$slots.default}
        </div>
      </div>
    )
  }
}

function CardHeader (
  header,
  slotHeader,
  card_header,
  h
) {
  if (slotHeader || header) {
    return (
      <div
        style={card_header}>
        {slotHeader || header}
      </div>
    )
  }
}
