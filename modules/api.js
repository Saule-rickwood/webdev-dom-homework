const host = 'https://wedev-api.sky.pro/api/v2/saule-rickwood'
export let user = null
export function setUser(value) {
    user = value
}
export const fetchComments = () => {
    return fetch(host + '/comments')
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .catch((error) => {
            alert(error.message)
        })
}
export const postComments = (data) => {
    return fetch(host + '/comments', {
        method: 'POST',
        body: JSON.stringify({ ...data, forceError: true }),
        headers: {
            Authorization: 'Bearer ' + user.token,
        },
    })
        .then((response) => {
            if (response.status === 500) {
                throw new Error('Ошибка сервера')
            }
            if (response.status === 400) {
                throw new Error('Неверный запрос')
            }
            if (response === 201) {
                return response.json()
            }
        })
        .then((res) => {
            console.log(res)
        })
}
export function signIn(data) {
    return fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(async (response) => {
        let status = response.status
        let responseData = await response.json()
        if (status === 500) {
            throw new Error('Ошибка сервера')
        }
        if (status === 400) {
            throw new Error(responseData.error)
        }
        if (status === 201) {
            return responseData
        }
    })
}
