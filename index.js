/* global hexo */

'use strict';

hexo.extend.filter.register('stylus:renderer', function(style) {
        style.set('paths', require('node_modules-path')());
})
