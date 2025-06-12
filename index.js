import { fetchAndRenderComments } from './modules/fetchAndRenderComments.js'
import { renderForm } from './modules/renderForm.js'

// initAddCommentListeners()
export function renderApp() {
    fetchAndRenderComments().then(() => {
        renderForm()
    })
}
renderApp()
