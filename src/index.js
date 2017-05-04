import { VideoBackground as VideoBackgroundRenderer } from '@squarespace/video-background-rendering';
import getVideoProps from './GetVideoPropsFromNode';

function VideoBackground(element, afterInitialize) {
  const rootNode = element.querySelector('.sqs-video-background');
  const props = getVideoProps(rootNode);
  let renderer;

  const scaleRendererVideo = () => {
    renderer.scaleVideo();
  };

  const instantiateRenderer = () => {
    renderer = new VideoBackgroundRenderer(props);
  };

  const destroyRenderer = () => {
    renderer.destroy();
  };

  if (typeof afterInitialize === 'function') {
    afterInitialize({
      instantiateRenderer,
      destroyRenderer,
      scaleRendererVideo
    });
  }

  instantiateRenderer();

  return {
    destroy: destroyRenderer
  };
}

export default VideoBackground;
