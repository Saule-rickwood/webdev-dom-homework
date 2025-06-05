import { comments } from './comments.js'
import { initLikelisteners, quoteComment } from './initListeners.js'

export function renderComments() {
    const commentEl = document.querySelector('.comments')
    const commentsHtml = comments
        .map((item) => {
            return `<li class="comment">
        <div class="comment-header">
          <div>${item.author.name}</div>
           <div>${new Date().toLocaleDateString(
               'ru-RU',
           )} ${new Date().toLocaleTimeString('ru-RU', {
               hour: '2-digit',
               minute: '2-digit',
           })}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${item.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${item.likes}</span>
            <button data-id="${item.id}" data-liked="${item.isLiked}"
         class="like-button ${
             item.isLiked === true ? '-active-like' : ''
         }"></button>
          </div>
        </div>
      </li>`
        })
        .join(' ')
    console.log(commentsHtml)

    commentEl.innerHTML = commentsHtml
    initLikelisteners()
    quoteComment()
}
