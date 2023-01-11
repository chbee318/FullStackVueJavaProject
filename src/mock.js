const Mock = require('mockjs')

const Random = Mock.Random

let Result = {
    code: 200,
    msg: "successful",
    data: null
}

Mock.mock('/captcha', 'get', () => {
    Result.data = {
        token: Random.string(32),
        captchaImg: Random.dataImage('120x40', 'p7n5w')
    }

    return Result
})

Mock.mock('/login', 'post', () => {
    Result.code = 400
    Result.msg = "Wrong code"
    return Result
})

Mock.mock('/sys/settings', 'get', () => {
    Result.data = {
        id: "1",
        username: "User",
        avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    }
    return Result
})

Mock.mock('/logout', 'post', () => {
    return Result
})