let rsaAddr=null;
const flagLength="TWCTF{*****************************}".length;

Interceptor.attach(Module.findExportByName(null, 'RSA_private_encrypt'), {
  //int RSA_private_encrypt(int flen, unsigned char *from,unsigned char *to, RSA *rsa, int padding);
  onEnter: function (args) {
    console.log('flen(int)            =', args[0]);
    console.log('from(unsigned char*) =', args[1].readCString());
    console.log('to  (unsigned char*) =', args[2]);
    console.log('rsa (RSA*)           =', args[3]); rsaAddr = args[3] ;
    console.log('padding(int)         =', args[4]);
  },
  onLeave: function (retValue) {
    console.log(`Size                 = ${retValue}`);
  }
})

//int RSA_public_decrypt(int flen, unsigned char *from,unsigned char *to, RSA *rsa, int padding);
var encryptFunction = new NativeFunction(Module.findExportByName(null, 'RSA_public_decrypt'),'int', ['int','pointer', 'pointer','pointer','int']);

Interceptor.attach(Module.findExportByName(null, 'memcmp'), {
  onEnter: function (args) {
    var flag = Memory.alloc(flagLength);
    encryptFunction(0x80,args[1],flag,rsaAddr,1)
    console.log('FLAG =', flag.readCString());
  },
  onLeave: function (retValue) {
    console.log('Frida is love');
  }
})
