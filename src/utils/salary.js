export const getSalary = (salaryMin, salaryMax) => {
    if (!salaryMin && !salaryMax) {
        return 'Размер заработной платы не указан'
    };

    if (!salaryMax) {
        return `Заработная плата от ${salaryMin}`
    }

    return `Заработная плата от ${salaryMin} до ${salaryMax}`;
}