import { user } from './api.js'
import { initAddCommentListeners } from './initListeners.js'
import { renderLogin } from './renderLogin.js'

export const renderForm = () => {
    console.log(user)
    document.querySelector('.form').innerHTML = user
        ? `
     <div class="add-form">
        <input
          type="text"
          id="name-field"
          class="add-form-name"
          placeholder="Введите ваше имя"
          value='${user.name}'
          readonly
        />
        <textarea
          type="textarea"
          id="comment-field"
          class="add-form-text"
          placeholder="Введите ваш коментарий"
          rows="4"
        ></textarea>
        <div class="add-form-row">
          <button class="add-form-button">Написать</button>
        </div>
      </div>`
        : `<p>Пожалуйста, <a class="sign-in" href="#" > авторизуйтесь </a></p>`
    if (user) {
        initAddCommentListeners()
    } else {
        document
            .querySelector('.sign-in')
            .addEventListener('click', renderLogin)
    }
}
