array = [0x4f,0x14be74f15,0x4,0x3,0x13,0x115,0x77cf4b645b61,0x2,0x11,0x21c1,0x182265e9,0x833,0xaab,0x8daaad]
stack = [hex(array[0]*array[1]),hex(array[2]*array[3]*array[4]*array[5]*array[6]),hex(array[7]*array[8]*array[9]*array[10]),hex(array[11]*array[12]*array[13])]
#['0x666c61677b', '0x73757033725f7634', '0x6c31645f7072', '0x306772346d7d']
flag = ""
for i in stack :
    flag+=i[2:]
print(flag.decode("hex"))
