var input = '01110110101001000';
var diskLength = 272;

var data = input;
while (data.length < diskLength) {
  var chars = data.split('');
  data = data + '0';
  while (chars.length > 0) {
    data += chars.pop() === '1' ? '0' : '1';
  }
}
data = data.substring(0, diskLength);

var checksum = data;
do {
  var newChecksum = '';
  for (var i = 0; i < checksum.length; i += 2) {
    newChecksum += checksum[i] === checksum[i + 1] ? '1' : '0';
  }
  checksum = newChecksum;
} while (checksum.length % 2 == 0);

console.log(checksum);