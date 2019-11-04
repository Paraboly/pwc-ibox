import { Component, h } from "@stencil/core";

@Component({
  tag: "pwc-ibox",
  styleUrl: "../pwc-ibox.scss",
  shadow: false
})
export class MyComponent {
  render() {
    return (
      <div class="ibox">
        <slot />
      </div>
    );
  }
}
