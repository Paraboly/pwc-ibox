import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "pwc-ibox-tools",
  styleUrl: "../pwc-ibox.scss",
  shadow: false
})
export class MyComponent {
  @Prop() closeButton: boolean;
  @Prop() minimizeButton: boolean;

  render() {
    return (
      <div class="ibox-tools">
        <slot />
        {this.minimizeButton && <span>Minimize</span>}
        {this.closeButton && <span>Close</span>}
      </div>
    );
  }
}
