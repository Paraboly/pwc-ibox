import { Component, h, Prop, Listen } from "@stencil/core";

@Component({
  tag: "pwc-ibox-content",
  styleUrl: "../pwc-ibox.scss",
  shadow: false
})
export class PWCIboxContentComponent {
  @Prop() minimized: boolean = false;

  @Listen("pwcIboxTools_minimizeClicked", { target: "window" })
  minimizedHandler(event: CustomEvent) {
    console.log(
      "pwc-ibox-content received pwcIboxTools_minimizeClicked",
      event.detail
    );
    this.minimized = !this.minimized;
    console.log("pwc-ibox-content minimized: " + this.minimized, event.detail);
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
