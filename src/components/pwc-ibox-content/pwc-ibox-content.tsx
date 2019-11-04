import { Component, h } from "@stencil/core";

@Component({
  tag: "pwc-ibox-content",
  styleUrl: "pwc-ibox-content.scss",
  shadow: false
})
export class MyComponent {
  render() {
    return (
      <div class="ibox-content">
        <slot />
      </div>
    );
  }
}
