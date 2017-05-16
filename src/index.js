import { VideoBackground as VideoBackgroundRenderer } from '@squarespace/video-background-rendering';
import getVideoProps from './GetVideoPropsFromNode';

function VideoBackground(element, afterInitialize) {
  const rootNode = element.querySelector('.sqs-video-background');
  const props = getVideoProps(rootNode);
  let renderer = new VideoBackgroundRenderer(props);

  const handleResize = () => {
    renderer.scaleVideo();
  };

  const handleTweak = () => {
    renderer.destroy();
    renderer = new VideoBackgroundRenderer(props);
  };

  if (typeof afterInitialize === 'function') {
    afterInitialize({
      handleResize,
      handleTweak
    });
  }

  return {
    destroy: () => {
      renderer.destroy();
    }
  };
}

export default VideoBackground;
