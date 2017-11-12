export const FAQ = [
    {
        id: 1,
        title: 'Как перейти (check out) на конкретную ветвь (branch)?',
        description: 'Используйте команду git checkout ...'
    },
    {
        id: 2,
        title: 'Как настроить автора коммитов?',
        description: 'git config --global user.name "John Smith"'
    },
    {
        id: 3,
        title: 'Как изменить автора последнего коммита?',
        description: 'git commit --amend --author="John Smith <john.smith@gmail.com>"'
    },
    {
        id: 4,
        title: 'Как просмотреть список ветвей в удаленном источнике?',
        description: 'git branch -r'
    },
    {
        id: 5,
        title: 'Как удалить коммит?',
        description: 'git reset --hard <sha1-commit-id>'
    },
];