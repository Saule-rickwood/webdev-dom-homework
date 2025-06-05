const host = 'https://wedev-api.sky.pro/api/v1/saule-rickwood'

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
