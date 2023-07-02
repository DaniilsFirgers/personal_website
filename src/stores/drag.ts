import { defineStore } from "pinia";

type DragEvent = MouseEvent | TouchEvent;

export const useDragStore = defineStore("drag", {
  state: () => ({
    pos1: 0,
    pos2: 0,
    pos3: 0,
    pos4: 0,
    dragging: false,
  }),
  actions: {
    startDrag(event: DragEvent) {
      this.pos3 = getClientX(event);
      this.pos4 = getClientY(event);

      this.dragging = true;
    },
    endDrag() {
      this.dragging = false;
    },
    moveDrag(event: DragEvent, element: HTMLElement) {
      if (!this.dragging) return;
      event.preventDefault();

      const clientX = getClientX(event);
      const clientY = getClientY(event);

      this.pos1 = this.pos3 - clientX;
      this.pos2 = this.pos4 - clientY;
      this.pos3 = clientX;
      this.pos4 = clientY;

      element.style.top = `${element.offsetTop - this.pos2}px`;
      element.style.left = `${element.offsetLeft - this.pos1}px`;
    },

    setInitalPlacement(
      element: HTMLElement,
      windowWidth: number,
      windowHeight: number
    ) {
      element.style.top = `${windowHeight / 3}px`;
      element.style.left = `${windowWidth / 3.5}px`;
    },

    handleWindowResize(element: HTMLElement) {
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth ||
        0;
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight ||
        0;
      this.setInitalPlacement(element, windowWidth, windowHeight);
    },
  },
});

function getClientX(event: DragEvent): number {
  if (event instanceof MouseEvent) {
    return event.clientX;
  } else if (event instanceof TouchEvent) {
    return event.touches[0].clientX;
  }
  return 0;
}

function getClientY(event: DragEvent): number {
  if (event instanceof MouseEvent) {
    return event.clientY;
  } else if (event instanceof TouchEvent) {
    return event.touches[0].clientY;
  }
  return 0;
}
