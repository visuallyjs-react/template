import {BackgroundPlugin, GeneratedGridBackground, LabelOverlay, LassoPlugin} from "@visuallyjs/browser-ui";

/**
 * Render options control the basic behaviour and appearance of the UI. There are a lot of render options available,
 * and we'd encourage you to read the docs for a full overview, but we've included a few here to give you some
 * food for thought.
 */
const renderOptions = {

    // If you uncomment this line, when a new edge drag begins, only matching targets will be active. The decision
    // about what is an active target is made in the `beforeConnect` of the modelOptions.
    // activeFiltering:true,

    // Instruct the surface to zoom the content to fit the viewport on load.
    zoomToFit:true,
    // General setup that applies to all edges.
    edges: {
        // This overlay will appear on every edge. It extracts its label from the `lang` property in the edge's
        // backing data.
        overlays: [
            {
                type: LabelOverlay.type,
                options: {
                    label:"{{lang}}"
                }
            }
        ]
    },
    // Plugins to use in the canvas.
    plugins:[
        // For plugins that do not need any config, you can just supply their type id.
        LassoPlugin.type,
        {
            // for plugins that require some config, provide type+options.
            // Here we're adding a grid background, using its default setup.
            type:BackgroundPlugin.type,
            options:{
                type:GeneratedGridBackground.type
            }
        }
    ]
}

export default renderOptions
