const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    lintOnSave: true,
    chainWebpack: (config) => {
        config.module
            .rule('mxClient')
                .test(/mxClient\.js$/)
                .use('exports-loader')
                    .loader('exports-loader?mxClient,mxToolbar,mxConnectionHandler,mxEllipse,mxConnectionConstraint,mxWindow,' +
                        'mxObjectCodec,mxGraphModel,mxActor,mxPopupMenu,mxShape,mxEventObject,mxGraph,mxPopupMenuHandler,mxPrintPreview,' +
                        'mxEventSource,mxRectangle,mxVertexHandler,mxMouseEvent,mxGraphView,mxCodecRegistry,mxImage,mxGeometry,' +
                        'mxRubberband,mxConstraintHandler,mxKeyHandler,mxDragSource,mxGraphModel,mxEvent,mxUtils,mxEvent,mxCodec,mxCell,' +
                        'mxConstants,mxPoint,mxGraphHandler,mxCylinder,mxCellRenderer,mxEvent,mxUndoManager')
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
