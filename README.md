Squarespace Video Background
------------------------------

A partial, styles, and scripts for use with @squarespace/video-background-rendering

*NOTICE: This code is licensed to you pursuant to Squarespace’s Developer Terms of Use. See license section below.*

## Usage

````sh
npm install --save @squarespace/video-background
````

### Installing Toolbelt

This is a Squarespace web module. To handle the markup, styles, and configuration files in this module, you'll need to install [Squarespace Toolbelt](https://github.com/Squarespace/squarespace-toolbelt) as a development dependency and use its `assemble` functionality.

```sh
npm install --save-dev @squarespace/toolbelt
```

### Usage - vanilla

````js
var VideoBackgroundRenderer = require('@sqs/video-background').VideoBackground;
var GetVideoProps = require('@sqs/video-background').getVideoProps;

var container = document.body.querySelectorAll('.sqs-video-background');
var videoBackground = new VideoBackgroundRenderer(GetVideoProps(container));
});
````

### Usage - with `@squarespace/controller`

```js
import controller from '@squarespace/controller';
import VideoBackground from '@squarespace/video-background';

controller.register('VideoBackground', (element) => {
  return VideoBackground(element, ['tweak-page-banner-image-height', 'tweak-show-page-banner-image']);
});
```

### Using ES6

If you prefer to handle transpiling and polyfilling on your own, you can import ES6 from Video Backgroun:

```js
import controller from '@squarespace/video-background/src';
```

Alternately, Video Background specifies a `module` property in `package.json` that points to the uncompiled `src/index.js`, so you may be able to simply import `@squarespace/video-background` if you're using one of the following bundlers:
* [Webpack 2](https://webpack.js.org/configuration/resolve/#resolve-mainfields)
* [Rollup](https://github.com/rollup/rollup-plugin-node-resolve#rollup-plugin-node-resolve)


## Reference

### new VideoBackground(element, tweaksToWatch)
**Params**
* element `HTMLElement` - container for the video background
* [tweaksToWatch] `Array` - names of tweak options to watch to reinitialize the video background. To be used in the Squarespace Controller implementation

### GetVideoProps(container)
Use the data attributes of the container to set configuration options for the video background renderer. The YouTube or Vimeo URL should be set on the container element via `data-config-url="SOME-URL"`.

### VideoBackground.destroy()
Unbind listeners and destroy the instance of the video background renderer.

## License
Portions Copyright © 2016 Squarespace, Inc. This code is licensed to you pursuant to Squarespace’s Developer Terms of Use, available at http://developers.squarespace.com/developer-terms-of-use (the “Developer Terms”). You may only use this code on websites hosted by Squarespace, and in compliance with the Developer Terms. TO THE FULLEST EXTENT PERMITTED BY LAW, SQUARESPACE PROVIDES ITS CODE TO YOU ON AN “AS IS” BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
