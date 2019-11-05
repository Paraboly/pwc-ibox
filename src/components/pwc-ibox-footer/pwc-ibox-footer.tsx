import { Component, h, Prop, Listen } from "@stencil/core";

@Component({
  tag: "pwc-ibox-footer",
  styleUrl: "../pwc-ibox.scss",
  shadow: true
})
export class PWCIboxFooterComponent {
  @Prop() minimized: boolean = false;

  @Listen("pwcIboxTools_minimizeClicked", { target: "window" })
  minimizedHandler() {
    this.minimized = !this.minimized;
  }

  render() {
    let classArr = ["ibox-footer"];

    if (this.minimized) {
      classArr.push("ibox-footer-minimized");
    }

    let classStr = classArr.join(" ");

    return (
      <div class={classStr}>
        <slot />
      </div>
    );
  }
}
