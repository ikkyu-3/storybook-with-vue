import { storiesOf } from "@storybook/vue";

import HelloWorld from "./HelloWorld.vue";

storiesOf("HelloWorld", module).add("msg: Message", () => ({
  components: { HelloWorld },
  data: () => {
    return {
      msg: "Message"
    };
  },
  template: '<HelloWorld :msg="msg" />'
}));
