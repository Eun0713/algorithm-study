function solution(n) {
  let prevPrev = 0;  
  let prev = 1;      

  for (let i = 2; i <= n; i++) {
    const current = (prevPrev + prev) % 1234567;
    prevPrev = prev;
    prev = current;
  }

  return prev;
}
