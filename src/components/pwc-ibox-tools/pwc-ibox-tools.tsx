import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "pwc-ibox-tools",
  styleUrl: "../pwc-ibox.scss",
  shadow: false
})
export class PWCIboxToolsComponent {
  @Prop() closeButton: boolean = true;
  @Prop() minimizeButton: boolean = true;

  @Event() pwcIboxTools_minimizeClicked: EventEmitter;
  @Event() pwcIboxTools_closeClicked: EventEmitter;

  render() {
    return (
      <div class="ibox-tools">
        <slot />
        {this.minimizeButton && (
          <button onClick={() => this.pwcIboxTools_minimizeClicked.emit()}>
            Minimize
          </button>
        )}
        {this.closeButton && (
          <button onClick={() => this.pwcIboxTools_closeClicked.emit()}>
            Close
          </button>
        )}
      </div>
    );
  }
}
