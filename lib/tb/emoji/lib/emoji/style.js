'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var style = {
    container: {
        position: 'relative'
    },
    modalContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: 0,
        top: 20,
        border: '1px solid #ddd',
        zIndex: 10,
        background: 'white'
    },
    modalEmojiContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'auto',
        height: 200
    },
    emojiContainer: {
        padding: 10
    },
    emojiItem: {
        width: 30,
        height: 30,
        backgroundSize: 'cover'
    },
    emojiTextItem: {
        display: 'flex',
        width: 80,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addonContainer: {
        display: 'flex'
    },
    addonItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        padding: 5
    },
    addonItemActive: {
        background: '#337ab7',
        color: 'white'
    }
};

exports.default = style;