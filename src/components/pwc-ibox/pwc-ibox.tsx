import { Component, h, Prop, Listen } from "@stencil/core";

@Component({
  tag: "pwc-ibox",
  styleUrl: "../pwc-ibox.scss",
  shadow: true
})
export class PWCIboxComponent {
  @Prop() closed: boolean = false;

  @Listen("pwcIboxTools_closeClicked", { target: "window" })
  closedHandler() {
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
