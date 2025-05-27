import { fetchComments } from './modules/api.js'
import { setComments } from './modules/comments.js'
import { initReplyListeners } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'
fetchComments().then((comments) => {
    setComments(comments.comments)
    renderComments()
})

initReplyListeners()
