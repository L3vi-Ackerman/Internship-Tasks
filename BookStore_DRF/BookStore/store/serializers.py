from rest_framework import serializers
from store.models import (
    Author,
    Publisher,
    Category,
    Book,
    CartItem,
    Customer,
    Order,
    OrderItem,
    Review,
    InventoryLog,
    Cart,
)
from django.contrib.auth.models import User
from decimal import Decimal


class AuthorSerializer(serializers.Serializer):
    name = serializers.CharField(required=True, allow_blank=False, max_length=50)
    bio = serializers.CharField(required=False, allow_blank=True, max_length=300)
    experience = serializers.IntegerField(max_value=2)

    def create(self, validated_data):
        return Author.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.bio = validated_data.get("bio", instance.bio)
        instance.save()
        return instance


class PublisherSerializer(serializers.Serializer):
    name = serializers.CharField(
        required=True,
        allow_blank=False,
    )
    address = serializers.CharField(required=False, allow_blank=False)

    def create(self, validated_data):
        return Publisher.objects.create(**validated_data)

    def update(self, instance, validated_data):

        instance.name = validated_data.get("name", instance.name)
        instance.address = validated_data.get("address", instance.address)
        instance.save()
        return instance


class CategorySerializer(serializers.Serializer):
    name = serializers.CharField()

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.save()
        return instance


class BookSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255)
    author_id = serializers.PrimaryKeyRelatedField(
        queryset=Author.objects.all(), source="author"
    )
    publisher = serializers.PrimaryKeyRelatedField(queryset=Publisher.objects.all())
    author = AuthorSerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source="category"
    )
    category = CategorySerializer(read_only=True)
    publication_date = serializers.DateField()
    isbn = serializers.CharField(max_length=13)
    price = serializers.DecimalField(
        max_value=Decimal("10000"), decimal_places=2, max_digits=10
    )
    stock = serializers.IntegerField(min_value=0, default=0)

    def create(self, validated_data):
        return Book.objects.create(**validated_data)

    def update(self, instance, validated_data):

        instance.title = validated_data.get("title", instance.title)
        instance.publisher = validated_data.get("publisher", instance.publisher)
        instance.category = validated_data.get("category", instance.category)
        instance.publication_date = validated_data.get(
            "publication_date", instance.publication_date
        )
        instance.isbn = validated_data.get("isbn", instance.isbn)
        instance.price = validated_data.get("price", instance.price)
        instance.stock = validated_data.get("stock", instance.stock)
        if "author" in validated_data:
            instance.author = validated_data["author"]
        if "category" in validated_data:
            instance.category = validated_data["category"]
        instance.save()
        return instance


class CustomerSerializer(serializers.Serializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    address = serializers.CharField(max_length=50, required=True, allow_blank=False)

    def create(self, validated_data):
        return Customer.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.address = validated_data.get("address", instance.address)
        instance.save()
        return instance


class ReviewSerializer(serializers.Serializer):
    customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all())
    book = serializers.PrimaryKeyRelatedField(queryset=Book.objects.all())

    rating = serializers.IntegerField()
    review_text = serializers.CharField()

    def create(self, validated_data):
        return Review.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.customer = validated_data.get("customer", instance.user)
        instance.book = validated_data.get("book", instance.book)
        instance.customer = validated_data.get("customer", instance.customer)
        instance.rating = validated_data.get("rating", instance.rating)
        instance.review_text = validated_data.get("review_text", instance.review_text)
        instance.save()
        return instance


class OrderSerializer(serializers.Serializer):
    customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all())
    status = serializers.ChoiceField(
        choices=[
            ("Pending", "Pending"),
            ("Shipped", "Shipped"),
            ("Delivered", "Delivered"),
        ],
        default="Pending",
    )

    def create(self, validated_data):
        return Order.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.customer = validated_data.get("customer", instance.customer)
        instance.order_date = validated_data.get("order_date", instance.order_date)
        instance.total_price = validated_data.get("total_price", instance.total_price)
        instance.status = validated_data.get("status", instance.status)

        instance.save()
        return instance

class BookMinimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["title","price"]

class OrderItemSerializer(serializers.Serializer):
    order_id = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all(), source="order")
    book_id = serializers.PrimaryKeyRelatedField(queryset=Book.objects.all(), source="book")
    order = OrderSerializer(read_only=True)
    book = BookMinimalSerializer(read_only=True)
    quantity = serializers.IntegerField(min_value=1)  
    price = serializers.DecimalField(decimal_places=2, max_digits=10, read_only=True)  # 

    def create(self, validated_data):
        book = validated_data["book"]
        quantity = validated_data["quantity"]

        validated_data["price"] = book.price * quantity
        return OrderItem.objects.create(**validated_data)

    def update(self, instance, validated_data):
        if "book" in validated_data or "quantity" in validated_data:
            book = validated_data.get("book", instance.book)
            quantity = validated_data.get("quantity", instance.quantity)

            instance.price = book.price * quantity

        instance.quantity = validated_data.get("quantity", instance.quantity)
        instance.save()
        return instance
   
    
class InventoryLogSerializer(serializers.Serializer):
    book = serializers.PrimaryKeyRelatedField(queryset=Book.objects.all())
    change = serializers.IntegerField(min_value=0)

    def create(self, validated_data):
        return InventoryLog.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.book = validated_data.get("book", instance.book)
        instance.change = validated_data.get("change", instance.change)
        instance.save()
        return instance

class CartItemSerializer(serializers.Serializer):
    cart = serializers.PrimaryKeyRelatedField(queryset=Cart.objects.all())
    book = serializers.PrimaryKeyRelatedField(queryset = Book.objects.all())
    quantity = serializers.IntegerField(min_value = 1)
    def create(self,validated_data):
        return CartItem.objects.create(**validated_data)
    def update(self,instance,validated_data):
        instance.cart = validated_data.get('cart',instance.cart)
        instance.book = validated_data.get('book',instance.book)
        instance.quantity = validated_data.get("quantity",instance.quantity)
        instance.save()
        return instance

class CartSerializer(serializers.Serializer):
    customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all())

    def create(self, validated_data):
        return Cart.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.customer = validated_data.get('customer', instance.customer)
        instance.save()
        return instance

