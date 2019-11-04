import { Component, h, Prop, Listen } from "@stencil/core";

@Component({
  tag: "pwc-ibox-footer",
  styleUrl: "../pwc-ibox.scss",
  shadow: false
})
export class PWCIboxFooterComponent {
  @Prop() minimized: boolean = false;

  @Listen("pwcIboxTools_minimizeClicked", { target: "window" })
  minimizedHandler(event: CustomEvent) {
    console.log(
      "pwc-ibox-footer received pwcIboxTools_minimizeClicked",
      event.detail
    );
    this.minimized = !this.minimized;
    console.log("pwc-ibox-footer minimized: " + this.minimized, event.detail);
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
