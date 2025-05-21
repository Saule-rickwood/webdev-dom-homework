import { comments } from './comments.js'
import { renderComments } from './renderComments.js'
import { sanitiseHtml } from './sanitiseHtml.js'

export const initLikelisteners = () => {
    const likeButtons = document.querySelectorAll('.like-button')
    for (const likeButton of likeButtons) {
        likeButton.addEventListener('click', (event) => {
            event.stopPropagation()
            const id = likeButton.dataset.id
            const isLiked = likeButton.dataset.liked

            comments[id - 1].isLiked = !comments[id - 1].isLiked
            comments[id - 1].likeCounter += isLiked === 'true' ? -1 : 1
            renderComments()
        })
    }
}

export const initReplyListeners = () => {
    const button = document.querySelector('.add-form-button')
    const input = document.getElementById('name-field')
    const input2 = document.getElementById('comment-field')
    button.addEventListener('click', () => {
        if (!input.value.trim() || !input2.value.trim()) {
            alert('Введите имя и комментарий')
            return
        }

        const newComment = {
            id: comments.length + 1,
            name: sanitiseHtml(input.value),
            comment: sanitiseHtml(input2.value),
            date:
                new Date().toLocaleDateString('ru-RU') +
                new Date().toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                }),
            likeCounter: 0,
            isLiked: false,
        }
        comments.push(newComment)
        renderComments()
        input.value = ''
        input2.value = ''
    })
}

export function quoteComment() {
    const commentBlocks = document.querySelectorAll('.comment')
    for (const commentBlock of commentBlocks) {
        commentBlock.addEventListener('click', () => {
            const textInput = document.querySelector('.add-form-text')
            textInput.value =
                commentBlock.querySelector('.comment-text').textContent
        })
    }
}
