const host = 'https://wedev-api.sky.pro/api/v1/saule-rickwood'

export const fetchComments = () => {
    return fetch(host + '/comments')
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((data) => {
            console.log(data)
            return data
        })
}
export const postComments = (data) => {
    return fetch(host + '/comments', {
        method: 'POST',
        body: JSON.stringify(data),
    }).then((res) => {
        console.log(res)
    })
}
