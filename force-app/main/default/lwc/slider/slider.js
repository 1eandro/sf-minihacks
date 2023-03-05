import { LightningElement } from "lwc";

export default class LightningExampleSliderBasic extends LightningElement {
  val = 2;
  clicks = 0;

  handleChange(event) {
    const targetValue = event.target.value;
    const curEvent = new CustomEvent("sliderclicked", {
      detail: {
        count: targetValue,
        clicks: ++this.clicks
      },
    });
    this.dispatchEvent(curEvent);
  }
}
