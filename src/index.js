module.exports = function towelSort(matrix) {
    if (matrix === undefined) return []
    return matrix
        .map((item, index) => {
            item =
                index % 2 == 0
                    ? item.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
                    : item
                          .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
                          .reverse()
            return item
        })
        .flat()
}
