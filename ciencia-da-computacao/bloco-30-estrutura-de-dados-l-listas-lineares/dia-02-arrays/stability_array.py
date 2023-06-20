class Stability:
    def __init__(self):
        self.data = []
        self.count = 0

    def quality(self, array):
        for n in array:
            if n == 0:
                self.count += 1

    def get(self):
        return self.count


a = Stability()

a.quality([1, 2, 3, 1, 0, 0])

print(a.get())
