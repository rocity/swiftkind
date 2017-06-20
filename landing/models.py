from django.db import models


class Header(models.Model):
    """ main header
    """
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200, null=True, blank=True)
    desc = models.TextField()
    image = models.ImageField(upload_to="landing/headers/")

    def __str__(self):
        return "{}".format(self.title)


class Stack(models.Model):
    """ tech stack
    """
    name = models.CharField(max_length=200)
    url = models.URLField(null=True, blank=True)
    image = models.ImageField(upload_to="landing/stacks/")

    def __str__(self):
        return "{}".format(self.name)


class Project(models.Model):
    """ project
    """
    title = models.CharField(max_length=200)
    desc = models.TextField(null=True, blank=True)

    thumbnail = models.ImageField(upload_to="projects/thumbnails/")

    github = models.URLField(null=True, blank=True)
    demo = models.URLField(null=True, blank=True)

    def __str__(self):
        return "{}".format(self.title)


class Mockup(models.Model):
    """ mockups
    """
    project = models.ForeignKey('Project')
    name = models.CharField(max_length=200)
    image = models.ImageField()

    def __str__(self):
        return "{}".format(self.name)


class Message(models.Model):
    """messages
    """
    sender = models.CharField(max_length=200)
    email = models.EmailField(max_length=100)
    company = models.CharField(max_length=200, null=True, blank=True)
    phone = models.CharField(max_length=50)
    message = models.TextField()

    def __str__(self):
        return "{}".format(self.sender)


class Applicant(models.Model):
    """ applicant upload cv
    """
    cv = models.FileField(upload_to='cv/%Y/%m/%d')
    upload_date = models.DateTimeField(auto_now_add=True) 

    def __str__(self):
        return "{}".format(self.cv)

