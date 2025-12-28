from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from rest_framework import status

# views for Contact model and serializer
@api_view(['POST'])
def contact_form_view(request):
    # Get the data from the request
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    # Email configuration (make sure SMTP is configured in settings.py)
    try:
        send_mail(
            subject=f"Contact Form Message from {name}",
            message=message,
            from_email=email,
            recipient_list=['your_email@example.com'],  # Your email here
            fail_silently=False
        )
        return Response({"message": "Message sent successfully!"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)