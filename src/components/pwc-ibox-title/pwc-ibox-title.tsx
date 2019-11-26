import { Component, h } from "@stencil/core";

@Component({
  tag: "pwc-ibox-title",
  styleUrl: "../pwc-ibox.scss",
  shadow: false
})
export class PWCIboxtitleComponent {
  render() {
    return (
      <div class="ibox-title">
        <slot />
      </div>
    );
  }
}
