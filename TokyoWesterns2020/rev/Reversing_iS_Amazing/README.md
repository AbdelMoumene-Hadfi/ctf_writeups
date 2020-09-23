### Reversing iS Amazing
  * point : 126
### Analyze 
![Flag](img/main.png)
### Solution
```bash
frida -f ./rsa --runtime=v8 --no-pause  -l ./get_flag.js "TWCTF{*****************************}"
```
### Flag
![Flag](img/getFlag.png)
