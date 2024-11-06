function dnaStrand(dna) {
    const basePairs = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    };
  
    return dna.split('').map(base => basePairs[base]).join('');
  }

  module.exports = dnaStrand;