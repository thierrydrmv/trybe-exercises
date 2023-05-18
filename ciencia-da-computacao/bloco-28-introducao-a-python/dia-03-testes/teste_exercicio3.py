from exercicio3 import validate_email
import pytest


def test_username_can_only_contain_letters():
    assert validate_email("bob@website.ext") is None


def test_username_can_contain_letters_and_digits():
    assert validate_email("bob123@website.ext") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert validate_email("bob-123@website.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert validate_email("bob-123_@website.ext") is None


def test_username_should_starts_with_letter():
    assert validate_email("a1a@website.ext") is None


def test_username_when_dont_starts_with_letter_raise_exception():
    with pytest.raises(ValueError):
        validate_email("123@website.ext")


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError):
        validate_email("a12%a@website.ext")


def test_website_contain_only_letters_and_digits():
    assert validate_email("bob@website123.com") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("sadajn@website!1.com")


def test_extension_should_contain_only_three_chars():
    assert validate_email("dsd@website123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("dsd@website123.comw")
