var inds = [{l:"a", i:0}, {l:"b", i:736}, {l:"c", i:1644}, {l:"d", i:2564}, {l:"e", i:3245}, {l:"f", i:3548}, {l:"g", i:4143}, {l:"h", i:4780}, {l:"i", i:5268}, {l:"j", i:5433}, {l:"k", i:5635}, {l:"l", i:6010}, {l:"m", i:6585}, {l:"n", i:7278}, {l:"o", i:7603}, {l:"p", i:7865}, {l:"q", i:8722}, {l:"r", i:8800}, {l:"s", i:9428}, {l:"t", i:10988}, {l:"u", i:11803}, {l:"v", i:11992}, {l:"w", i:12234}, {l:"x", i:12645}, {l:"y", i:12661}, {l:"z", i:12842}];

function match(word) {
  let points = []
  //find the group of words starting with the same letter as the input.
  find:for (i = 0; i < inds.length; i++) {
    if (word[0] == inds[i].l) {
      points.push(inds[i].i);
      points.push(inds[i+1].i - 1);
      break find;
    }
  }

  //match the word
  for (i = points[0]; i <= points[1]; i++) {
    if (word == words[i]) {
      //word is valid
      
    }
  }
}