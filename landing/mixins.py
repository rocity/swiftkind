from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template import Context
from django.template.loader import get_template


class ContactUsMixin(object):

    def send_message(self, data):
        """manages sending of inquiries
        """
        subject = "Swiftkind Notification"
        html = get_template('contact/contact-us.html')
        context_data = Context({'data':data})

        email_to = settings.COMPANY_EMAIL
        html_content = html.render(context_data)
        msg = EmailMultiAlternatives(subject, to=[email_to])
        msg.attach_alternative(html_content, "text/html")
        msg.send()