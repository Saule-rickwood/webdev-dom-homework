import { fetchComments } from './api.js'
import { setComments } from './comments.js'
import { renderComments } from './renderComments.js'

let isFirstRender = true
export function fetchAndRenderComments() {
    if (isFirstRender === true) {
        document.querySelector('.loading-text').textContent =
            'Подождите, комментарии загружаются...'
        isFirstRender = false
    }

    return fetchComments().then((comments) => {
        document.querySelector('.loading-text').textContent = ''
        setComments(comments.comments)
        renderComments()
    })
}
