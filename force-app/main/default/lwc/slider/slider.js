import { LightningElement } from "lwc";

export default class LightningExampleSliderBasic extends LightningElement {
  val = 2;
  clicks = 0;
  timer;

  handleChange(event) {
    clearTimeout(this.timer);
    const targetValue = event.target.value;
    this.timer = setTimeout(() => {
      const curEvent = new CustomEvent("sliderclicked", {
        detail: {
          count: targetValue,
          clicks: ++this.clicks,
        },
      });
      this.dispatchEvent(curEvent);
    }, 200);
  }
}
