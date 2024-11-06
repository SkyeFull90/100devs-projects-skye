function past(h, m, s){
  // Check if the input constraints are met
  if (0 <= h && h <= 23 && 0 <= m && m <= 59 && 0 <= s && s <= 59) {
    // Convert hours, minutes, and seconds to milliseconds
      let h_to_ms = h * 60 * 60 * 1000;
      let m_to_ms = m * 60 * 1000;
      let s_to_ms = s * 1000;

      // Return the total time since midnight in milliseconds
    return h_to_ms + m_to_ms + s_to_ms;
  } else {
    return "Invalid input";
  }
}
console.log(past(0, 1, 1)); // 61000

module.exports = past;