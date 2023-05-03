import json

import csv


# Recuperar o arquivo books
def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    # entra nos livros
    for book in books:
        # entra na categoria que é um array
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1

    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


# escrever o csv
def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    with open("books.json") as file:
        books = retrieve_books(file)

    book_count_by_category = count_books_by_categories(books)

    books_number = len(books)
    percentage_books = calculate_percentage_by_category(
        book_count_by_category, books_number
    )

    header = ["caregoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, percentage_books)
