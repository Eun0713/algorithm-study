function solution(n)
{
    let sum = 0;
    const digits = n.toString();
    
    for (let digit of digits) {
        sum += Number(digit)
    }

    return sum;
}