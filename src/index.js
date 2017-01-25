import { VideoBackground as VideoBackgroundRenderer } from '@sqs/video-background-rendering';
import getVideoProps from './GetVideoPropsFromNode';
import { Tweak } from '@sqs/core';

function VideoBackground(element, tweaksToWatch) {
  const rootNode = element.querySelector('.sqs-video-background');
  const props = getVideoProps(rootNode);
  let renderer = new VideoBackgroundRenderer(props);

  const destroy = () => {
    renderer.destroy();
  };

  if (tweaksToWatch) {
    Tweak.watch(tweaksToWatch, () => {
      renderer.destroy();
      renderer = new VideoBackgroundRenderer(props);
    });
  }

  return { destroy };
}

export default VideoBackground;
