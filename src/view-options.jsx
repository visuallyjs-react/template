import {ArrowOverlay, EVENT_TAP} from "@visuallyjs/browser-ui";

/**
 * View options map node/group types to the JSX used to render them and to various aspects of the given vertex type's
 * behaviour. They also allow you to map edge types to edge appearance and behaviour, although for simple config
 * you can use the `edges` render option in place of an edge mapping a view (see code above).
 */
const viewOptions = {
    // These are mappings for node type. They are in fact optional; if you don't provide them, VisuallyJs will
    // use a default JSX. But in most apps you're probably going to want to provide JSX for your nodes.
    nodes:{
        // Node mapping for type `hello`
        hello:{
            // This is the JSX used to render a node of type `hello`
            jsx:(ctx) => <div className="vjs-hello">{ctx.obj.data.label}<div className="vjs-hello-connect" data-vjs-source="true" title="Drag edge to a World node"/></div>,
            // event mappings for nodes of type `hello`
            events: {
                [EVENT_TAP]: (p) => {
                    alert(`${p.obj.data.label}!`)
                }
            }
        },
        // Node mapping for type `world`
        world:{
            // This is the JSX used to render a node of type `world`
            jsx:(ctx) => <div className="vjs-world" data-vjs-target="true">{ctx.obj.data.label}</div>,
            // event mappings for nodes of type `world`
            events: {
                [EVENT_TAP]: (p) => {
                    alert(`You tapped on a World node with id ${p.obj.id}`)
                }
            }
        }
    },
    // These are edge mappings. In this app we have one, which applies to all edges because its type is `default`.
    // Note that for many use cases you can setup edge appearance/behaviour in the `edges` renderOption, for settings
    // that should apply to all edges. But for more advanced use cases you're going to want to provide edge mappings.
    edges:{
        default:{
            // Place an Arrow at the target end of every edge
            targetMarker:ArrowOverlay.type,
            events:{
                // on tap, remove the edge
                [EVENT_TAP]:(p) => p.model.removeEdge(p.obj)
            }
        }
    }
}

export default viewOptions
