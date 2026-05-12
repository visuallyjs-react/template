import {
    SurfaceProvider,
    SurfaceComponent,
    PaletteComponent,
    ControlsComponent,
    MiniviewComponent
} from "@visuallyjs/browser-ui-react"

import renderOptions from './render-options'
import viewOptions from './view-options'
import modelOptions from './model-options'

import greetings from './greetings.js'

function App({url}) {

  return <div className="vjs-template">
      { /* SurfaceProvider gives the context for the palette component to find the surface to attach to */}
      <SurfaceProvider>
      { /* Provides a drag/drop palette for new nodes */}
      <PaletteComponent className="vjs-demo-palette">
          { /*
                we write out the Hello nodes first, with `data-vjs-**` attributes that specify
                the dataset to create when each node is dragged. Then we write out the World nodes.
          */}
          {greetings.map(g => <div data-vjs-type="hello" data-vjs-label={g.h} className="vjs-hello" data-vjs-lang={g.lang}>{g.h}</div>)}
          {greetings.map(g => <div data-vjs-type="world" data-vjs-label={g.w} className="vjs-world" data-vjs-lang={g.lang}>{g.w}</div>)}
      </PaletteComponent>
        { /*
            Provides the canvas. we supply renderOptions, viewOptions and modelOptions. All of these are optional, but
            we include them here to help you see what's possible.
        */}
        <SurfaceComponent renderOptions={renderOptions}
                          viewOptions={viewOptions}
                          modelOptions={modelOptions}
                          url={url}>
            { /* buttons for zoom to fit, lasso, undo/redo etc */}
            <ControlsComponent/>
            { /* provide a pannable and zoomable mini view of the canvas */}
            <MiniviewComponent/>
        </SurfaceComponent>
    </SurfaceProvider>
  </div>
}

export default App
