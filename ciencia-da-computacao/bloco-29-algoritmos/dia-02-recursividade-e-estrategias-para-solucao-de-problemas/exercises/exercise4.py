def mdc(num1, num2):
    if num2 == 0:
        return num1
    return mdc(num2, num1 % num2)


print(mdc(22, 220))
