const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь с таким email не был найден',
    INVALID_PASSWORD: 'Пароль не правильный'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'неизвестная ошибка'
}