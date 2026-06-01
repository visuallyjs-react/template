# React Template Implementation

This document describes how the React Template is implemented using `@visuallyjs/browser-ui-react` and `@visuallyjs/browser-ui`.

## Components

The template uses several core components from `@visuallyjs/browser-ui-react`:

- **`SurfaceProvider`**: Provides the context for the VisuallyJS surface and associated components.
- **`PaletteComponent`**: Implements a drag-and-drop palette. It uses `data-vjs-*` attributes on its children to define the data for nodes created upon dragging.
- **`SurfaceComponent`**: The main canvas area where the nodes and edges are rendered.
- **`ControlsComponent`**: Provides standard zoom and pan controls.
- **`MiniviewComponent`**: Provides a navigation map of the surface.

## Configuration Options

The `SurfaceComponent` is configured with:

- **`renderOptions`**: Defines the overall visual style and behavior of the surface.
- **`viewOptions`**: Maps data types (e.g., "hello", "world") to their visual representations.
- **`modelOptions`**: Configures the underlying data model's behavior and constraints.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom styles for the template layout and the "hello/world" nodes are imported from `template.css`.
