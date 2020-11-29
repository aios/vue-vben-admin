import { Modal } from 'ant-design-vue';
import { defineComponent, watchEffect } from 'vue';
import { basicProps } from './props';
import { useTimeoutFn } from '/@/hooks/core/useTimeout';
import { extendSlots } from '/@/utils/helper/tsxHelper';

export default defineComponent({
  name: 'Modal',
  inheritAttrs: false,
  props: basicProps,
  setup(props, { attrs, slots }) {
    const getStyle = (dom: any, attr: any) => {
      return getComputedStyle(dom)[attr];
    };
    const drag = (wrap: any) => {
      if (!wrap) return;
      wrap.setAttribute('data-drag', props.draggable);
      const dialogHeaderEl = wrap.querySelector('.ant-modal-header');
      const dragDom = wrap.querySelector('.ant-modal');

      if (!dialogHeaderEl || !dragDom || !props.draggable) return;

      dialogHeaderEl.style.cursor = 'move';

      dialogHeaderEl.onmousedown = (e: any) => {
        if (!e) return;
        // __Some-New-Token__，__Some-New-Token__
        const disX = e.clientX;
        const disY = e.clientY;
        const screenWidth = document.body.clientWidth; // body__Some-New-Token__
        const screenHeight = document.documentElement.clientHeight; // __Some-New-Token__(__Some-New-Token__body__Some-New-Token__，__Some-New-Token__)

        const dragDomWidth = dragDom.offsetWidth; // __Some-New-Token__
        const dragDomheight = dragDom.offsetHeight; // __Some-New-Token__

        const minDragDomLeft = dragDom.offsetLeft;

        const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;
        const minDragDomTop = dragDom.offsetTop;
        const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomheight;
        // __Some-New-Token__px __Some-New-Token__
        const domLeft = getStyle(dragDom, 'left');
        const domTop = getStyle(dragDom, 'top');
        let styL = +domLeft;
        let styT = +domTop;

        // __Some-New-Token__ie__Some-New-Token__ __Some-New-Token__50% __Some-New-Token__px
        if (domLeft.includes('%')) {
          styL = +document.body.clientWidth * (+domLeft.replace(/%/g, '') / 100);
          styT = +document.body.clientHeight * (+domTop.replace(/%/g, '') / 100);
        } else {
          styL = +domLeft.replace(/px/g, '');
          styT = +domTop.replace(/px/g, '');
        }

        document.onmousemove = function (e) {
          // __Some-New-Token__，__Some-New-Token__
          let left = e.clientX - disX;
          let top = e.clientY - disY;

          // __Some-New-Token__
          if (-left > minDragDomLeft) {
            left = -minDragDomLeft;
          } else if (left > maxDragDomLeft) {
            left = maxDragDomLeft;
          }

          if (-top > minDragDomTop) {
            top = -minDragDomTop;
          } else if (top > maxDragDomTop) {
            top = maxDragDomTop;
          }

          // __Some-New-Token__
          dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`;
        };

        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    };

    const handleDrag = () => {
      const dragWraps = document.querySelectorAll('.ant-modal-wrap');
      for (const wrap of dragWraps as any) {
        if (!wrap) continue;
        const display = getStyle(wrap, 'display');
        const draggable = wrap.getAttribute('data-drag');
        if (display !== 'none') {
          // __Some-New-Token__
          (draggable === null || props.destroyOnClose) && drag(wrap);
        }
      }
    };

    watchEffect(() => {
      if (!props.visible) {
        return;
      }
      useTimeoutFn(() => {
        handleDrag();
      }, 30);
    });

    return () => {
      const propsData = { ...attrs, ...props } as any;
      return <Modal {...propsData}>{extendSlots(slots)}</Modal>;
    };
  },
});
