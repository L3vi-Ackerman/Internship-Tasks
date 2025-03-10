from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'author',views.AuthorViewSet,basename= 'author')
router.register(r'publisher',views.PublisherViewSet,basename = 'publisher')
router.register(r'category',views.CategoryViewSet,basename = 'category')
router.register(r'customer',views.CustomerViewSet,basename = 'customer')
router.register(r'order',views.OrderViewSet,basename = 'order')
router.register(r'order-item',views.OrderItemViewSet,basename = 'order-item')
router.register(r'review',views.ReviewViewSet,basename = 'review')
router.register(r'inventory',views.InventoryLogViewSet,basename = 'inventory')
router.register(r'cart',views.CartViewSet,basename = 'cart')
router.register(r'cart-item',views.CartItemViewSet,basename = 'cart-item')
urlpatterns = [
        path('books/',views.BookList.as_view()),
        path('books/<int:pk>/',views.BookItemDetail.as_view()),
        ] + router.urls

