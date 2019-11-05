import { Component, h, Prop, Listen } from "@stencil/core";

@Component({
  tag: "pwc-ibox-content",
  styleUrl: "../pwc-ibox.scss",
  shadow: true
})
export class PWCIboxContentComponent {
  @Prop() minimized: boolean = false;

  @Listen("pwcIboxTools_minimizeClicked", { target: "window" })
  minimizedHandler() {
    this.minimized = !this.minimized;
  }

  render() {
    let classArr = ["ibox-content"];

    if (this.minimized) {
      classArr.push("ibox-content-minimized");
    }

    let classStr = classArr.join(" ");

    return (
      <div class={classStr}>
        <slot />
      </div>
    );
  }
}
