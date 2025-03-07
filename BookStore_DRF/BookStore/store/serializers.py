from rest_framework import serializers
from store.models import (
    Author,
    Publisher,
    Category,
    Book,
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
    author = serializers.PrimaryKeyRelatedField(queryset=Author.objects.all())
    publisher = serializers.PrimaryKeyRelatedField(queryset=Publisher.objects.all())
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    publication_date = serializers.DateField()
    isbn = serializers.CharField(max_length=13)
    price = serializers.DecimalField(max_value=Decimal("10000"), decimal_places=2,max_digits = 10)
    stock = serializers.IntegerField(min_value=0, default=0)

    def create(self, validated_data):
        return Book.objects.create(**validated_data)

    def update(self, instance, validated_data):

        instance.title = validated_data.get("title", instance.title)
        instance.author = validated_data.get("author", instance.author)
        instance.publisher = validated_data.get("publisher", instance.publisher)
        instance.category = validated_data.get("category", instance.category)
        instance.publication_date = validated_data.get(
            "publication_date", instance.publication_date
        )
        instance.isbn = validated_data.get("isbn", instance.isbn)
        instance.price = validated_data.get("price", instance.price)
        instance.stock = validated_data.get("stock", instance.stock)

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
    book = serializers.PrimaryKeyRelatedField(queryset = Book.objects.all())
    customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all())
    rating = serializers.IntegerField() 
    review_text = serializers.CharField()
    

    def create(self, validated_data):
        return Review.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.customer = validated_data.get('customer',instance.user)
        instance.book = validated_data.get("book",instance.book)
        instance.customer = validated_data.get("customer",instance.customer)
        instance.rating = validated_data.get("rating",instance.rating)
        instance.review_text = validated_data.get("review_text",instance.review_text)
        instance.save()
        return instance




class OrderSerializer(serializers.Serializer):
    customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all())
    order_date = serializers.DateField()
    total_price = serializers.DecimalField(decimal_places=2,max_digits = 10)
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


class OrderItemSerializer(serializers.Serializer):
    order = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all())
    book = serializers.PrimaryKeyRelatedField(queryset=Book.objects.all())
    quantity = serializers.IntegerField(min_value=0, default=0)

    def create(self, validated_data):
        return OrderItem.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.address = validated_data.get("address", instance.address)
        instance.save()
        return instance

class InventoryLogSerializer(serializers.Serializer):
    book = serializers.PrimaryKeyRelatedField(queryset=Book.objects.all())
    change = serializers.IntegerField(min_value=0)
    def create(self,validated_data):
        return InventoryLog.objects.create(**validated_data)
    def update(self,instance,validated_data):
        instance.book = validated_data.get("book",instance.book)
        instance.change = validated_data.get("change",instance.change)

class CartSerializer(serializers.Serializer):
    customer = serializers.PrimaryKeyRelatedField(queryset=Customer.objects.all())
    book = serializers.PrimaryKeyRelatedField(queryset=Book.objects.all())
    quantity = serializers.IntegerField(min_value=1, default=1)
    def create(self,validated_data):
        return Cart.objects.create(**validated_data)

    def update(self,instance,validated_data):
        
        instance.customer = validated_data.get("address",instance.customer)
        instance.book = validated_data.get("book",instance.book)
        instance.quantity = validate_data.get("quantity",instance.quantity)
