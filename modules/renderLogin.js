import { renderApp } from '../index.js'
import { setUser, signIn } from './api.js'

export const renderLogin = () => {
    document.querySelector('.container').innerHTML = `
     
        <input
          type="text"
          id="name-field"
          class="add-form-name"
          placeholder="Введите ваш логин"
        />
        <input
          type="password"
          id="comment-field"
          class="add-form-text"
          placeholder="Введите ваш пароль"
         
       />
        <div class="add-form-row">
          <button class="add-form-button">Войти</button>
        </div>`
    document.querySelector('.add-form-button').addEventListener('click', () => {
        signIn({
            login: document.querySelector('.add-form-name').value,
            password: document.querySelector('.add-form-text').value,
        })
            .then((data) => {
                console.log(data)
                setUser(data.user)
                // document.querySelector('.login-form').innerHTML = ''
                renderApp()
            })
            .catch((error) => {
                alert(error.message)
            })
    })
}
