function solution(babbling) {
    const combinedRegex = /^(aya|ye|woo|ma)+$/
    
    return babbling.filter((word) =>
      !['aya', 'ye', 'woo', 'ma'].some((sound) => word.includes(sound + sound)) &&
      combinedRegex.test(word)
    ).length;
}