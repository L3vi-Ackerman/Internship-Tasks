from django.shortcuts import render
from rest_framework import viewsets
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
from rest_framework.views import APIView

from rest_framework.response import Response
from store.serializers import (
    AuthorSerializer,
    PublisherSerializer,
    CategorySerializer,
    BookSerializer,
    CustomerSerializer,
    OrderSerializer,
    OrderItemSerializer,
    InventoryLogSerializer,
    CartSerializer,
    ReviewSerializer
)

from rest_framework import status

class BookList(APIView):
    def get(self,request, format = None):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

    def post(self,request,format=None):
        serializer = BookSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)

class BookItemDetail(APIView):
    def get_object(self,pk):
        try:
            return Book.objects.get(pk=pk)
        except:
            raise Http

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class PublisherViewSet(viewsets.ModelViewSet):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CustomerViewSet(viewsets.ModelViewSet):
    queryset =Customer.objects.all()
    serializer_class = CustomerSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class InventoryLogViewSet(viewsets.ModelViewSet):
    queryset = InventoryLog.objects.all()
    serializer_class = InventoryLogSerializer


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer



