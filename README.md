1. Вход в приложение, авторизация
Приложение должно содержать два уровня доступа. Неавторизованному пользователю
должна быть доступна только страница ввода данных (логин, пароль). После
аутентификации пользователь получает доступ к своему списку задач.
2. Список задач
Список задач пользователя, представленный в скрам виде и списком с возможностью
сортировки списка, фильтрации (по приоритету и по оценки) и смены представления
(списк/scrum доска).
3. Страница задачи
Страница с подробной информацией о задаче - название, описание, дата, приоритет,
планируемое и затраченное время, статус выполнения.

Для входа два юзера:
    
    login: 'one_and_only',
    password: '123'

    login: 'second_one',
    password: 'insecurepassword'
