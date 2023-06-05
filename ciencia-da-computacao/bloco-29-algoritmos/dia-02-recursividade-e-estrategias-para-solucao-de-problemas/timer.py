def timer(value):
    if value == 0:
        print("acabou")
    else:
        print(value)
        timer(value - 1)


timer(3)
