/**
 * Model options allow you to control VisuallyJs at the model level. They are optional; here we have included two,
 * just to give you an idea of what they can do. You can delete these modelOptions and the app will run fine.
 *
 * - The `beforeConnect` interceptor prevents edges being established between two vertices that do not have the
 * same `lang`.
 *
 * - The `beforeStartConnect` interceptor is used in this app to prepare an initial payload for the edge that is being
 * dragged. Here we extract `lang` from the source vertex and return it to use for the edge. In the renderOptions for
 * this app there is a `Label` overlay which extracts this value to show to the user.
 */
const modelOptions = {
    beforeConnect:(source, target) => {
        return source.data.lang === target.data.lang
    },
    beforeStartConnect:(source) => {
        return {
            lang:source.data.lang
        }
    }
}

export default modelOptions
