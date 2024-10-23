/* global hexo */

'use strict';

hexo.extend.filter.register('stylus:renderer', function(style) {
        style.include(require('node_modules-path')());
})
