from log_complexity import binary_search


def do_something(array1, array2):
    for number in array1:  # O (n)
        binary_search(array2, number)  # O (log n)
