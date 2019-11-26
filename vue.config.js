const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // publicPath: './',
    // outputDir: 'dist',
    // lintOnSave: true,
    chainWebpack: (config) => {
        config.module
            .rule('mxClient')
                .test(/mxClient\.js$/)
                .use('exports-loader')
                    .loader('exports-loader?mxClient,mxGraphModel,mxActor,mxShape,mxEventObject,mxGraph,mxPrintPreview,mxEventSource,mxRectangle,mxVertexHandler,mxMouseEvent,mxGraphView,mxImage,mxGeometry,mxRubberband,mxKeyHandler,mxDragSource,mxGraphModel,mxEvent,mxUtils,mxWindow,mxEvent,mxCodec,mxCell,mxConstants,mxPoint,mxGraphHandler,mxCylinder,mxCellRenderer,mxEvent,mxUndoManager')
                    .end()
        config.module
            .rule('styl')
                .test(/\.styl$/)
                .use('stylus-loader')
                    .loader('stylus-loader')
                    .options({
                        'include css': true,
                        'resolve url': true,
                        'import': '~kpc/styles/themes/ksyun/index.styl'
                    })
                    .end()
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('kpc', 'kpc/@vue/@stylus')
    },
}
