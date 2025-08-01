function solution(n, k) {
    let yangKkochiPrice = n * 12000;
    let drinkPrice =(k - Math.floor(n / 10)) * 2000;
    
    const result = yangKkochiPrice + drinkPrice;
    
    return result;
}