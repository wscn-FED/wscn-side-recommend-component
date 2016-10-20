import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "ullist-container": {
        "listStyle": "none",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "flexWrap": "wrap",
        "marginTop": 100,
        "marginRight": "auto",
        "marginBottom": 100,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "maxWidth": 300,
        "border": "1px solid #e6e6e6",
        "minHeight": 300
    },
    "loading-tip": {
        "textAlign": "center"
    },
    "ullist-container list-item": {
        "borderTop": "1px solid #e6e6e6",
        "borderBottom": "1px solid #e6e6e6",
        "marginBottom": 10
    },
    "ullist-container list-item:first-child": {
        "borderTop": "none"
    },
    "ullist-container list-item:last-child": {
        "marginBottom": 0,
        "borderBottom": "none"
    },
    "ullist-container list-item a": {
        "display": "block",
        "width": "100%",
        "height": 100,
        "textDecoration": "none"
    },
    "list-info": {
        "marginLeft": 100,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "height": 80
    },
    "info-inner": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-between",
        "flexWrap": "wrap",
        "height": "100%"
    },
    "info-title": {
        "fontSize": 13,
        "color": "#4a4a4a",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "ullist-container list-image": {
        "float": "left",
        "width": 100,
        "height": 100,
        "display": "block"
    },
    "user-wrap": {
        "fontSize": 12,
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between"
    },
    "user-link": {
        "display": "flex",
        "color": "#999",
        "alignItems": "center"
    },
    "user-avatar": {
        "width": 20,
        "height": 20,
        "borderRadius": "50%"
    },
    "username": {
        "paddingLeft": 10
    },
    "time": {
        "paddingRight": 10,
        "color": "#999"
    },
    "ullist-containerdark": {
        "backgroundColor": "#070707",
        "borderLeft": "1px solid rgba(255,255,255,0.3)",
        "borderRight": "1px solid rgba(255,255,255,0.3)"
    },
    "ullist-containerdark list-item": {
        "borderTop": "1px solid rgba(255,255,255,0.3)",
        "borderBottom": "1px solid rgba(255,255,255,0.3)"
    },
    "ullist-containerdark info-title": {
        "color": "#ffffff"
    },
    "ullist-containerdark user-link": {
        "color": "rgba(255,255,255,0.8)"
    },
    "ullist-containerdark time": {
        "color": "rgba(255,255,255,0.8)"
    }
});