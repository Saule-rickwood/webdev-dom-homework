import { fetchAndRenderComments } from './modules/fetchAndRenderComments.js'
import { renderForm } from './modules/renderForm.js'

// initAddCommentListeners()
export function renderApp() {
    const containerEl = document.querySelector('.container')
    containerEl.innerHTML = ` 
     <p class="loading-text"></p>
    <ul class="comments"></ul>
    <p class="add-comment-text"></p>
   <div class="form"></div>`

    fetchAndRenderComments().then(() => {
        renderForm()
    })
}
renderApp()
