import { postComments } from './api.js'
import { comments } from './comments.js'
import { fetchAndRenderComments } from './fetchAndRenderComments.js'
import { renderComments } from './renderComments.js'
import { sanitiseHtml } from './sanitiseHtml.js'

export const initLikelisteners = () => {
    const likeButtons = document.querySelectorAll('.like-button')
    for (const likeButton of likeButtons) {
        likeButton.addEventListener('click', (event) => {
            event.stopPropagation()
            const id = likeButton.dataset.id
            const isLiked = likeButton.dataset.liked
            const comment = comments.find((c) => c.id === +id)
            console.log(id, comment)
            comment.isLiked = !comment.isLiked
            comment.likes += isLiked === 'true' ? -1 : 1
            renderComments()
        })
    }
}

export const initAddCommentListeners = () => {
    const button = document.querySelector('.add-form-button')
    const input = document.getElementById('name-field')
    const input2 = document.getElementById('comment-field')
    button.addEventListener('click', () => {
        if (!input.value.trim() || !input2.value.trim()) {
            alert('Введите имя и комментарий')
            return
        }
        document.querySelector('.add-comment-text').textContent =
            'Комментарий добавляется'
        document.querySelector('.add-form').style.display = 'none'
        const newComment = {
            name: sanitiseHtml(input.value),
            text: sanitiseHtml(input2.value),
        }
        postComments(newComment).then(() => {
            document.querySelector('.add-comment-text').textContent = ''
            document.querySelector('.add-form').style.display = 'flex'
            fetchAndRenderComments()
        })

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
