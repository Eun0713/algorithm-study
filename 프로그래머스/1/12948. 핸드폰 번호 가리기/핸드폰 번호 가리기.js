function solution(phone_number) {
    const phoneLength = phone_number.length;
    const masked = "*".repeat(phoneLength - 4);
    const lastFourNumber = phone_number.slice(-4);
    
    return masked + lastFourNumber;
}