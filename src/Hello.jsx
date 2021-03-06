import { defineComponent, useAttrs } from "vue";

export default defineComponent({
  name:'Hello',
  render() {
    const { msg } = useAttrs();
    return <h1>jsx {msg}</h1>;
  },
});
