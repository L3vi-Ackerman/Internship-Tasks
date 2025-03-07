from django.db import models
from django.contrib.auth.models import User


class Author(models.Model):
    name = models.CharField(max_length=255)
    bio = models.TextField(blank=True, null=True)
    experience = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name


class Publisher(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    publication_date = models.DateField()
    isbn = models.CharField(max_length=13, unique=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.TextField()
    phone_number = models.CharField(max_length=10)

    def __str__(self):
        return self.user.username


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)
    total_price = models.DecimalField(decimal_places=2, max_digits=10)
    status = models.CharField(
        max_length=20,
        choices=[
            ("Pending", "Pending"),
            ("Shipped", "Shipped"),
            ("Delivered", "Delivered"),
        ],
        default="Pending",
    )

    def __str__(self):
        return f"Order {self.id} by {self.customer.user.username}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="items")
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(decimal_places=2,max_digits=10)

    def __str__(self):
        return f"{self.quantity} x {self.book.title} in Order {self.order.id}"


class Review(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name="reviews")
    rating = models.IntegerField(choices=[(i, str(i)) for i in range(1, 5)])
    review_text = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.customer.user.username} for {self.book.title}"


class InventoryLog(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    change = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.change} for {self.book.title} at {self.timestamp}"


class Cart(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quantity} x {self.book.title} in {self.customer.user.username}'s cart"

