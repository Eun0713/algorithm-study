function solution(x) {
  let digitSum = 0;
  const digitChars = x.toString();

  for (let char of digitChars) {
    digitSum += Number(char);
  }

  if (x % digitSum === 0) {
    return true;
  }

  return false;
}