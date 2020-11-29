import { toCanvas } from 'qrcode';
import type { QRCodeRenderersOptions } from 'qrcode';
import { RenderQrCodeParams, ContentType } from './types';
export const renderQrCode = ({ canvas, content, width = 0, options = {} }: RenderQrCodeParams) => {
  // __Some-New-Token__，__Some-New-Token__，__Some-New-Token__
  options.errorCorrectionLevel = options.errorCorrectionLevel || getErrorCorrectionLevel(content);

  return getOriginWidth(content, options).then((_width: number) => {
    options.scale = width === 0 ? undefined : (width / _width) * 4;
    return toCanvas(canvas, content, options);
  });
};

// __Some-New-Token__QrCode__Some-New-Token__，__Some-New-Token__QrCode__Some-New-Token__
function getOriginWidth(content: ContentType, options: QRCodeRenderersOptions) {
  const _canvas = document.createElement('canvas');
  return toCanvas(_canvas, content, options).then(() => _canvas.width);
}

// __Some-New-Token__QrCode，__Some-New-Token__
function getErrorCorrectionLevel(content: ContentType) {
  if (content.length > 36) {
    return 'M';
  } else if (content.length > 16) {
    return 'Q';
  } else {
    return 'H';
  }
}
