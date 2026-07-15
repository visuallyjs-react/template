import {useSurface, useZoom} from "@visuallyjs/browser-ui-react";

export default function ShowZoom() {

    const surface = useSurface()
    const zoom = useZoom(surface)

    return <div>Zoom:{zoom.toFixed(2)}</div>
}
