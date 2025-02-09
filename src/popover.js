class Popover {
    constructor(element, title, content) {
      this.element = element;
      this.title = title;
      this.content = content;
      this.popover = null;
      this.wrapper = document.createElement("div");
  
      this.init();
    }
  
    init() {
      console.log("Popover initialized");
  
      this.wrapper.style.position = "relative";
      this.wrapper.style.display = "inline-block";
      this.wrapper.style.textAlign = "center";
      this.wrapper.style.width = "100%";
  
      this.element.parentNode.insertBefore(this.wrapper, this.element);
      this.wrapper.appendChild(this.element);
  
      this.element.addEventListener("click", () => this.togglePopover());
    }
  
    createPopover() {
      console.log("Creating popover");
  
      if (this.popover) {
        this.popover.remove();
      }
  
      this.popover = document.createElement("div");
      this.popover.classList.add("popover");
      this.popover.innerHTML = `
        <div class="popover-arrow"></div>
        <div class="popover-inner">
          <div class="popover-title">${this.title}</div>
          <div class="popover-content">${this.content}</div>
        </div>
      `;
  
      this.wrapper.insertBefore(this.popover, this.element);
      this.positionPopover();
    }
  
    positionPopover() {
      console.log("Positioning popover");
  
      this.popover.style.position = "absolute";
      this.popover.style.bottom = `100%`;
      this.popover.style.left = `50%`;
      this.popover.style.transform = "translateX(-50%)";
      this.popover.style.marginBottom = "10px";
      this.popover.style.zIndex = "1000";
      this.popover.style.display = "block";
  
      const popoverRect = this.popover.getBoundingClientRect();
      const buttonRect = this.element.getBoundingClientRect();
  
      if (buttonRect.top - popoverRect.height - 10 < 0) {
        console.log("Недостаточно места сверху! Двигаем кнопку вниз.");
        this.wrapper.style.marginTop = `${popoverRect.height + 20}px`;
      }
    }
  
    togglePopover() {
      console.log("Toggle popover clicked");
      if (this.popover) {
        this.popover.remove();
        this.popover = null;
        this.wrapper.style.marginTop = "0";
      } else {
        this.createPopover();
      }
    }
  }
  
  export default Popover;
  
  