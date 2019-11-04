import { Component, h, Prop, Listen, Method } from "@stencil/core";

@Component({
  tag: "pwc-ibox",
  styleUrl: "../pwc-ibox.scss",
  shadow: false
})
export class PWCIboxComponent {
  @Prop() closed: boolean = false;

  @Listen("pwcIboxTools_closeClicked", { target: "window" })
  closedHandler(event: CustomEvent) {
    console.log("pwc-ibox captured pwcIboxTools_closeClicked", event.detail);
    this.closed = true;
  }

  render() {
    let classArr = ["ibox"];

    if (this.closed) {
      classArr.push("ibox-closed");
    }

    let classStr = classArr.join(" ");

    return (
      <div class={classStr}>
        <slot />
      </div>
    );
  }
}
