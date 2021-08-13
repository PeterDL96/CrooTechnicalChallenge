FROM python:3

WORKDIR /api

ENV FLASK_APP=api.py

ENV LASK_ENV=development

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD [ "python", "api.py"]