function sumAll(numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

export default sumAll;